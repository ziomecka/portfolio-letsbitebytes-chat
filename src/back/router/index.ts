import {
  cssFiles,
  jsFiles,
  login,
  logout,
  notExists,
  onlyIfQuery,
} from './middlewares/';
import { htmlFile } from './ssr/';

export const router = (app: ExpressApplication): void => {
  app.get('*.js', jsFiles);
  app.get('*.css', cssFiles);
  app.get(ServerRoutes.loginRoute, onlyIfQuery(login));
  app.get(ServerRoutes.logoutRoute, onlyIfQuery(logout));

  app.get(ServerRoutes.publicRoute, htmlFile);

  app.use(notExists);
};