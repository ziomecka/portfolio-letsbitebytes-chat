import { getHtml } from './get-html';
import { store } from './store';

export const htmlFile = (req: ExpressRequest, res: ExpressResponse): void => {
  res.type('html').send(getHtml(store));
};