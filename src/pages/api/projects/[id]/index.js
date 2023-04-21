import dbConnect from "../../../../../db/connect";
import Project from "../../../../../db/models/Project";

export default async function handler() {
  await dbConnect();
  const { id } = request.query;

  switch (request.method) {
    case "GET":
      const project = await Project.findById(id);
      response.status(200).json(project);
      break;
    case "PUT":
      const projectToUpdate = await Project.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response.status(200).json(projectToUpdate);
      break;
  }
}
