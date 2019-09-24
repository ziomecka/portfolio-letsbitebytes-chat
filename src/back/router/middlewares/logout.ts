import {
  DOMAIN,
  IS_PRODUCTION,
  SESSION_COOKIE_NAME,
} from '../../constants';
import { usersManager } from '../../';

export const logout = async ({ query }: ExpressRequest, res: ExpressResponse): Promise<void> => {
  const { login } = query;
  const response = {} as ApiResponse;

  try {
    response.result = await usersManager.logout(login);

    if (response.result) {
      res.cookie(SESSION_COOKIE_NAME, '', {
        maxAge: 1,
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
