import Head from "next/head";
import styled from "styled-components";
import Navigation from "./Navigation";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: brown;
`;

const Main = styled.main`
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
  position: relative;
  width: 100%;
`;

export default function Layout({ children, search, setSearch }) {
  return (
    <StyledLayout>
      <Head>
        <title>Archery Talks</title>
      </Head>
      <Navigation />
      <Main>{children}</Main>
    </StyledLayout>
  );
}
