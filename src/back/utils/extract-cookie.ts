import { SESSION_COOKIE_NAME } from '../constants';

export const extractCookie = (str: string, name: string = SESSION_COOKIE_NAME): string => {
  const regexp = new RegExp(`${ name }=([\\w-]+)`, 'i');
  return (str.match(regexp) || [''])[ 1 ];
};
