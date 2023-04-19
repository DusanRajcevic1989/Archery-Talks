import React from "react";
import Card from "./Card";
import useSWR from "swr";
import styled from "styled-components";

const Lists = styled.ul`
  display: grid;
  width: 100px;
  height: auto;
  border-radius: 15px;
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
            <li key={project._id}>
              <Card
                title={project.title}
                image={project.image}
                description={project.descrion}
                blueprint={project.blueprint}
                id={project._id}
              />
            </li>
          );
        })}
      </Lists>
    </>
  );
}
