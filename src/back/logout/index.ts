import { Request, Response } from 'express';

const success = { result: true };

export const logout = ( { query }: Request, res: Response ): void => {
  // const queries = Object.entries(query as Record<string, string>);

  res.send(success);
};