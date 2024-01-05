"use client";

import Image from "next/image";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <Image
      className="w-screen"
      src={"/wave.png"}
      alt="github"
      height={208}
      width={1000}
    />
  );
}
