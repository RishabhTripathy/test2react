import React, { useEffect, useState } from "react";
import logo from "../assets/favicon.png";
import { MdFiberManualRecord, MdMenu } from "react-icons/md";

export default function Nav() {
  const [activeNavItem, setActiveNavItem] = useState("Work");

  const navItems = [
    {
      id: 1,
      name: "Work",
      link: "/"
    },
    {
      id: 2,
      name: "Brands",
      link: "/brands"
    },
    {
      id: 3,
      name: "Connect",
      link: "/connect"
    }
  ];

  // useEffect(() => {
  //   // Extract the pathname from the router object
  //   const currentPath = router.pathname;

  //   // Find the corresponding item in navItems
  //   const activeItem = navItems.find((item) => item.link === currentPath);

  //   // Update activeNavItem based on the activeItem found
  //   if (activeItem) {
  //     setActiveNavItem(activeItem.name);
  //   }
  // }, [router.pathname]);

  const handleNavItemClick = (name) => {
    setActiveNavItem(name);
  };
  return (
    <div className="navbar fixed z-50 lg:px-8 text-white top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="text-3xl  lg:hidden">
          <MdMenu />

          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={activeNavItem === item.name ? "active" : ""}
                  href={item.link}
                  onClick={() => handleNavItemClick(item.name)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="/" className="">
          <img
            src={logo}
            priority
            alt=""
            width={300}
            height={300}
            className="w-[12rem]"
          />
        </a>
      </div>
      <div className="navbar-end hidden justify-around lg:flex">
        <ul className="menu uppercase font-extralight tracking-widest menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.id} className="py-0">
              <a
                className={
                `rounded-full hover:bg-transparent py-1 px-3  group  ${activeNavItem === item.name
                ? "bg-transparent outline-white outline-1 outline"
                : ""}`
                } 
                href={item.link}
                onClick={() => handleNavItemClick(item.name)}
              >
                <MdFiberManualRecord
                  className={
                    activeNavItem === item.name
                      ? "text-red-500 group-hover:text-white text-xl"
                      : " text-transparent"
                  }
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    
  );
}
