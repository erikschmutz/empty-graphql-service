import { assert } from './assert';
import { config } from 'dotenv';
config();

export const verify = () => {
  assert(!!process.env.SERVER_PORT, 'Missing SERVER_PORT in env');
  assert(!!process.env.DB_PORT, 'Missing DB_PORT in env');
  assert(!!process.env.DB_USER, 'Missing DB_USER in env');
  assert(!!process.env.DB_NAME, 'Missing DB_NAME in env');
  assert(!!process.env.DB_PASS, 'Missing DB_PASS in env');
  assert(!!process.env.DB_HOST, 'Missing DB_HOST in env');
};

export interface Env {
  SERVER_PORT: string;
  DB_PORT: string;
  DB_USER: string;
  DB_NAME: string;
  DB_PASS: string;
  DB_HOST: string;
}

export default (process.env as unknown) as Env;
