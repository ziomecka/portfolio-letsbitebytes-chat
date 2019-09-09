const success = { result: true };

export const logout = ( { query }: ExpressRequest, res: ExpressResponse ): void => {
  // const queries = Object.entries(query as Record<string, string>);

  res.send(success);
};