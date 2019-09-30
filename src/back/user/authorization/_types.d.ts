declare type CreateHmac = (algorithm: string, key: import('crypto').BinaryLike) => (
  import('crypto').Hmac
);

declare type GetRandomString = () => string;

declare interface AuthorizationProps {
  saltSize?: number;
  createAuthenticationCode?: CreateHmac;
  getRandomString?: GetRandomString;
}

declare interface AuthorizationHash {
  hash: string;
  salt: string;
}

declare interface TokenHash extends AuthorizationHash {
  token: string;
}

declare interface VerifyPasswordResponse extends Partial<TokenHash> {
  isValid: boolean;
}
