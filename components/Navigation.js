import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import SearchInput from "./SearchInput";
import { logIn } from "next-auth/react";

const StyledNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  top: 5px;
  width: 100%;
  height: 50px;
  left: 8px;
  right: 5px;
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
      <SearchInput />

      <Link href=""></Link>
      <Link href="">About</Link>
      <Link href="/login">
        <StyledButton type="button" passHref legacyBehavior>
          Sign In
        </StyledButton>

        <StyledButton type="button" passHref legacyBehavior>
          Sign Out
        </StyledButton>
      </Link>
    </StyledNav>
  );
}
