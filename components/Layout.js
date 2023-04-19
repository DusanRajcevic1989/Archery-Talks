import Head from "next/head";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
  position: relative;
  width: 100%;
  background-color: aliceblue;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Archery Talks</title>
      </Head>
      <Main>{children}</Main>
    </>
  );
}
