import styled from "styled-components";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import ProjComments from "./ProjComments";

const CommentForm = styled.form`
  margin-top: 5px;
`;

export default function Comments({ projectId }) {
  const comments = useSWR("/api/comments");
  const { data, isLoading } = comments;

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
      comments.mutate();
      event.target.reset();
      console.log("We got HERE!!!", response);
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  if (isLoading) {
    return <h2>Is loading...</h2>;
  }

  return (
    <>
      <ProjComments projectId={projectId} comments={data} />
      <CommentForm onSubmit={addComment}>
        {/* <Image
          src={profile.image}
          alt=""
          width={20}
          height={20}
          style={{ borderRadius: "50px" }}
        /> */}

        <label htmlFor="text" placeholder="comment"></label>
        <input name="text" id="text" type="text" placeholder="Comment here" />
        <button type="submit">Post</button>
      </CommentForm>
    </>
  );
}
