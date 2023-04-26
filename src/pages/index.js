import styled from "styled-components";
import useSWR from "swr";
import List from "../../components/List";
import Link from "next/link";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  position: fixed;
  bottom: 50px;
  left: 50px;
  background-color: lightsalmon;
  padding: 0.8rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
`;
const StyledChat = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: lightsalmon;
  padding: 0.8rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
`;

export default function Home() {
  const { data } = useSWR("/api/projects");
  console.log("give me something", data);
  return (
    <HomeStyle>
      <List />
      <Link href="/create">
        <StyledButton>Add Your Project</StyledButton>
      </Link>
      <StyledChat>Chat</StyledChat>
    </HomeStyle>
  );
}
