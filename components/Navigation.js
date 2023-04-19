import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
  padding: 20;
  margin: 40;
  justify-content: space-around;
  align-items: center;
  background-color: #fff9de;
  position: relative;
`;

export default function Navigation() {
  return (
    <StyledNav>
      <Link href="">Filter</Link>
      <Link href="">About</Link>
      <Link href="">Log In</Link>
    </StyledNav>
  );
}
