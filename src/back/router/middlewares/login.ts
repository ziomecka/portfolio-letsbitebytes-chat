import {
  DOMAIN,
  IS_PRODUCTION,
  SESSION_COOKIE_AGE,
  SESSION_COOKIE_NAME,
} from '../../constants';
import { usersManager } from '../../';

export const login = async ({ query }: ExpressRequest, res: ExpressResponse): Promise<void> => {
  let response = { result: false } as ApiResponse;
  let token: string;

  try {
    ({ token, ...response } = await usersManager.login(query.login, query.password));

    if (response.result && token) {
      res.cookie(SESSION_COOKIE_NAME, token, {
        maxAge: SESSION_COOKIE_AGE,
        httpOnly: true,
        secure: IS_PRODUCTION,
        domain: DOMAIN,
      });
    }
  } catch (err) {
    response.error = err;
  }

  res.send(response);
};
