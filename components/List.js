import React from "react";
import Card from "./Card";
import useSWR from "swr";
import styled from "styled-components";
import Comments from "./Comments";

const Lists = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  margin-bottom: 75px;
  width: auto;
  height: auto;
  border-radius: 15px;
  background-color: #fff9de;
  gap: 10px;
`;

const ListItem = styled.li`
  padding: 8px;
  width: 60%;
`;
const StyledButton = styled.button`
  background-color: lightsalmon;
  padding: 0.4rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
  margin-top: 5px;
`;

export default function List({ onClick }) {
  const { data, isLoading } = useSWR("/api/projects");

  if (isLoading) {
    return <h2>Is loading...</h2>;
  }
  return (
    <>
      <Lists>
        {data.map((project) => {
          return (
            <ListItem key={project._id}>
              <Card
                title={project.title}
                image={project.image}
                description={project.description}
                blueprint={project.blueprint}
                id={project._id}
              />

              <Comments projectId={project._id} />
            </ListItem>
          );
        })}
      </Lists>
    </>
  );
}
