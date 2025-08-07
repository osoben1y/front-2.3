import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">

        <NavLink to="/" className="text-white text-xl font-bold tracking-wide">
          ZApp™
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-medium" : "text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              isActive ? "text-white font-medium" : "text-gray-300"
            }
          >
            Add User
          </NavLink>
        </nav>

        <NavLink to="/login">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all">
            Login
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default React.memo(Header);
