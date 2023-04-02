"use client";

import Link from "next/link";
import SearchBar from "../components/client/SearchBar";
const Header = () => {
  return (
    <nav>
      <Link href="/">Home Page</Link>
      <Link href="/about">About </Link>
      <Link href="/contact">Contact Us</Link>
      <SearchBar />
    </nav>
  );
};

export default Header;
