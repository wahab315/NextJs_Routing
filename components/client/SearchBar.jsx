"use client";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  //   console.log(`Search Input is ${searchInput}`);
  return (
    <>
      <input
        type="text"
        placeholder="Search ......."
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </>
  );
};

export default SearchBar;
