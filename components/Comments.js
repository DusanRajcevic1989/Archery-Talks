import styled from "styled-components";
import { useState } from "react";
import dbConnect from "../db/connect";

const Comments = styled.div``;

export default async function Commnets() {
  await dbConnect();
  const [comment, setComment] = useState([]);
  const [text, setText] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const comments = db.collection("comments");
      await comments.insertOne({ text });
      setText("");
      setComment([...comment, { text }]);
    } catch (error) {}
  }

  return (
    <Comments onSubmit={handleSubmit}>
      <label htmlFor="comment" placeholder="comment"></label>
      <input
        name="comment"
        id="comment"
        type="text"
        value={text}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Search here"
      />
      <button type="submit">Post</button>
    </Comments>
  );
}
