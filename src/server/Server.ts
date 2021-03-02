import { inject, injectable } from 'inversify';
import { OnInit } from '@interfaces/OnInit';
import TYPES from '@utils/Types';
import { Logger } from 'winston';
import express, { Application } from 'express';
import { Env } from '@utils/Env';
import * as fs from 'fs';
import { buildFederatedSchema } from './build-schema';
import Container from '@utils/Container';
import ResolveReference from './ResolveReference';
import * as controllers from 'src/controllers/index';

@injectable()
export default class Server implements OnInit {
  private app: Application;
  private port: number;

  constructor(
    @inject(TYPES.Logger)
    private logger: Logger,
    @inject(TYPES.Env)
    private env: Env
  ) {
    this.app = express();
    this.registerRoutes();
    this.port = Number.parseInt(env.SERVER_PORT);
  }

  private registerRoutes() {
    this.app.get('/_internal_/healthcheck', (req, res) => {
      res.send({ status: 'healthy' });
    });

    this.app.get('/', (req, res) => {
      const page = fs.readFileSync('src/assets/index.html', 'utf-8');
      res.contentType('html');
      res.send(page);
    });
  }

  async onInit() {
    // eslint-disable-next-line
    const schema = await buildFederatedSchema(
      {
        resolvers: Object.values(controllers) as any,
        container: Container.getContainer(),
        emitSchemaFile: true,
      },
      ResolveReference.getAllReferenceResolvers()
    );

    this.logger.info(`Server started on http://localhost:${this.port}`);
    this.app.listen(this.port);
  }
}
