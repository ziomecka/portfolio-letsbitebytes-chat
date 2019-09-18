import * as mongoose from 'mongoose';
import {
  MAX_LOGIN_LENGTH,
  MIN_LOGIN_LENGTH,
} from '../../../constants';
import { conversationSchema } from './conversation';

const Schema = mongoose.Schema;

const trainee = UserRole.trainee;
const trainer = UserRole.trainer;
const unknown = UserRole.unknown;

export const userSchema = new Schema(
  {
    login: {
      type: String,
      min: MIN_LOGIN_LENGTH,
      max: MAX_LOGIN_LENGTH,
      required: [ true, 'Id has to be a string' ],
      unique: true,
    },
    salt: {
      type: String,
      required: [ true, 'Salt has to be a string' ],
    },
    hash: {
      type: String,
      required: [ true, 'Hash has to be a string' ],
    },
    role: {
      type: String,
      // accept only UserRole or set unknown UserRole
      set: (value: string): string => (
        ([ trainee, trainer, unknown ].includes(value as UserRole) && value) ||
        unknown
      ),
      required: [ true, 'Role has to be valid UserRole' ],
      default: unknown,
    },
    conversations: {
      type: [conversationSchema],
      required: [ true, 'Conversations have to be an array' ],
      default: [],
    },
  }, {
    collection: Collections.users,
  },
);
