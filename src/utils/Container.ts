import { Container as InversifyContainer } from 'inversify';
import Server from '@server/Server';
import Env from './Env';
import logger from './Logger';
import TYPES from './Types';
import { UserService } from 'src/controllers/users/UserService';

import * as controllers from '../controllers/index';

export default class Container {
  private static container: InversifyContainer;

  static getContainer() {
    if (!this.container) {
      this.container = new InversifyContainer();
    }

    // Registers all the services to symbols
    this.container.bind(TYPES.Server).to(Server);
    this.container.bind(TYPES.Logger).toConstantValue(logger);
    this.container.bind(TYPES.Env).toConstantValue(Env);
    this.container.bind(TYPES.UserService).toConstantValue(UserService);

    for (const controller of Object.values(controllers)) {
      // Binds all the controllers exported from the controllers
      // folder to it self
      this.container.bind(controller).toSelf();
    }

    return this.container;
  }
}
