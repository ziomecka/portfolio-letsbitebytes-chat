declare type QueryParams = |
  LoginActionProps |
  LogoutActionProps;

declare interface ApiRequestProps {
  queryParams?: QueryParams;
  body?: Record<string, unknown>;
}

declare type ApiMethods = 'get' | 'post';

declare type ApiRequestInit = {
  method?: ApiMethods;
  credentials?: RequestCredentials;
  headers?: import('node-fetch').Headers;
};

declare type ApiRequest = [ ServerRoutes, ApiRequestProps, ApiRequestInit? ];

declare interface ApiResponse {
  result: boolean;
  data?: ApiResponseData;
  error?: ApiErrors;
}

declare interface ApiLoginResponse {
  role?: UserRole;
  contacts?: string[];
  conversations?: Conversations;
  logout?: boolean;
}

type ApiResponseData = |
  ApiLoginResponse;

declare type ApiErrors = UserErrors;