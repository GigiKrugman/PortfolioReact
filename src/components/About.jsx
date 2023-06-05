import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center"
    >
      <div className="max-w-[1000px] w-full p-4 sm:p-8 grid gap-8 sm:grid-cols-2">
        <div className="text-center sm:text-right">
          <h2 className="text-5xl sm:text-6xl font-bold border-b-4 border-pink-600 inline-block">
            About
          </h2>
        </div>
        <div></div>
        <div className="text-center sm:text-right text-5xl sm:text-6xl font-bold">
          <h1 className="py-2">Passionate</h1>
          <h2 className="py-2">Creative</h2>
          <h3 className="py-2">Motivated</h3>
        </div>
        <div>
          <p className="text-xl sm:text-2xl text-center sm:text-left">
            I'm a passionate person with many hobbies such as painting,
            traveling and photography. I love to go beyond my comfort zone,
            explore new places and learn new things! Technology is a very
            important aspect of my life!
          </p>
        </div>
      </div>
    </div>
  );
}
