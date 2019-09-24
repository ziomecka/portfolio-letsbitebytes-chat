declare interface ApiRequestProps {
  queryParams?: LoginActionProps;
  body?: Record<string, unknown>;
}

declare type ApiMethods = 'get' | 'post';

// TODO make a Partial
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