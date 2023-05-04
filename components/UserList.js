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

const List = styled.ul`
  list-style-type: none;
`;

export default function UserList({ onHandleDeleteProject, image }) {
  const { data, isLoading } = useSWR("/api/projects/user-projects");

  if (isLoading) {
    return <h2>Is Loading..</h2>;
  }

  return (
    <>
      <List>
        {data.map((project) => {
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
      </List>
    </>
  );
}
