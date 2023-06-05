import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full min-h-screen pb-16 bg-[#0a192f] flex justify-center items-center p-4 sm:p-8"
    >
      <form
        method="POST"
        action="https://getform.io/f/e2917961-5c23-42b1-9c7f-c31568120343"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h2 className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact Me
          </h2>
        </div>
        <input
          className="bg-[#b0bbdd] p-2 sm:p-4"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 sm:p-4 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 sm:p-4"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}
