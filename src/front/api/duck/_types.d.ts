declare interface ApiRequestProps {
  queryParams?: LoginActionProps;
  body?: Record<string, unknown>;
}

declare type ApiMethods = 'get' | 'post';

// TODO make a Partial
declare type ApiRequestInit = {
  method: ApiMethods;
};

declare type ApiRequest = [ ServerRoutes, ApiRequestProps, ApiRequestInit? ];

declare interface ApiResponse {
  result: boolean;
  data?: UserState;
}