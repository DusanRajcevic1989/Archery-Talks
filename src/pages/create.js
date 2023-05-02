import Link from "next/link";
import ProjectForm from "../../components/ProjectForm";
import useSWR from "swr";
import styled from "styled-components";

const Create = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Headline = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 5px;

  border-radius: 12px;
  background-color: #fff9de;
`;
const BackButton = styled.button`
  background-color: lightsalmon;
  padding: 0.8rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
`;

export default function CreateProjectPage() {
  const projects = useSWR("/api/projects");

  async function addProject(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const projectData = Object.fromEntries(formData);
    const response = await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      projects.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <Create>
      <Headline id="add-project">Add Project</Headline>

      <ProjectForm onSubmit={addProject} formName={"add-project"} />
      <Link href="/" passHref legacyBehavior>
        <BackButton>Go Back</BackButton>
      </Link>
    </Create>
  );
}
