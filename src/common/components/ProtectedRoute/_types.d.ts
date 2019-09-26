declare interface ProtectedRouteProps extends ProtectedRouteState, WithStyles, WithAppSize {
  path: string;
  elevation?: PaperElevation;
}

declare interface ProtectedRouteState {
  isAuthenticated: boolean;
}

declare const enum UserRole {
  trainer = 'trainer',
  trainee = 'trainee',
  unknown = 'unknown',
}