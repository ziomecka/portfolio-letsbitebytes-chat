import { NOT_EXIST_PATH } from '../../constants';

export const notExists = ( req: ExpressRequest, res: ExpressResponse ): void => {
  res.sendFile(NOT_EXIST_PATH);
};