import { buildUrl } from './build-url';

const defaultRequestInit = {
  method: 'get',
  headers: new Headers([[ 'Content-Type', 'application/json; charset=UTF-8' ]]),
  credentials: 'include',
} as ApiRequestInit;

export const request = async (
  url: ServerRoutes,
  {
    queryParams,
    body,
  }: ApiRequestProps = {},
  {
    method = defaultRequestInit.method,
    credentials = defaultRequestInit.credentials,
    headers = defaultRequestInit.headers,
  }: ApiRequestInit = defaultRequestInit
): Promise<ApiResponse> => {

  const fetchUrl = queryParams
    ? buildUrl(url, queryParams)
    : url;

  const requestInit = { method, credentials, headers };

  if (method === 'post' && body) {
    Object.assign(requestInit, { body: JSON.stringify(body) });
  }

  try {
    const response = await fetch(fetchUrl, requestInit);
    return await response.json();
  } catch {
    return Promise.reject();
  }
};
