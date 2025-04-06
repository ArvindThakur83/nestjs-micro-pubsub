import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  id: String,
  user: String,
  class: String,
  age: Number,
  email: String,
  inserted_at: Date,
  modified_at: Date
});
