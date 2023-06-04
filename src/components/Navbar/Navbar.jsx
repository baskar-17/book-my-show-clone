import React from "react";
import { FiChevronRight, FiSearch } from "react-icons/fi";
import("./navbar.css");

function Navbar() {
  const Navsm = () => {
    return (
      <>
        <div className="navbar-container flex items-center justify-between">
          <div>
            <h3 className="navbar-heading">It All Starts Here!</h3>
            <span className="flex text-xs items-center navbar-location">
              Chennai <FiChevronRight size={12} />
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="Primary-btn">Use App</button>
            <FiSearch size={24} />
          </div>
        </div>
      </>
    );
  };

  const Navmd = () => {
    return console.log("Some one using from Tablet");
  };

  const Navlg = () => {
    return console.log("Some one using from Desktop/Laptop");
  };

  return (
    <>
      <nav>
        <div className="md:hidden">{<Navsm />}</div>
        <div className="hidden lg:hidden md:flex">{/* Tablet device */}</div>
        <div className="hidden lg:flex">{/* Desktop device */}</div>
      </nav>
    </>
  );
}

export default Navbar;
