import { getHtml } from './get-html';
import { getStore } from './get-store';

export const htmlFile = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
  const store = await getStore();
  const html = getHtml(store);

  res.type('html').send(html);
};
