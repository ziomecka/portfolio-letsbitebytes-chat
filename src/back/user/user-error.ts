type ErrorProps = [ UserErrors ] & string [];

export class UserError extends Error {
  public code: UserErrors;
  public name: string;
  constructor (...args: ErrorProps) {
    const [ userError, ...other ] = args;
    super(...other);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UserError);
    }

    this.code = userError;
    this.name = 'UserError';
  }
}
