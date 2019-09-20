import { usersManager } from '../../';

export const createUser =
async ({ query }: ExpressRequest, res: ExpressResponse): Promise<void> => {
  const { login, password, confirmPassword } = query;

  try {
    res.send({
      result: await usersManager.createUser(login, password, confirmPassword),
    });
  } catch (err) {
    res.send({
      result: false,
      error: err.code,
    });
  }
};
