import React from "react";

export default function Hero() {
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Hello!
              <span className="text-5xl sm:text-7xl">I'm Kabilan K</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            Welcome to my Portfolio! Here, you will find a collection of my projects, professional experience and research works. As I prepare to pursue a master’s degree in automobile engineering, I'm eager to share my journey and connect with fellow enthusiasts in the industry.


            </p>
            <div className="flex mt-8">
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Get started
              </a>
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img
              src="https://placehold.co/600x400?text=Hello+World"
              className="max-w-xs md:max-w-sm m-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
