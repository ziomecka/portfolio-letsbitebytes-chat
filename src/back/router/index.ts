import * as express from 'express';
import {
  BUNDLE_PATH,
  BUNDLE_URL,
} from '../constants';
import { login } from './login';
import { logout } from './logout';
import { serveHtml } from './ssr/';

export const router = (app: ExpressApplication): void => {
  app.get(BUNDLE_URL, express.static(BUNDLE_PATH));
  app.use(ServerRoutes.loginRoute, login);
  app.use(ServerRoutes.logoutRoute, logout);
  app.use(ServerRoutes.publicRoute, serveHtml);
};