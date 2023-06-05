import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Marcello
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          And I'm a Software Developer.
        </h2>
        <p className="text-[#a9afbf] py-4 max-w-[700px]">
          I’m a passionate developer specializing in Front End Development, also
          I'm enjoying learning the Backend and Mobile side as well. Currently,
          I’m focused on building responsive applications and I'm learning and
          exploring as much as possible best practices and new technologies.
        </p>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-md transition duration-300 max-w-[300px]"
          >
            View Work
            <span className="group-hover:rotate-90 transform ml-3 transition duration-300">
              <HiArrowNarrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
