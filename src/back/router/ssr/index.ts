import { getHtml } from './get-html';
import { getNotifications } from './get-notifications';
import { getStore } from './get-store';

export const htmlFile = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
  const notifications = await getNotifications();
  const store = await getStore(notifications && { notifications });
  const html = getHtml(store);

  res.type('html').send(html);
};
