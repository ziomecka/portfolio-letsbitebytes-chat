declare type CreateUserActionProps = {
  login: string;
  password: string;
  confirmPassword: string;
};

declare interface CreateUserResponse {
  result: boolean;
  error: UserErrors;
}