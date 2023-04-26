import Project from "../../../db/models/Project";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      // const { q } = req.query;

      const projects = Project.findMeny(
        body: JSON.stringify(projects),
      headers: {
        "Content-Type": "application/json",
    });
      res.status(200).json({ message: "Hey dude!" });
    } catch (error) {}
  }
}
