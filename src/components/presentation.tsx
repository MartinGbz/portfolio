"use client";

import Image from "next/image";

interface PresentationProps {
  className?: string;
}

export function Presentation({ className }: PresentationProps) {
  return (
    <div
      className={`${className} flex flex-col-reverse md:flex-row items-center gap-8`}>
      <div className="flex flex-col items-center md:items-start">
        <div className="text-sm md:text-xl font-title">
          <span className="w-fit inline-block animate-wiggle text-sm md:text-xl">
            👋
          </span>
          {" Hi I'm"}
        </div>
        <h1 className="text-5xl md:text-8xl text-primary-foreground font-title">
          {"MartinGbz"}
        </h1>
        <div className=" whitespace-nowrap flex flex-col items-center md:items-start">
          <p className="w-fit text-xl text-center md:text-3xl md:text-left font-title md:whitespace-nowrap">
            {"Software engineer & web3 builder"}
          </p>
          <span className="w-fit text-xl md:text-3xl md:text-left font-title">
            <span>{"Working at"}</span>
            <a
              className="inline-flex items-center mx-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              target="_blank"
              href="https://www.sismo.io/">
              {"Aave Chan Initiative"}
              <Image
                className="w-[35px] md:w-[45px] ml-2"
                src={"/icons/aci-white.png"}
                alt="me"
                width={5130}
                height={2538}
              />
            </a>
          </span>
        </div>
      </div>
      <div className="flex items-center md:justify-end">
        <a
          className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          target="_blank"
          href="https://etherscan.io/nft/0x8b4616926705fb61e9c4eeac07cd946a5d4b0760/5977">
          <Image
            className="smmh:w-[150px] smmh:h-[150px] min-w-[250px]"
            src={"/lucha.svg"}
            alt="me"
            width={250}
            height={250}
          />
        </a>
      </div>
    </div>
  );
}
