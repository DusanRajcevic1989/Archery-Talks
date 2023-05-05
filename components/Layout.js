import Head from "next/head";
import styled from "styled-components";
import Navigation from "./Navigation";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(247, 225, 174);
  width: 100%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Main = styled.main`
  gap: 0.5rem;
  padding: 0.5rem;
  /* position: relative; */
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Head>
        <title>Archery Talks</title>
      </Head>

      <Main>{children}</Main>
    </StyledLayout>
  );
}
