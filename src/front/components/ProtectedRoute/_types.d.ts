declare interface ProtectedRouteProps extends ProtectedRouteState {
  path: string;
}

declare interface ProtectedRouteState {
  isAuthenticated: boolean;
  role: UserRole;
}

declare const enum UserRole {
  trainer = 'trainer',
  trainee = 'trainee',
}