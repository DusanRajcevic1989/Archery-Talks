import Project from "../../../../db/models/Project";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  switch (request.method) {
    case "GET":
      console.log("get request good");
      const projects = await Project.find();
      response.status(200).json(projects);

      break;

    case "POST":
      try {
        const projectData = request.body;
        const project = new Project(projectData);
        await project.save();

        response.status(200).json({ status: "Project created." });
      } catch (error) {
        console.error(error);
        return response.status(400).json({ error: error.message });
      }
      break;
  }
}
