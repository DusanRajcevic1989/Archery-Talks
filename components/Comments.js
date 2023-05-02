import styled from "styled-components";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import ProjComments from "./ProjComments";

export default function Comments({ projectId }) {
  const { data, isLoading } = useSWR("/api/comments");
  console.log("prvo ovo", data);

  async function addComment(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const commentData = Object.fromEntries(formData);
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ ...commentData, projectId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      event.target.reset();
      console.log("We got HERE!!!", response);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  if (isLoading) {
    return <h2>Is loading...</h2>;
  }

  // await dbConnect();
  // const [comment, setComment] = useState([]);
  // const [text, setText] = useState("");

  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   try {
  //     const comments = db.collection("comments");
  //     await comments.insertOne({ text });
  //     setText("");
  //     setComment([...comment, { text }]);
  //   } catch (error) {}

  return (
    <>
      <ProjComments projectId={projectId} comments={data} />
      <form onSubmit={addComment}>
        {/* <Image
          src={profile.image}
          alt=""
          width={20}
          height={20}
          style={{ borderRadius: "50px" }}
        /> */}

        <label htmlFor="text" placeholder="comment"></label>
        <input
          name="text"
          id="text"
          type="text"
          // value={text}
          // onChange={(event) => setComment(event.target.value)}
          placeholder="Comment here"
        />
        <button type="submit">Post</button>
      </form>
    </>
  );
}
