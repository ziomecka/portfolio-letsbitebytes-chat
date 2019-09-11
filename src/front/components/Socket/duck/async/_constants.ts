import { PRODUCTION_URL } from '../../../../../common/';

export const CONNECTION_TIMEOUT = 10000;

export const SOCKET_URL = process.env.NODE_ENV === 'production'
  ? `https://${ PRODUCTION_URL }`
  : `http://localhost:${ process.env.PORT }`;
