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
  }
}
