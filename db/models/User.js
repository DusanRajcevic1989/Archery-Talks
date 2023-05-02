import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  profileImage: { type: String, required: false },
  userName: { type: String, required: true },
  about: { type: String, required: false },
});

const User = mongoose.models.User || mongoose.moled("User", userSchema);

export default User;
