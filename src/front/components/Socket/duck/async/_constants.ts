export const CONNECTION_TIMEOUT = 10000;

export const SOCKET_URL = process.env.NODE_ENV === 'production'
  ? `https://${ process.env.PRODUCTION_URL }`
  : `http://localhost:${ process.env.PORT }`;
