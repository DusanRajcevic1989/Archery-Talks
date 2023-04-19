import React from "react";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default function ProjectForm({ onSubmit }) {
  //   const router = useRouter();
  function handleSubmit(event) {
    onSubmit(event);
  }
  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={defaultData?.title}
      />
      <Label htmlFor="image-url">Image Url</Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
      />
      <Label htmlFor="description">Description</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        defaultValue={defaultData?.description}
      ></Textarea>
      <Label htmlFor="blueprints">Blueprints</Label>
      <Input
        id="blueprints"
        name="blueprints"
        type="text"
        defaultValue={defaultData?.blueprints}
      />
      <StyledButton type="submit">
        {defaultData ? "Update place" : "Add place"}
      </StyledButton>
    </FormContainer>
  );
}
