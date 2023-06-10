import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import {
  FiSearch,
  FiUser,
  FiChevronDown,
  FiShare2,
  FiArrowLeft,
} from "react-icons/fi";
import Logo from "../../Assets/bookmyshow-logo-vector 2.svg";

function MovieNavbar() {
  const Navsm = () => {
    return (
      <>
        <div className="bg-slate-800 h-16 text-white w-full px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiArrowLeft size={20} />
            <h3 className="font-semibold">Movie Title</h3>
          </div>
          <div className="flex items-center gap-4">
            <FiShare2 size={20} />
          </div>
        </div>
      </>
    );
  };

  const Navmd = () => {
    return (
      <>
        <div className="bg-slate-800 text-white w-full flex flex-col px-6 py-2">
          <div className="bg-white p-2 rounded flex gap-1 items-center w-full my-2">
            <FiSearch size={20} color="gray" />
            <input
              type="search"
              className="navbar-search-input w-full focus:outline-none "
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
            />
          </div>

          <div className=".bg-gray-900 py-2">
            <ul className="text-sm flex gap-5">
              <li>Movies</li>
              <li>Stream</li>
              <li>Events</li>
              <li>Plays</li>
              <li>Sports</li>
              <li>Activities</li>
              <li>Buzz</li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  const Navlg = () => {
    return (
      <>
        <div className="bg-slate-800 text-white w-full flex flex-col">
          <div className="flex items-center px-8 py-2 justify-between">
            <div className="w-9/12  flex items-center gap-2">
              <div className="w-36">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="book my show logo"
                    className="w-100 h-100"
                  />
                </Link>
              </div>
              <div className="bg-white p-2 rounded flex gap-1 items-center w-6/12 my-2 ">
                <FiSearch size={20} color="gray" />
                <input
                  type="search"
                  className="navbar-search-input w-full focus:outline-none"
                  placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <span className="flex text-md items-center gap-1">
                Chennai <FiChevronDown size={14} />
              </span>
              <button className="Ghost-btn">
                {" "}
                <FiUser />
                Hi, Guest
              </button>
            </div>
          </div>
          <div className="px-8 py-2 flex justify-between items-center bg-gray-900">
            <div className="navbar-tablet-listitems">
              <ul className="text-md flex gap-5">
                <li>Movies</li>
                <li>Stream</li>
                <li>Events</li>
                <li>Plays</li>
                <li>Sports</li>
                <li>Activities</li>
                <li>Buzz</li>
              </ul>
            </div>
            <div className="navbar-tablet-listitems">
              <ul className="text-xs flex gap-5">
                <li>ListYourShow</li>
                <li>Corporates</li>
                <li>Offers</li>
                <li>Gift Cards</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <nav>
        <div className="md:hidden">{<Navsm />}</div>

        <div className="hidden lg:hidden md:flex">{<Navmd />}</div>

        <div className="hidden lg:flex">{<Navlg />}</div>
      </nav>
    </>
  );
}

export default MovieNavbar;
