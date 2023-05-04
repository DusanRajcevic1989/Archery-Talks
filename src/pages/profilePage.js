import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import List from "../../components/List";
import { StyledButton } from "../../components/StyledButton";
import styled from "styled-components";
import UserList from "../../components/UserList";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
`;

const Info = styled.div`
  background-color: bisque;
`;

export default function ProfilePage() {
  const { data: session } = useSession();
  if (session) {
    var name = session.user.name;
    var image = session.user.image;
    console.log(session);
  }

  async function deleteProject(id) {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });
  }
  return (
    <HomeStyle>
      <Info>
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
