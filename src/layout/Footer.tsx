import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#575757] py-8 px-4  h-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold ">Front-2.2</h2>
          <p className="text-sm text-gray-400 mt-1">
            Building tomorrow, today.
          </p>
        </div>

        <div className="flex space-x-5 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} ZFuture. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
