"use client";
import { useState, useEffect, useContext } from "react";
import { Model, TokenList } from "../index";

const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/token",
    },
    {
      name: "Pools",
      link: "/pool",
    },
  ];

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <div className="flex justify-between border-solid border-2 border-indigo-600">
      <div>
        <div>MainMenu</div>
      </div>
      <div>Middle</div>
      <div>Right</div>

      {openTokenBox && (
        <TokenList tokenData="hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
};

export default NavBar;
