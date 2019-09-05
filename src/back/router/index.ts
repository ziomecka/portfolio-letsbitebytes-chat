import * as express from 'express';
import { BUNDLE_PATH } from '../constants';
import { login } from './login';
import { logout } from './logout';
import { notExists } from './not-exists';
import { onlyIfQuery } from './only-if-query';
import { serveHtml } from './ssr/';
import { serveJSFiles } from './js-files';

export const router = (app: ExpressApplication): void => {
  app.get('*.js', serveJSFiles);
  app.use(express.static(BUNDLE_PATH));
  app.get(ServerRoutes.loginRoute, onlyIfQuery(login));
  app.get(ServerRoutes.logoutRoute, onlyIfQuery(logout));

  // if browser refresh then go to main page
  app.get(
    [ ServerRoutes.loginRoute,
      ServerRoutes.logoutRoute,
      ServerRoutes.publicRoute,
    ],
    serveHtml
  );
  app.get('*', notExists);
};