import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="px-25 py-10 ">
      <div className="flex flex-col items-center justify-center h-125 gap-5">
        {/* Outer div with gradient background acting as border */}
        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full gap-3 ">
          {/* Inner Image with solid background */}
          <Image
            src="/prabhat.png"
            height={200}
            width={200}
            alt="Prabhat"
            className="rounded-full bg-white object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold bg-gradient-to-r from-indigo-200 to-purple-900 bg-clip-text text-transparent  text-8xl">
            Hi. I`m Prabhat.
          </h1>
          <h1 className="font-bold bg-gradient-to-r from-indigo-200 to-purple-900 bg-clip-text text-transparent text-6xl mb-2">
            Engineer. | Designer. | Developer.
          </h1>
          
          <p className="bg-gradient-to-r from-indigo-200 to-purple-400 bg-clip-text text-transparent font-semibold text-2xl ">
            Turning Ideas into real world solutions
          </p>
        </div>
      </div>

      <div
        id="skills"
        className="h-150 border-blue-800 border-2 rounded-2xl mt-12"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-semibold py-5">Skills</h1>
          <div className="grid grid-cols-2 gap-10 text-white">
            <div className="px-30 py-20 border-2 border-blue-800 rounded">
              <h1>Frontend Developer</h1>
              <p>NextJS</p>
              <p>TypeScript</p>
              <p></p>
            </div>
            <div className="px-30 py-20 border-2 border-blue-800 rounded">
              <h1>Backend Developer</h1>
              <p>Hello</p>
            </div>
            <div className="px-30 py-20 border-2 border-blue-800 rounded">
              <h1>Frontend Developer</h1>
              <p>Hello</p>
            </div>
            <div className="px-30 py-20 border-2 border-blue-800 rounded">
              <h1>Frontend Developer</h1>
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="h-150 border-blue-800 border-2 rounded-2xl mt-12"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-semibold py-5">Experience</h1>
          <div className="grid grid-cols-2 gap-10 text-white">
            <div className="px-30 py-20 border-2 border-blue-800 rounded">
              <h1>Frontend Developer</h1>
              <p>NextJS</p>
              <p>TypeScript</p>
              <p></p>
            </div>
            <div className="px-30 py-20 border-2 border-blue-800 rounded">
              <h1>Backend Developer</h1>
              <p>Hello</p>
            </div>
            <div className="px-30 py-20 border-2 border-blue-800 rounded">
              <h1>Frontend Developer</h1>
              <p>Hello</p>
            </div>
            <div className="px-30 py-20 border-2 border-blue-800 rounded">
              <h1>Frontend Developer</h1>
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
