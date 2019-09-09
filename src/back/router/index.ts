import {
  cssFiles,
  login,
  logout,
  notExists,
  onlyIfQuery,
  serveJSFiles,
} from './middlewares/';
import { serveHtml } from './ssr/';

export const router = (app: ExpressApplication): void => {
  app.get('*.js', serveJSFiles);
  app.get('*.css', cssFiles);
  app.get(ServerRoutes.loginRoute, onlyIfQuery(login));
  app.get(ServerRoutes.logoutRoute, onlyIfQuery(logout));

  app.get(ServerRoutes.publicRoute, serveHtml);

  app.use(notExists);
};