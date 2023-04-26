"use client";

import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function onSearch(event) {
    event.preventDefault;

    const encodedSearch = encodedURI(search);
    router.push(`/api/detiledPage?q=${encodedSearch}`);
  }
  return (
    <form onSubmit={onSearch}>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search here"
      />
    </form>
  );
}
