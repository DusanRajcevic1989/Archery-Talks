import mongoose from "mongoose";
import Comment from "./Comment";
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  blueprints: { type: String, required: true },
  description: { type: String, required: true },
  // comments: [{ type: Schema.Types.ObjectId, ref: Comment }],
});
const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
