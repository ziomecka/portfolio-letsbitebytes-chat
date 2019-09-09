import {
  cssFiles,
  jsFiles,
  login,
  logout,
  notExists,
  onlyIfQuery,
} from './middlewares/';
import { serveHtml } from './ssr/';

export const router = (app: ExpressApplication): void => {
  app.get('*.js', jsFiles);
  app.get('*.css', cssFiles);
  app.get(ServerRoutes.loginRoute, onlyIfQuery(login));
  app.get(ServerRoutes.logoutRoute, onlyIfQuery(logout));

  app.get(ServerRoutes.publicRoute, serveHtml);

  app.use(notExists);
};