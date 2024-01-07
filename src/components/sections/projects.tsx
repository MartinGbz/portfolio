"use client";

import { A } from "../ui/a";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
  className?: string;
}

export function Projects({ className }: ProjectsProps) {
  return (
    <div className={`${className} flex flex-col gap-8 mx-8`}>
      <h2 className="text-center text-3xl md:text-5xl font-title text-primary-foreground">
        {"Last projects"}
      </h2>
      <div className="flex flex-row flex-wrap gap-4 justify-evenly text-center *:basis-full *:max-w-80 text-lg">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-center items-end">
              {"zk-whiteboard"}
              <Image
                className="w-[25px] h-full ml-2"
                src={"/icons/projects/zk-whiteboard-icon.png"}
                alt="zk-whiteboard-icon"
                height={25}
                width={25}
              />
            </CardTitle>
            <CardDescription>
              Express yourself freely & anonymously without bots spamming
              <br />
              <br />
              <span className="mt-2">
                <span>{"🤝 Project granted by "}</span>
                <a
                  className="text-secondary-foreground underline underline-offset-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  target="_blank"
                  href="https://www.sismo.io/">
                  {"Sismo"}
                </a>
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
              className="w-72 mr-2 rounded"
              src={"/icons/projects/zk-whiteboard-preview.png"}
              alt="zk-whiteboard-preview"
              height={500}
              width={500}
            />
          </CardContent>
          <CardFooter>
            <a href="https://github.com/MartinGbz/ZK-whiteboard">
              <Image
                className="w-[20px] h-[20px] mr-2"
                src={"/icons/socials/github.svg"}
                alt="github"
                height={20}
                width={20}
              />
            </a>
            <a href="https://www.zk-whiteboard.xyz/whiteboards" target="_blank">
              <ExternalLink />
            </a>
          </CardFooter>
        </Card>
        <Card className="relative">
          <CardHeader>
            <CardTitle>{"OnlyGoodVibes 🤗"}</CardTitle>
            <CardDescription>
              {'The "bad vibes-free" social network'}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
              className="w-72 mr-2 rounded"
              src={"/icons/projects/only-good-vibes-preview.png"}
              alt="only-good-vibes-preview"
              height={500}
              width={500}
            />
          </CardContent>
          <CardFooter className="absolute bottom-0">
            <a href="https://github.com/MartinGbz/OnlyGoodVibes">
              <Image
                className="w-[20px] h-[20px] mr-2"
                src={"/icons/socials/github.svg"}
                alt="github"
                height={20}
                width={20}
              />
            </a>
            <a href="https://only-good-vibes.vercel.app" target="_blank">
              <ExternalLink />
            </a>
          </CardFooter>
        </Card>
        <Card className="relative">
          <CardHeader>
            <CardTitle>{"NameDayoken 🥳"}</CardTitle>
            <CardDescription>
              {
                "The ERC-20 token mintable only during its name day and by the name owners"
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
              className="w-72 mr-2 rounded"
              src={"/icons/projects/name-day-token-preview.png"}
              alt="only-good-vibes-preview"
              height={500}
              width={500}
            />
          </CardContent>
          <CardFooter className="absolute bottom-0">
            <a href="https://github.com/MartinGbz/NameDayToken-front">
              <Image
                className="w-[20px] h-[20px] mr-2"
                src={"/icons/socials/github.svg"}
                alt="github"
                height={20}
                width={20}
              />
            </a>
            <a
              href="https://name-day-token.vercel.app/token/0x723Fb61CD350C5256784c709E1586708Ef460298"
              target="_blank">
              <ExternalLink />
            </a>
          </CardFooter>
        </Card>
      </div>
      <A
        href="https://github.com/MartinGbz"
        target="_blank"
        className="w-fit self-center">
        {"See all projects"}
      </A>
    </div>
  );
}
