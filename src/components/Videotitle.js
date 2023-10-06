import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h1 className="py-6 text-lg w-2/4">{overview}</h1>
      <div>
        <button className="bg-white text-black p-4 px-12 font-bold text-xl rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-4 px-12 font-bold text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
