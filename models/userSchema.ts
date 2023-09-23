import mongoose from "mongoose";

interface IUser {
  username:string,
  password:string | undefined,
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", UserSchema);
export {User};
