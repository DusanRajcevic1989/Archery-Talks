import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import SearchInput from "./SearchInput";

const StyledNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;

  width: auto;
  height: 50px;
  margin: 8px;
  justify-content: space-around;
  align-items: center;
  background-color: #fff9de;
  position: relative;
`;

export default function Navigation() {
  return (
    <StyledNav>
      <SearchInput />
      <Link href=""></Link>
      <Link href="/about">About</Link>
      <Link href="/login">
        <StyledButton type="button" passHref legacyBehavior>
          Log In
        </StyledButton>
      </Link>
    </StyledNav>
  );
}
