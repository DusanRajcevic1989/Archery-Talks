import React from "react";
import Card from "./Card";
import useSWR from "swr";
import styled from "styled-components";

const Lists = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  border-radius: 15px;
  background-color: #fff9de;
  gap: 10px;
`;

const ListItem = styled.li`
  padding: 8px;
`;

export default function List() {
  const { data, isLoading } = useSWR("/api/projects");
  console.log("give me something", data);
  if (isLoading) {
    return <h2>Is loading...</h2>;
  }
  return (
    <>
      <Lists>
        {data?.map((project) => {
          return (
            <ListItem key={project._id}>
              <Card
                title={project.title}
                image={project.image}
                description={project.description}
                blueprint={project.blueprint}
                id={project._id}
              />
            </ListItem>
          );
        })}
      </Lists>
    </>
  );
}
