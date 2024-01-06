"use client";

import Image from "next/image";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <div className="relative">
      <Image
        className="w-screen"
        src={"/wave.png"}
        alt="github"
        height={208}
        width={1000}
      />
      <p className="absolute bottom-4 left-1/2 text-center -translate-x-1/2">
        {" "}
        Built with ❤️ by MartinGbz{" "}
      </p>
    </div>
  );
}
