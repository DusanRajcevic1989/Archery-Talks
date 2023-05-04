import dbConnect from "../../../../../db/connect";
import Comment from "../../../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  switch (request.method) {
    case "GET":
      const comment = await Comment.findById(id);
      response.status(200).json(comment);
      break;
  }
}
