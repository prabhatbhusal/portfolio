import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="px-25 py-10">
     
      <div className="flex flex-col items-center justify-center h-100">
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

        <h1 className="font-bold text-white text-8xl">Hi, I'm Prabhat</h1>
        <h1 className="font-bold text-white text-7xl">Designer and Developer</h1>
      </div>
      <hr className="h-0.5 bg-blue-800 w-full" />
    </div>
  );
};

export default Page;