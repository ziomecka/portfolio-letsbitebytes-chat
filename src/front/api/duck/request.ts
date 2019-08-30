import { buildQueryParams } from './build-query-params';

const DEFAULT_REQUEST_INIT = {
  method: 'get' as ApiMethods,
};

export const request =
  async ( url: ServerRoutes, props?: ApiRequestProps, requestInit: ApiRequestInit = DEFAULT_REQUEST_INIT ): Promise<ApiResponse> => {
    const { queryParams, body } = Object(props);

    if (requestInit.method === 'post' && body) {
      Object.assign(requestInit, { body: JSON.stringify(body) });
    }

    const fetchUrl = queryParams ? buildQueryParams(url, queryParams) : url;

    try {
      const response = await fetch(fetchUrl, requestInit);
      return await response.json();
    } catch {
      return Promise.reject();
    }
  };