/* eslint-disable no-console */
import {
  User,
  UserCache,
  UserDatabase,
  createUserManager,
} from '../user/';

let userManager: User;
let userCache: UserCache;
let userDatabase: UserDatabase;

function buildUserManager (): (() => Promise<boolean[]>) {
  userManager = createUserManager(process.env.MONGO_URI, process.env.REDIS_URL);
  ({ userCache, userDatabase } = userManager);

  return async (): Promise<boolean[]> => {
    userCache = userDatabase = null;
    return await userManager.destroy();
  };
};

async function syncUsersCache (): Promise<boolean[]> {
  try {
    const destroy = buildUserManager();

    const logins = await userDatabase.getUsersLogins();
    console.log('Users logins received from database', logins);

    await userCache.deleteUsers();
    console.log('Users deleted from cache');

    await userCache.cacheUser(logins);
    console.log('Users added to cache');

    return await destroy();
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

async function deleteUsers (): Promise<boolean[]> {
  try {
    const destroy = buildUserManager();

    await userCache.deleteUsers();
    await userDatabase.deleteUsers();
    console.log('Users deleted from database and cache');

    return await destroy();
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

async function createDefaultUsers (): Promise<boolean[]> {
  const destroy = buildUserManager();
  const users = require('./default-users').defaultUsers;

  for (const user of users) {
    try {
      await userManager.createUser(user.login, user.password, user.password);
    } catch (err) {
      await destroy();
      return Promise.reject(err);
    }
  }
  return await destroy();
};

async function updateDefaultUsers (): Promise<boolean[]> {
  const destroy = buildUserManager();
  const users = require('./default-users').defaultUsers;

  for (const { login, password } of users) {
    try {
      await userManager.update(login, { password });
    } catch (err) {
      await destroy();
      return Promise.reject(err);
    }
  }

  return await userManager.destroy();
};

export {
  syncUsersCache,
  deleteUsers,
  createDefaultUsers,
  updateDefaultUsers,
};

require('make-runnable/custom')({
  printOutputFrame: false,
});
