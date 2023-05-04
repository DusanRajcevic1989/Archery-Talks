import Project from "../../../../db/models/Project";
import dbConnect from "../../../../db/connect";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  console.log("session", session);

  await dbConnect();
  switch (request.method) {
    case "GET":
      const projects = await Project.find({ createdBy: session.user.email });
      console.log("get request good", projects);
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
