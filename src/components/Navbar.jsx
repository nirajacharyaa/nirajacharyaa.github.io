import React, { useContext } from "react";
import { SetIndexContext, IndexContext } from "../App";

const Navbar = () => {
  const { setActiveIndex, setImageIndex } = useContext(SetIndexContext);
  const { activeIndex, imageIndex } = useContext(IndexContext);

  return (
    <div>
      <ul
        className={
          "grid text-sm font-semibold grid-cols-5 place-items-start place-content-between gap-20 md:gap-16 select-none uppercase"
        }
      >
        <li
          className={`${
            activeIndex === 1 ? "text-ghiu border-b-4" : "text-ghiu opacity-40"
          } pb-1 cursor-pointer`}
          onClick={() => {
            setActiveIndex(1);
            setImageIndex(0);
          }}
        >
          About
        </li>
        <li
          className={` ${
            activeIndex === 2 ? "text-ghiu border-b-4" : "text-ghiu opacity-40"
          } pb-1 cursor-pointer`}
          onClick={() => {
            setActiveIndex(2);
            setImageIndex(1);
          }}
        >
          Works
        </li>
        <li
          className={`${
            activeIndex === 3 ? "text-ghiu border-b-4" : "text-ghiu opacity-40"
          } pb-1 cursor-pointer`}
          onClick={() => {
            setActiveIndex(3);
            setImageIndex(2);
          }}
        >
          Blogs
        </li>
        <li
          className={`${
            activeIndex === 4 ? "text-ghiu border-b-4" : "text-ghiu opacity-40"
          } pb-1 cursor-pointer`}
          onClick={() => {
            setActiveIndex(4);
            setImageIndex(3);
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
