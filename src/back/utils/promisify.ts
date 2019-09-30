type CallbackProps = [Error, unknown];
type Callback = (args: CallbackProps) => void;

type MethodWithArgs = (args: unknown, cb: Callback) => void;
type MethodWithoutArgs = (cb: Callback) => void;
type Method = MethodWithArgs | MethodWithoutArgs;

type Logger = {
  error: (value: string) => void;
  info: (value: string) => void;
}

export const promisify = (
  (method: Method, logger?: Logger): (args: unknown) => Promise<unknown> => {
    return (args: unknown): Promise<unknown> => {
      return new Promise((resolve, reject): void => {
        const buildCallback = (): Callback => {
          return (args: CallbackProps): void => {
            const [ err, result ] = args;
            if (err) {
              logger && logger.error(`${ method.name } failed: ${ args }, ${ err }`);
              return reject(err);
            };
            logger && logger.info(`${ method.name } succeeded: ${ args }`);
            return resolve(result);
          };
        };

        if (args) {
          (method as MethodWithArgs)(args, buildCallback());
        } else {
          (method as MethodWithoutArgs)(buildCallback());
        }
      });
    };
  }
);
