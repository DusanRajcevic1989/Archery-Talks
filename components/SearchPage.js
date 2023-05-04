"use client";

import React from "react";
import { useSearchParams } from "next.react";
import useSWR from "swr";

const fetchProjects = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export default function SearchPage() {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const encodedSearch = encodeURI(searchQuery);
  const { data, isLoading } = useSWR(`index?q=${encodedSearch}`, fetchProjects);
  console.log("search params", encodedSearch);

  return <div>SearchPage</div>;
}
