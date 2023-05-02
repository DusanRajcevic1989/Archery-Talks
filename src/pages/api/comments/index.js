import dbConnect from "../../../../db/connect";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();
  switch (request.method) {
    case "GET":
      console.log("get request good");
      const comments = await Comment.find();
      response.status(200).json(comments);

      break;
    case "POST":
      try {
        const commentData = request.body;
        const comment = new Comment(commentData);
        await comment.save();

        response.status(200).json({ status: "Comment created." });
      } catch (error) {
        console.error(error);
        return response.status(400).json({ error: error.message });
      }
      break;
  }
}
