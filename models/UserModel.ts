import mongoose, { Document, Schema, models } from "mongoose";
import { Model } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  profilePicture: string;
  resetToken: string;
  tokenExpiryDate: Date;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<IUser> = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email is invalid",
    ],
  },
  profilePicture: {
    type: String,
    default: "",  
  },
  resetToken: {
    type: String,
    default: "",
  },
  tokenExpiryDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  role: {
    type: String,
    enum: ["admin", "customer", "user"],
    default: "user",
    required: true,
  },
},
{
  timestamps: true,
});

export const User: Model<IUser> = models.User || mongoose.model<IUser>("User", userSchema);

export const getUsers = async () => {
  const users = await User.find();
  return users;
};

export const getUserByUsername = async (username: string) => {
  const user = await User.findOne({ username });
  return user;
}