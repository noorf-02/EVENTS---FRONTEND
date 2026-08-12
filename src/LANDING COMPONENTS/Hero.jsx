import React from "react";
import { Link } from "react-router-dom";

function hero() {
  return (
    <>
      <div
        className="hero min-h-screen bg-white bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,0.65)_0%,rgba(168,85,247,0.35)_25%,rgba(255,255,255,0)_65%)]"
      >
        <div className="wrapper nav-list flex justify-between items-center ">
          <p className="sm:text-2xl text-[20px] font-bold text-[#1b1b1b]">EVENTS</p>
          <div className="btns flex gap-2">
            <p className="cursor-pointer text-[#1b1b1b] text-[15px] sm:text-[17px]">
              Sign Up
            </p>
            <p className="text-[15px] sm:text-[17px]">/</p>
            <p className="cursor-pointer text-[#1b1b1b] text-[15px] sm:text-[17px]">
              Log In
            </p>
          </div>
        </div>

        <div className="hero-section wrapper flex justify-center items-center flex-col gap-2 min-h-[70vh]">
            <p className="italic text-[#1b1b1b]">Create. Connect. Celebrate.</p>
            <p className="text-[#1b1b1b] font-bold sm:text-4xl text-3xl">Events, simplified</p>
            <Link className="bg-purple-900 text-white font-medium py-1 px-3 rounded-[10px] hover:bg-purple-800 cursor-pointer mt-2">Get started</Link>
        </div>
      </div>
    </>
  );
}

export default hero;
