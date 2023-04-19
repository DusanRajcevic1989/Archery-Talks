import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  blueprints: { type: String, required: true },
  description: { type: String, required: true },
});
const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
