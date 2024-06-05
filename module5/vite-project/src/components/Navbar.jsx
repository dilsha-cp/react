import React from "react";
import Logo from "../movie.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 pl-4">
      <img className="w-[50px]" src={Logo} alt="" />
      <Link to="/"className="text-blue-700 text-3xl font-bold">Movies</Link>
      <Link to="/watchlist"className="text-blue-700 text-3xl font-bold">Watchlist</Link>
    </div>
  );
};
