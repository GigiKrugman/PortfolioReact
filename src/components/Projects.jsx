import React from "react";
import { data } from "../data";

export default function Projects() {
  const projects = data;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Some of my projects:</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-full h-64 bg-cover bg-center rounded-t-md"
              ></div>
              {/* Hover effect */}
              <div className="opacity-0 group-hover:opacity-100 bg-[#040c16] rounded-b-md p-4">
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
                <div className="pt-4">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      GitHub
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
