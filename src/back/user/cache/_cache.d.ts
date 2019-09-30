declare const enum UserCaches {
  logins = 'cache_logins',
  allUsers = 'cache_all_users',
  activeUsers = 'cache_active_users',
}

declare interface GetUsersFromCache {
  activeUsers: string[];
  allUsers: string[];
}

declare type CacheProps = [import('../../databases/').Redis?, string?];
