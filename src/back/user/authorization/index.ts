import * as crypto from 'crypto';
import * as uuid from 'uuid';

const SALT_SIZE = 50;

export class Authorization {
  private saltSize: number;
  // @ts-ignore
  private randomBytes(number: number): Buffer;
  // @ts-ignore
  private createHmac;
  // @ts-ignore
  private getUUID(): string;
  constructor ({ saltSize }: AuthorizationProps = {}) {
    this.saltSize = saltSize || SALT_SIZE;
    this.init();
  }

  private init (): void {
    Object.assign(Object.getPrototypeOf(this), {
      randomBytes: crypto.randomBytes,
      createHmac: crypto.createHmac,
      getUUID: uuid.v1,
    });
  }

  private getSalt (length = this.saltSize): string {
    return this.randomBytes(length).toString('hex').slice(0, length);
  }

  private sha512 (password: string, salt: string): AuthorizationHash {
    const someHash = this.createHmac('sha512', salt);
    const hash = someHash.update(password).digest('hex');

    return { salt, hash };
  }

  private encrypt (password: string, salt: string = this.getSalt()): AuthorizationHash {
    return { ...this.sha512(password, salt) };
  }

  private get token (): string {
    return this.getUUID();
  }

  private comparePasswords (storedHash: string, storedSalt: string, password: string): boolean {
    const { hash: calculatedHash } = this.encrypt(password, storedSalt);

    return storedHash === calculatedHash;
  }

  public encryptPassword (password: string): AuthorizationHash {
    return this.encrypt(password);
  }

  public verifyPassword (
    storedHash: string, storedSalt: string, password: string
  ): VerifyPasswordResponse {
    const isValid = this.comparePasswords(storedHash, storedSalt, password);

    if (isValid) {
      return {
        isValid,
        ...this.getToken(),
      };
    }

    return { isValid };
  }

  private getToken (): TokenHash {
    const { token } = this;
    const { salt, hash } = this.encrypt(token);

    return {
      hash,
      salt,
      token,
    };
  }
};

export const authorization = new Authorization();
