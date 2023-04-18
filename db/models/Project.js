import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },

  image: { type: String, required: false },
  blueprints: { type: String, required: false },
  description: { type: String, required: false },
});
const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
