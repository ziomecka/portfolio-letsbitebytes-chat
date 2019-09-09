import * as path from 'path';
import { BUNDLE_PATH } from './constants';

export const page404 = (req: ExpressRequest, res: ExpressResponse): void => {
  const isAppRoute = [
    ServerRoutes.loginRoute as string,
    ServerRoutes.logoutRoute as string,
    ServerRoutes.protectedRoute as string,
  ].includes(req.url);

  if (!isAppRoute) {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.sendFile(path.join(BUNDLE_PATH, 'page404.html'));
  } else {
    res.status(204);
    res.end();
  }
};