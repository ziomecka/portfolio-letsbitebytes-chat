import * as express from 'express';
import { BUNDLE_PATH } from '../constants';
import { login } from './login';
import { logout } from './logout';
import { onlyIfQuery } from './only-if-query';
import { serveHtml } from './ssr/';
import { serveJSFiles } from './js-files';

export const router = (app: ExpressApplication): void => {
  app.get('*.js', serveJSFiles);
  app.use(express.static(BUNDLE_PATH));
  app.get(ServerRoutes.loginRoute, onlyIfQuery(login));
  app.get(ServerRoutes.logoutRoute, onlyIfQuery(logout));
  app.get(ServerRoutes.publicRoute, serveHtml);
};