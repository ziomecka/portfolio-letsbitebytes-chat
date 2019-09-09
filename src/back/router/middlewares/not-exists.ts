import * as path from 'path';
import {
  BUNDLE_PATH,
  NOT_EXIST_PATH,
} from '../../constants';

export const notExists = ( req: ExpressRequest, res: ExpressResponse, next: ExpressNext ): void => {
  const isAppRoute = [
    ServerRoutes.loginRoute as string,
    ServerRoutes.logoutRoute as string,
    ServerRoutes.protectedRoute as string,
  ].includes(req.url);

  if (!isAppRoute) {
    console.log('path.join( BUNDLE_PATH, NOT_EXIST_PATH )', path.join( BUNDLE_PATH, NOT_EXIST_PATH ));
    res.set('Content-Type', 'text/html');
    res.status(200).sendFile(path.join( BUNDLE_PATH, NOT_EXIST_PATH ));
  } else {
    res.status(204);
  }

  res.end();
};