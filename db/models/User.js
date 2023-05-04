import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  image: { type: String, required: false },
  name: { type: String, required: true },
  email: { type: String, required: false },
  emailVerified: { type: String, required: false },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
