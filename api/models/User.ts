import { Schema, model } from "mongoose";

interface DocumentResult<T> {
  _doc: T;
}

interface IUser extends DocumentResult<IUser> {
  username: string;
  email: string;
  country: string;
  img: string;
  city: string;
  phone: string;
  password: string;
  isAdmin: boolean;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    img: { type: String },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
