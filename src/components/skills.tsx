"use client";

import Image from "next/image";

interface ProjectsProps {
  className?: string;
}

export function Skills({ className }: ProjectsProps) {
  return (
    <div className={className}>
      <h2 className="text-center text-3xl md:text-5xl font-title text-primary-foreground">
        {"Skills"}
      </h2>
      <div className="grid grid-cols-3 justify-items-center mx-10	">
        <div>
          <h3 className="text-xl md:text-3xl font-title mb-2 text-center">
            Front
          </h3>
          <ul className="*:text-sm *:md:text-lg">
            <li className="flex items-center">
              <Image
                className="mr-2 w-4"
                src={"icons/techs/react.svg"}
                alt="x"
                height={15}
                width={15}
              />
              {"React"}
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2 w-4"
                src={"icons/techs/nextjs.svg"}
                alt="x"
                height={15}
                width={15}
              />
              {"NextJs"}
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/wevm.png"}
                alt="x"
                height={200}
                width={200}
              />
              {"Wagmi / Viem"}
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/tailwind.svg"}
                alt="x"
                height={200}
                width={200}
              />
              {"Tailwind"}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl md:text-3xl font-title mb-2 text-center">
            Back
          </h3>
          <ul className="*:text-sm *:md:text-lg">
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/solidity.svg"}
                alt="x"
                height={200}
                width={200}
              />
              {"Solidity"}
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/foundry.png"}
                alt="x"
                height={200}
                width={200}
              />
              {"Foundry"}
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/node.svg"}
                alt="x"
                height={200}
                width={200}
              />
              {"Node.js"}
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/postgreSQL.svg"}
                alt="x"
                height={200}
                width={200}
              />
              {"PostgreSQL"}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl md:text-3xl font-title mb-2 text-center">
            Other
          </h3>
          <ul className="*:text-sm *:md:text-lg">
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/git.svg"}
                alt="x"
                height={200}
                width={200}
              />
              {"Git"}
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/github.svg"}
                alt="x"
                height={200}
                width={200}
              />
              {"Github"}
            </li>
            <li className="flex items-center">
              <Image
                className="mr-2 w-5 h-5"
                src={"/icons/techs/vercel.svg"}
                alt="x"
                height={200}
                width={200}
              />
              {"Vercel"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
