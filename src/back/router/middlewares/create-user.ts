import { user } from '../../user/';

export const createUser =
async ({ query }: ExpressRequest, res: ExpressResponse): Promise<void> => {
  const { login, password, confirmPassword } = query;

  try {
    res.send({
      result: await user.createUser(login, password, confirmPassword),
    });
  } catch (err) {
    res.send({
      result: false,
      error: err.code,
    });
  }
};
