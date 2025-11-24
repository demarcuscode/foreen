import Link from "next/link";
import React from "react";
import { SheetBtn } from "../customs/sheetbtn";

export default function NavList() {
  return (
    <div className="text-black">
      <SheetBtn />
      <div className="md:flex items-center gap-4 hidden ">
        <Link href="\dashboard">marcuoware@gmail.com</Link>
        <Link href="\library">my library</Link>
        <Link href="\profile">profile</Link>
        <Link href="\signout">log out</Link>
      </div>
    </div>
  );
}
