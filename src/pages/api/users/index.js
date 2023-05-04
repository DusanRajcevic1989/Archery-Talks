import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  switch (request.method) {
    case "GET":
      console.log("get request good");
      const users = await User.find();
      response.status(200).json(users);

      break;
    case "POST":
      try {
        const userData = request.body;
        const user = new user(userData);
        await user.save();

        response.status(200).json({ status: "User created." });
      } catch (error) {
        console.error(error);
        return response.status(400).json({ error: error.message });
      }
      break;
  }
}
