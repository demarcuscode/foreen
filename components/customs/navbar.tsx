"use client";
import { useEffect, useState } from "react";
import NavList from "@/components/customs/navlist";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const [path, setPath] = useState<string>("");

  useEffect(() => {
    if (pathname) {
      pathname === "/" ? setPath("foreen4") : setPath(pathname);
    }
  }, [pathname]);

  return (
    <div className="flex items-center justify-between p-4 md:p-6 ">
      <div className="text-lg text-black">{path}</div>
      <NavList />
    </div>
  );
};

export default NavBar;
