import styled from "styled-components";
import useSWR from "swr";
import List from "../../components/List";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Image from "next/image";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  position: relative;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 15px;
  left: 25px;
  background-color: lightsalmon;
  padding: 0.4rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
`;
const StyledChat = styled.button`
  bottom: 15px;
  right: 25px;
  position: absolute;
  background-color: lightsalmon;
  padding: 0.4rem;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  font-size: inherit;
`;

export default function Home() {
  return (
    <>
      <HomeStyle>
        <Navigation />

        <List />
        {/* <Buttons>
          <Link href="/create">
            <StyledButton>Add Your Project</StyledButton>
          </Link>
          <StyledChat>Chat</StyledChat>
        </Buttons> */}
      </HomeStyle>
    </>
  );
}
