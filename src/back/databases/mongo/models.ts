import * as mongoose from 'mongoose';
import { userSchema } from './schemas/user';

export const models = new Map([
  [ Collections.users, mongoose.model(Collections.users, userSchema) ],
]);
