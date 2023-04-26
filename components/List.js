import React from "react";
import Card from "./Card";
import useSWR from "swr";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from "next/dist/shared/lib/constants";

const Lists = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid: wrap;
  justify-items: center;
  align-items: center;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
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

export default function List({ search }) {
  const { data, isLoading } = useSWR("/api/projects");
  // console.log("give me something", data);
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
              <StyledButton onClick={() => onToggleFavorite(isFavorite)}>
                Favorite
              </StyledButton>
            </ListItem>
          );
        })}
      </Lists>
    </>
  );
}
