"use client";

import { A } from "./ui/a";
import Image from "next/image";

interface ButtonsBarProps {
  className?: string;
}

export function ButtonsBar({ className }: ButtonsBarProps) {
  return (
    <div className={className}>
      <A className="rounded-lg" href="https://github.com/MartinGbz">
        <Image
          className="mr-2 h-4 w-4"
          src={"icons/socials/github.svg"}
          alt="github"
          height={17}
          width={17}
        />
        {"Github"}
      </A>
      <A className="rounded-lg" href="https://twitter.com/0xMartinGbz">
        <Image
          className="mr-2 w-4"
          src={"icons/socials/x-twitter.svg"}
          alt="x"
          height={15}
          width={15}
        />
        {"X/Twitter"}
      </A>
      <A className="rounded-lg" href="https://hey.xyz/u/martingbz">
        <Image
          className="mr-0 h-7 w-7"
          src={"icons/socials/lens.svg"}
          alt="lens"
          height={17}
          width={17}
        />
        {"Lens"}
      </A>
      <A className="rounded-lg" href="https://warpcast.com/martingbz">
        <Image
          className="mr-2 h-5 w-5"
          src={"icons/socials/farcaster.svg"}
          alt="farcaster"
          height={17}
          width={17}
        />
        {"Farcaster"}
      </A>
      <A className="rounded-lg" href="https://t.me/martingbz">
        <Image
          className="mr-2 h-5 w-5"
          src={"icons/socials/telegram.svg"}
          alt="telegram"
          height={17}
          width={17}
        />
        {"Telegram"}
      </A>
      <A
        className="rounded-lg"
        href="https://www.linkedin.com/in/martin-grabarz/">
        <Image
          className="mr-2 h-5 w-5"
          src={"icons/socials/linkedin.svg"}
          alt="linkedin"
          height={17}
          width={17}
        />
        {"Linkedin"}
      </A>
      <A
        className="rounded-lg"
        href="https://discordapp.com/users/558033313349107733">
        <Image
          className="mr-2 h-5 w-5"
          src={"icons/socials/discord.svg"}
          alt="discord"
          height={17}
          width={17}
        />
        {"Discord"}
      </A>
      <A
        className="rounded-lg"
        href="https://etherscan.io/address/martingbz.eth">
        <Image
          className="mr-2 h-5 w-5"
          src={"icons/socials/ens.svg"}
          alt="ens"
          height={17}
          width={17}
        />
        {"ENS"}
      </A>
      <A className="rounded-lg" href="mailto:martingbz@proton.me">
        <Image
          className="mr-2 h-5 w-5"
          src={"icons/socials/mail.svg"}
          alt="mail"
          height={17}
          width={17}
        />
        {"Mail"}
      </A>
    </div>
  );
}
