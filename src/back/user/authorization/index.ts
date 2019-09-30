import * as crypto from 'crypto';
import * as uuid from 'uuid';

const { createHmac, randomBytes } = crypto;
const getUUID = uuid.v1;

const SALT_SIZE = 50;

export class Authorization {
  private saltSize: number;
  private createAuthenticationCode: CreateHmac;
  private getRandomString: GetRandomString;
  constructor ({
    createAuthenticationCode = createHmac,
    getRandomString = getUUID,
    saltSize = SALT_SIZE,
  }: AuthorizationProps = {}) {
    this.saltSize = saltSize;
    this.createAuthenticationCode = createAuthenticationCode;
    this.getRandomString = getRandomString;
  }

  private getSalt (length = this.saltSize): string {
    return randomBytes(length).toString('hex').slice(0, length);
  }

  private sha512 (password: string, salt: string): string {
    return this.createAuthenticationCode('sha512', salt).update(password).digest('hex');
  }

  private encrypt (password: string, salt: string = this.getSalt()): AuthorizationHash {
    return {
      salt,
      hash: this.sha512(password, salt),
    };
  }

  private comparePasswords (storedHash: string, storedSalt: string, password: string): boolean {
    const { hash: calculatedHash } = this.encrypt(password, storedSalt);

    return storedHash === calculatedHash;
  }

  public encryptPassword (password: string): AuthorizationHash {
    return this.encrypt(password);
  }

  public verifyPassword (
    storedHash: string,
    storedSalt: string,
    password: string,
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
    const token = this.getRandomString();
    return { token, ...this.encrypt(token) };
  }
};

export const authorization = new Authorization();
