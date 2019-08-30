declare interface Api {
  request(url: ServerRoutes, props?: ApiRequestProps, requestInit?: ApiRequestInit): Promise<ApiResponse>;
}