import Project from "../../../db/models/Project";
import dbConnect from "../../../db/connect";
import { request } from "express";

export default async function handler(req, res) {
  await dbConnect();
  switch (request.method) {
    case "GET":
      const projects = await Project.find();
      res.status(200).json(projects);

      break;
  }
}
