import { User } from '@models/User';
import { ConnectionOptions } from 'typeorm';
import env from './utils/Env';

const config: ConnectionOptions = {
  type: 'mysql',
  port: Number.parseInt(env.DB_PORT),
  host: env.DB_HOST,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [User],
  logging: true,
  logger: 'file',
  migrations: ['migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'migrations',
  },
};

export = config;
