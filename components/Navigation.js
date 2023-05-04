import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import SearchInput from "./SearchInput";
import { signIn } from "next-auth/react";

const StyledNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 12px;
  width: auto;
  height: 50px;
  margin-bottom: 8px;
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
      <Link href="/profilePage">My Profile</Link>
      <StyledButton onClick={() => signIn()}>Sign In</StyledButton>
    </StyledNav>
  );
}
