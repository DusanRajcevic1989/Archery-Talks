import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import useSWR from "swr";
import List from "../../components/List";
import { StyledButton } from "../../components/StyledButton";
import styled from "styled-components";
import UserList from "../../components/UserList";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const SignOut = styled.button`
  background-color: lightsalmon;
  padding: 0.4rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
`;

const Info = styled.div`
  background-color: bisque;
`;

export default function ProfilePage() {
  const userProjects = useSWR("/api/projects/user-projects");

  const { data: session } = useSession();
  if (session) {
    var name = session.user.name;
    var image = session.user.image;
  }

  async function deleteProject(id) {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    userProjects.mutate();
  }
  return (
    <HomeStyle>
      <Info>
        <Link href="/">
          <StyledButton>Home</StyledButton>
        </Link>
        <SignOut onClick={() => signOut()}>Sign Out</SignOut>
        <h1>Welcome {name} </h1>
        <AvatarImage src={image} alt="" />
        <Link href="/create">
          <StyledButton>Add Your Project</StyledButton>
        </Link>
      </Info>

      <UserList onHandleDeleteProject={deleteProject} />
    </HomeStyle>
  );
}
