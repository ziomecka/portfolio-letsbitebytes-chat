declare interface LoginInitialData extends Partial<VerifyPasswordResponse> {
  role?: UserRole;
  conversations?: Conversations;
}
