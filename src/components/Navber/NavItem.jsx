"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={` py-2 px-4 text-[16px] rounded-full font-medium ${
        pathName === item.path ? " bg-green-500 text-white" : ""
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavItem;
