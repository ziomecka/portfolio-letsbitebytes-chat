import { Request, Response } from 'express';
import {
  TRAINEE_LOGIN,
  TRAINEE_PASSWORD,
  TRAINER_LOGIN,
  TRAINER_PASSWORD,
} from '../constants';

const successTrainer = { result: true, data: { role: 'trainer' } };
const successTrainee = { result: true, data: { role: 'trainee' } };

export const login = ( { query }: Request, res: Response ): void => {
  const queries = Object.entries(query as Record<string, string>);

  const findQuery = (searched: string): [string, string] => queries.find(([key]) => key === searched ) || [ '', '' ];

  const getAuths = (): {login: string, password: string} => ({
    login: findQuery('login')[ 1 ],
    password: findQuery('password')[ 1 ],
  });

  const { login, password } = getAuths();

  const isTrainer = (
    login === TRAINER_LOGIN &&
    password === TRAINER_PASSWORD
  );

  const isTrainee = (
    login === TRAINEE_LOGIN &&
    password === TRAINEE_PASSWORD
  );

  const response = isTrainer && successTrainer || isTrainee && successTrainee;

  response && res.send(response);
};