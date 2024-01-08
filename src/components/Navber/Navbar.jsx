import Container from "@/ui/Container";
import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const navData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className=" border-b ">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div>
            <h2 className="text-[20px] font-bold">Logo</h2>
          </div>
          <div className=" flex items-center gap-7">
            {navData.map((item, index) => (
              <NavItem item={item} key={index} />
            ))}
            {session ? (
              <>
                {isAdmin && (
                  <NavItem item={{ title: "Admin", path: "/admin" }} />
                )}
                <button className="px-4 py-2 bg-green-500 text-white rounded-full">Logout</button>
              </>
            ) : (
              <>
                <NavItem item={{ title: "Login", path: "/login" }} />
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
