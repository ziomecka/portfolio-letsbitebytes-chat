import { login } from './middlewares/login';
import { logout } from './logout';
import { notExists } from './not-exists';
import { onlyIfQuery } from './only-if-query';
import { serveCSSFiles } from './middlewares/css-files';
import { serveHtml } from './ssr/';
import { serveJSFiles } from './middlewares/js-files';

export const router = (app: ExpressApplication): void => {
  app.get('*.js', serveJSFiles);
  app.get('*.css', serveCSSFiles);
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