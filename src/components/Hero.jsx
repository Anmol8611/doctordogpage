import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className='flex justify-around items-center h-[calc(100vh-95px)] bg-[#ffc400]'>
      <div className="flex flex-col gap-20">
        <h2 className="text-white text-7xl font-bold max-w-3xl">First I wanted to be a veterinarian </h2>
        <p className="text-3xl text-white max-w-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ut
          sequi iure quos illo doloribus maxime impedit aspernatur dolor aut.
        </p>
        <div className="flex justify-start items-center gap-14"> 
          <Button text={"Contact Us"} color={"#00bfcb"} />
          <Button
            text={"Our Service"}
            color={"#ffc400"}
            bor="border-2"
          />
        </div>
      </div>
      <div>
        <img src='/assets/heroKutta.png' alt='hero' />
      </div>
    </section>
  );
};

export default Hero;
