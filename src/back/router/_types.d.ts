declare type NextFunction = import('express').NextFunction;

declare type ExpressRequest = import('express').Request;

declare type ExpressResponse = import('express').Response;

declare type ExpressNext = import('express').NextFunction;

declare type Middleware = (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => void;