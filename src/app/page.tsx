import { A } from "@/components/ui/a";
import Image from "next/image";
import { Background } from "@/components/background";

export default function Home() {
  return (
    <main>
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
            </div>
            <div className="flex items-center md:justify-end">
              <a
                target="_blank"
                href="https://etherscan.io/nft/0x8b4616926705fb61e9c4eeac07cd946a5d4b0760/5977">
                <Image
                  className="min-w-[250px]"
                  src="lucha.svg"
                  alt="me"
                  width={250}
                  height={100}
                />
              </a>
            </div>
          </div>
          <div className="w-fit h-fit flex gap-4 flex-wrap justify-center">
            <A className="rounded-lg" href="https://github.com/MartinGbz">
              Github
            </A>
            <A className="rounded-lg">X</A>
            <A className="rounded-lg">Lens</A>
            <A className="rounded-lg">Farcaster</A>
            <A className="rounded-lg">Telegram</A>
            <A className="rounded-lg">Discord</A>
            <A className="rounded-lg">ENS</A>
            <A className="rounded-lg">Linkedin</A>
            <A className="rounded-lg">Mail</A>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen w-screen items-center justify-center">
        <div className="h-96 mt-8 h-16 w-11/12 bg-blue-400">skils</div>
        <div className="h-96 mt-8 h-16 w-11/12 bg-blue-400">projects</div>
      </div>
      <Background />
    </main>
  );
}
