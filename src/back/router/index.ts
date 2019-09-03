import * as express from 'express';
import * as path from 'path';
import { login } from './login';
import { logout } from './logout';
import { serveHtml } from './ssr/';

require('dotenv').config();

const { env: { NODE_ENV } } = process;

const frontUrl = NODE_ENV === 'production'
  ? ''
  : path.resolve(__dirname, '../../../build/');

export const router = (app: ExpressApplication): void => {
  app.use(express.static(frontUrl));
  app.use(ServerRoutes.loginRoute, login);
  app.use(ServerRoutes.logoutRoute, logout);
  app.use(ServerRoutes.publicRoute, serveHtml);
};