export const onlyIfQuery = (middleware: Middleware) => {
  return ( req: ExpressRequest, res: ExpressResponse, next: NextFunction ): void => {
    if (Object.entries(req.query).length) {
      return middleware(req, res, next);
    }
    next();
  };
};