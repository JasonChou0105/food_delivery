"use client";

import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

function BurgerCard({ burger }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`transition-transform ease-out duration-500 border border-neutral-500 rounded-lg p-4 flex items-center relative overflow-hidden ${
        isHovered && "scale-105"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute z-20 top-0 right-0 h-full bg-gradient-to-l from-black to-transparent pointer-events-none w-full transition-transform ease-out duration-500"
        style={{
          transform: `translateX(${!isHovered * 100}%)`,
        }}
      >
        <div className="flex justify-end p-3">
          <div className="w-1/2 text-neutral-300">{burger.description}</div>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="text-lg font-semibold leading-6">{burger.name}</h2>
        <p className="text-neutral-400 mb-6">${burger.price.toFixed(2)}</p>
        <button>
          <FaPlusCircle className="text-3xl transition-all ease-out duration-500 hover:text-amber-600" />
        </button>
      </div>
      <img
        src={burger.imageUrl}
        alt={burger.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
    </div>
  );
}

export default BurgerCard;