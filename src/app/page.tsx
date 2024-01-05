import Image from "next/image";
import { Background } from "@/components/background";
import { ButtonsBar } from "@/components/buttons-bar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="font-body">
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col gap-10 w-fit h-fit mx-4 items-center">
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row">
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
              <p className="w-fit text-xl text-center md:text-3xl md:text-left font-title">
                {"Software engineer & web3 believer/builder."}
              </p>
              <span className="w-fit text-xl md:text-3xl md:text-left font-title">
                <span>{"Prev."}</span>
                <a
                  className="inline-flex mx-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  target="_blank"
                  href="https://www.sismo.io/">
                  {"Sismo"}
                  <Image
                    className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] ml-1"
                    src="/icons/sismo.png"
                    alt="me"
                    width={250}
                    height={250}
                  />
                </a>
              </span>
            </div>
            <div className="flex items-center md:justify-end">
              <a
                className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                target="_blank"
                href="https://etherscan.io/nft/0x8b4616926705fb61e9c4eeac07cd946a5d4b0760/5977">
                <Image
                  className="min-w-[250px]"
                  src="lucha.svg"
                  alt="me"
                  width={250}
                  height={250}
                />
              </a>
            </div>
          </div>
          <ButtonsBar className="" />
        </div>
      </div>
      <div className="flex flex-col w-screen items-center gap-y-10 md:gap-y-24">
        <Skills className="flex flex-col gap-4 md:gap-8 w-full" />
        {/* <div className="flex flex-col gap-8 w-full">
          <h2 className="text-center text-3xl md:text-5xl font-title text-primary-foreground">
            {"Skills"}
          </h2>
          <div className="grid grid-cols-3 justify-items-center mx-10	">
            <div>
              <h3 className="text-xl md:text-3xl font-title mb-2 text-center">
                Front
              </h3>
              <ul className="*:text-sm *:md:text-lg">
                <li>React</li>
                <li>NextJs </li>
                <li>wagmi / viem</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-title mb-2 text-center">
                Back
              </h3>
              <ul className="*:text-sm *:md:text-lg">
                <li>Solidity</li>
                <li>Foundry</li>
                <li>Node.js</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-3xl font-title mb-2 text-center">
                Other
              </h3>
              <ul className="*:text-sm *:md:text-lg">
                <li>Git</li>
                <li>Github</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div> */}
        <Projects className="flex flex-col gap-8 mx-8" />
        <div className="flex flex-col gap-4 md:gap-8 w-full items-center px-8 pb-8">
          <h2 className="text-3xl md:text-5xl font-title text-primary-foreground">
            {"Education"}
          </h2>
          <div className="text-center">
            {"🎓 Graduate engineer from the "}
            <a
              className="text-primary-foreground underline underline-offset-4"
              href="https://ig2i.centralelille.fr/">
              {"Ecole Centrale Lille IG2I"}
            </a>
            {" (School year 2023)."}
          </div>
        </div>
      </div>
      <Background />
    </main>
  );
}
