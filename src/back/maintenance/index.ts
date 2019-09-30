/* eslint-disable no-console */
import {
  UsersCache,
  UsersDatabase,
  UsersManager,
} from '../user/';

let userManager: UsersManager;
let usersCache: UsersCache;
let usersDatabase: UsersDatabase;

function buildUsersManager (): (() => Promise<boolean[]>) {
  userManager = new UsersManager(process.env.MONGO_URI, process.env.REDIS_URL);
  ({ usersCache, usersDatabase } = userManager);

  return async (): Promise<boolean[]> => {
    usersCache = usersDatabase = null;
    return await userManager.destroy();
  };
};

async function syncUsersCache (): Promise<boolean[]> {
  try {
    const destroy = buildUsersManager();

    const logins = await usersDatabase.getUsersLogins();
    console.log('Users logins received from database', logins);

    await usersCache.deleteCaches();
    console.log('Users deleted from cache');

    await usersCache.createUser(logins);
    console.log('Users added to cache');

    return await destroy();
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

async function deleteUsers (): Promise<boolean[]> {
  try {
    const destroy = buildUsersManager();

    await usersCache.deleteCaches();
    await usersDatabase.deleteUsers();
    console.log('Users deleted from database and cache');

    return await destroy();
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

async function createDefaultUsers (): Promise<boolean[]> {
  const destroy = buildUsersManager();
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
  const destroy = buildUsersManager();
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
