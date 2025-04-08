import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="px-25 py-10 ">
      <div className="flex flex-col items-center justify-center h-125 gap-3">
        {/* Outer div with gradient background acting as border */}
        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full">
          {/* Inner Image with solid background */}
          <Image
            src="/prabhat.png"
            height={200}
            width={200}
            alt="Prabhat"
            className="rounded-full bg-white object-cover"
          />
        </div>

        <h1 className="font-bold text-white text-8xl">Hi. I`m Prabhat.</h1>
        <h1 className="font-bold text-white text-6xl">
          Designer. || Developer.
        </h1>
        <p className="text-white font-semibold">
          I`m passionate about crafting experiences that are engaging,
          accessible, and user-centric.
        </p>
      </div>

      <div id="skills" className="h-150 border-blue-800 border-2 rounded-2xl mt-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-semibold py-10">Skills</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
