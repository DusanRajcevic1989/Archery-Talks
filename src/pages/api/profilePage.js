import dbConnect from "../../../db/connect";
import User from "../../../db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  switch (request.method) {
    case "GET":
      console.log("get request good");
      const users = await User.findById(id);
      response.status(200).json(users);
      break;
  }
}
