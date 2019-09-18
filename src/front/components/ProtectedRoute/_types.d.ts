declare interface ProtectedRouteProps extends ProtectedRouteState {
  path: string;
}

declare interface ProtectedRouteState {
  activeConversation: string;
  isAuthenticated: boolean;
  login: string;
  role: UserRole;
}

declare const enum UserRole {
  trainer = 'trainer',
  trainee = 'trainee',
  unknown = 'unknown',
}