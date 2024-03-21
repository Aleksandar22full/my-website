import React from "react";
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const WhatIDo = () => {
  return (
    <div className="mt-28 text-center">
      <h1 className="text-6xl underline decoration solid decoration-blue-500 decoration-6">
        My Services
      </h1>
      <div className="p-16 mt-16 md:h-96 grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
        <div className="bg-slate-200 p-4 rounded-lg text-center h-72">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center">
              <FaPaintBrush size={32} color="cornflowerBlue" />
            </div>
          </div>
          <p className="text-3xl solid">Website design & Redesign</p>
        </div>
        <div className="bg-slate-200 p-4 rounded-lg text-center h-72">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center">
              <FaCode size={32} color="cornflowerBlue" />
            </div>
          </div>
          <p className="text-3xl solid">Website Development</p>
        </div>
        <div className="bg-slate-200 p-4 rounded-lg text-center h-72">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-white rounded-full w-16 h-16 flex justify-center items-center">
              <FaSearch size={32} color="cornflowerBlue" />
            </div>
          </div>
          <p className="text-3xl solid">SEO & Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
