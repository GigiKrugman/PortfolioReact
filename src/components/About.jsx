import React from "react";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              <h1>Passionate</h1>
              <h2>Creative</h2>
              <h3>Motivated</h3>
            </p>
          </div>
          <div>
            <p>
              I'm a passionate person with many hobbies such as painting,
              traveling and photography. I love to go beyond my comfort zone,
              explore new places and learn new things! Technology is a very
              important aspect of my life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
