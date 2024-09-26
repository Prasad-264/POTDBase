"use client";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";
import { Sun, Moon, Terminal } from "lucide-react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <nav className="p-4 dark:bg-gray-800 bg-white sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <Terminal className="mr-2" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            POTDBase
          </span>
        </h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-900 hover:opacity-80"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
