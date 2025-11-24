"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function SheetBtn() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu size={40} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="text-2xl  p-8 pt-10">
            Welcome to{" "}
            <span className="text-purple-500 text-clip font-bold">
              Foreen4-one
            </span>
          </SheetTitle>
          <div className="flex flex-col  text-black items-center gap-8 text-lg text-black ">
            <Link href="\dashboard">marcuoware@gmail.com</Link>
            <Link href="\library">my library</Link>
            <Link href="\profile">profile</Link>
            <Link href="\signout">log out</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
