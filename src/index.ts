import 'reflect-metadata';
import 'source-map-support/register';

import Container from '@utils/Container';
import TYPES from '@utils/Types';
import { verify } from '@utils/Env';
import { OnInit } from './interfaces/OnInit';

const bootstap = () => {
  // Verifies all the indexes
  verify();
  const server = Container.getContainer().get<OnInit>(TYPES.Server);
  server.onInit();
};

bootstap();
