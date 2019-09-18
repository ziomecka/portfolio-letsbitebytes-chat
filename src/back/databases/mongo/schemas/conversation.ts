import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const conversationSchema = new Schema(
  {
    login: {
      type: String,
      required: [ true, 'Login is required' ],
    },
    conversation: {
      type: [[ String, String, Boolean ]],
    },
  }
);
