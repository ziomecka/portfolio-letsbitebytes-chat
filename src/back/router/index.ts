import { login } from './middlewares/login';
import { logout } from './middlewares/logout';
import { notExists } from './middlewares/not-exists';
import { onlyIfQuery } from './only-if-query';
import { serveCSSFiles } from './middlewares/css-files';
import { serveHtml } from './ssr/';
import { serveJSFiles } from './middlewares/js-files';

export const router = (app: ExpressApplication): void => {
  app.get('*.js', serveJSFiles);
  app.get('*.css', serveCSSFiles);
  app.get(ServerRoutes.loginRoute, onlyIfQuery(login));
  app.get(ServerRoutes.logoutRoute, onlyIfQuery(logout));

  app.get(ServerRoutes.publicRoute, serveHtml);

  app.use(notExists);
};