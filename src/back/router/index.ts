import {
  createUser,
  cssFiles,
  jsFiles,
  login,
  logout,
  onlyIfQuery,
  page404,
} from './middlewares/';
import { htmlFile } from './ssr/';

export const router = (app: ExpressApplication): void => {
  app.get('*.js', jsFiles);
  app.get('*.css', cssFiles);
  app.get(ServerRoutes.createUserRoute, onlyIfQuery(createUser));
  app.get(ServerRoutes.loginRoute, onlyIfQuery(login));
  app.get(ServerRoutes.logoutRoute, onlyIfQuery(logout));

  app.get(ServerRoutes.publicRoute, htmlFile);

  app.use(page404);
};
