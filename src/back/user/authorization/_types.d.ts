declare interface AuthorizationProps {
  saltSize?: number;
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
