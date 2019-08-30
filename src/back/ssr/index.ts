import { getAppMarkup } from './get-app-markup';
import { getHtml } from './get-html';
import { store } from './store';

const prepareHtml = ():string => getHtml(getAppMarkup(store), store);

export const serveHtml = (req: import('express').Request, res: import('express').Response): void => {
  res.type('html').send(prepareHtml());
};