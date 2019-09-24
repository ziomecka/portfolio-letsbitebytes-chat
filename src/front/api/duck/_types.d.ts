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
  headers?: Headers;
};

declare type ApiRequest = [ ServerRoutes, ApiRequestProps, ApiRequestInit? ];

declare interface ApiResponse {
  result: boolean;
  data?: ApiResponseData;
  error?: ApiErrors;
}

declare interface ApiLoginData {
  role?: UserRole;
  users?: string[];
  conversations?: Conversations;
}

type ApiResponseData = |
  ApiLoginData;

declare type ApiErrors = UserErrors;