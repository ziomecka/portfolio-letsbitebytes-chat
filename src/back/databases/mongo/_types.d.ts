declare type MongooseConnection = import('mongoose').Connection;
declare type MongooseModel<T> = import('mongoose').Model<T>;
declare type MongooseDocument = import('mongoose').Document;
declare type MongooseError = import('mongoose').Error;

declare const enum Collections {
  users = 'users',
}

declare interface ConversationDocument {
  login: string,
  conversation: Conversation,
}

declare interface UserDocument extends MongooseDocument {
  login: string;
  salt: string;
  hash: string;
  role: UserRole;
  conversations: ConversationDocument[];
}

declare type MongooseDocuments = |
  UserDocument;
