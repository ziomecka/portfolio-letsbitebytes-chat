import * as express from 'express';
import {
  BUNDLE_PATH,
  BUNDLE_URL,
} from '../constants';
import { login } from './login';
import { logout } from './logout';
import { serveHtml } from './ssr/';

export const router = (app: ExpressApplication): void => {
  app.use(express.static(BUNDLE_PATH));
  app.get(BUNDLE_URL, express.static(BUNDLE_PATH));
  app.get(ServerRoutes.loginRoute, login);
  app.get(ServerRoutes.logoutRoute, logout);
  app.get(ServerRoutes.publicRoute, serveHtml);
};