import mongoose from "mongoose";

const { Schema } = mongoose;

const commentShema = new Schema({
  text: { type: String, reguired: true },
  image: { type: String, required: true },
});
const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentShema);
export default Comment;
