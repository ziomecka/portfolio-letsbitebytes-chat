import { user } from '../../user/';

export const login = async ({ query }: ExpressRequest, res: ExpressResponse): Promise<void> => {
  let response = {
    result: false,
  } as ApiResponse;

  try {
    response = await user.login(query.login, query.password);
  } catch (err) {
    response.error = err;
  }

  res.send(response);
};
