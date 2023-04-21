import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { useRouter } from "next/router";
import Link from "next/link";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff9de;
  gap: 1rem;
  margin: 5px;
  padding: 10px;
  border-radius: 12px;
`;
const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;

  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;

  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

export default function ProjectForm({ onSubmit, formName }) {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(event);
  }
  return (
    <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" />
      <Label htmlFor="image-url">Image Url</Label>
      <Input id="image-url" name="image" type="text" />
      <Label htmlFor="description">Description</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></Textarea>
      <Label htmlFor="blueprints">Blueprints</Label>
      <Input id="blueprints" name="blueprints" type="text" />
      <StyledButton type="submit">Create Project</StyledButton>
    </FormContainer>
  );
}
