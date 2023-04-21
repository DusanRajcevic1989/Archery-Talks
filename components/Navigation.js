import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";

const StyledNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
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
      <Link href="">
        <StyledButton type="dropbutton">Filter</StyledButton>
      </Link>
      <Link href="">About</Link>
      <Link href="">
        <StyledButton type="button">Log In</StyledButton>
      </Link>
    </StyledNav>
  );
}
