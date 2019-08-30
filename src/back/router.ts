import * as express from 'express';
import * as path from 'path';
import { login } from './login/';
import { logout } from './logout/';
import { serveHtml } from './ssr/';

require('dotenv').config();

const { env: { NODE_ENV } } = process;

const FRONT_URL = NODE_ENV === 'production'
  ? ''
  : path.resolve(__dirname, '../../dist/front');

export const router = (app: import('express').Application): void => {
  app.use(express.static(FRONT_URL));
  app.use(ServerRoutes.loginRoute, login);
  app.use(ServerRoutes.logoutRoute, logout);
  app.use(ServerRoutes.publicRoute, serveHtml);
};