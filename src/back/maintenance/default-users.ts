require('dotenv').config();

export const defaultUsers = [
  {
    login: 'trainee',
    role: 'trainee',
    password: process.env.TRAINEE_PASSWORD,
  },
  {
    login: 'trainer',
    role: 'trainer',
    password: process.env.TRAINER_PASSWORD,
  },
  {
    login: 'ziomecka',
    role: 'unknown',
    password: process.env.ZIOMECKA_PASSWORD,
  },
];
