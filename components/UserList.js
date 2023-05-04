import React from "react";
import useSWR from "swr";
import Card from "./Card";
import styled from "styled-components";
import Comments from "./Comments";
import Link from "next/link";

const StyledButton = styled.button`
  background-color: lightsalmon;
  padding: 0.4rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
  margin-top: 5px;
`;

export default function UserList({ onHandleDeleteProject }) {
  const { data, isLoading } = useSWR("/api/projects");
  console.log("is there anything", data);

  if (isLoading) {
    return <h2>Is Loading..</h2>;
  }
  const list = data.filter(
    (project) => project.createdBy === "dule.rajca@gmail.com"
  );
  return (
    <>
      <ul>
        {list.map((project) => {
          return (
            <li key={project._id}>
              <Card
                title={project.title}
                image={project.image}
                description={project.description}
                blueprint={project.blueprint}
                id={project._id}
              />
              <StyledButton
                onClick={() => {
                  onHandleDeleteProject(project._id);
                }}
                type="button"
                variant="delete"
              >
                Delete
              </StyledButton>

              <Comments projectId={project._id} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
