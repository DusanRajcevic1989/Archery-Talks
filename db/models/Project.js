import mongoose from "mongoose";

import User from "./User";
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  blueprints: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: { type: {}, required: true, ref: User },
});
const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
