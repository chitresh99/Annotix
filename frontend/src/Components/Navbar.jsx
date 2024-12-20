import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-5 w-23 mr-5" src={logo} alt="logo" />
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>

            <a href="#" className="bg-gradient-to-r from-purple-500 to-orange-800 py-2 px-3 rounded-md">
                Create an account
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
