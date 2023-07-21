"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-[75vh] mt-[5vh] ">
      <Image
        src="/assets/home1.avif"
        alt="home"
        width={100}
        height={100}
        className="!w-[100%] h-[100%] "
      />
    </div>
  );
};

export default Home;
