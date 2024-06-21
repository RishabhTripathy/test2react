import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/favicon.png";
import { MdFiberManualRecord, MdMenu } from "react-icons/md";
import Drawer from "./drawer";

export default function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // Get the current location

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
      link: "#"
    }
  ];

  // Determine the active nav item based on the current path
  const activeNavItem = navItems.find(item => item.link === location.pathname)?.name;

  const handleNavItemClick = (name) => {
    if (name === "Connect") {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false); // Close the drawer if any other nav item is clicked
    }
  };

  return (
    <>
      <div className="navbar bg-black md:bg-transparent fixed z-50 lg:px-8 text-white top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="text-3xl lg:hidden">
              <MdMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    className={activeNavItem === item.name ? "active" : ""}
                    to={item.link}
                    onClick={() => handleNavItemClick(item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="">
            <img
              src={logo}
              priority="true"
              alt="Logo"
              width={300}
              height={300}
              className="w-[6rem] md:w-[12rem]"
            />
          </Link>
        </div>
        <div className="navbar-end hidden justify-around lg:flex">
          <ul className="menu uppercase font-extralight tracking-widest menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.id} className="py-0">
                <Link
                  className={`rounded-full hover:bg-transparent py-1 px-3 group ${
                    activeNavItem === item.name
                      ? "bg-transparent outline-white outline-1 outline"
                      : ""
                  }`}
                  to={item.link}
                  onClick={() => handleNavItemClick(item.name)}
                >
                  <MdFiberManualRecord
                    className={
                      activeNavItem === item.name
                        ? "text-red-500 group-hover:text-white text-xl"
                        : "text-transparent"
                    }
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fullscreen Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
