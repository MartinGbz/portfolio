import { A } from "@/components/ui/a";
import Image from "next/image";
import { Background } from "@/components/background";
// import github from "@/medias/icons/github.svg";

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
          <div className="w-fit h-fit flex gap-4 flex-wrap justify-center">
            <A className="rounded-lg" href="https://github.com/MartinGbz">
              <Image
                className="mr-2 h-4 w-4"
                src={"icons/github.svg"}
                alt="github"
                height={17}
                width={17}
              />
              {"Github"}
            </A>
            <A className="rounded-lg" href="https://twitter.com/0xMartinGbz">
              <Image
                className="mr-2 h-4 w-4"
                src={"icons/x-twitter.svg"}
                alt="x"
                height={17}
                width={17}
              />
              {"X/Twitter"}
            </A>
            <A className="rounded-lg" href="https://hey.xyz/u/martingbz">
              <Image
                className="mr-0 h-7 w-7"
                src={"icons/lens.svg"}
                alt="lens"
                height={17}
                width={17}
              />
              {"Lens"}
            </A>
            <A className="rounded-lg" href="https://warpcast.com/martingbz">
              <Image
                className="mr-2 h-5 w-5"
                src={"icons/farcaster.svg"}
                alt="farcaster"
                height={17}
                width={17}
              />
              {"Farcaster"}
            </A>
            <A className="rounded-lg" href="https://t.me/martingbz">
              <Image
                className="mr-2 h-5 w-5"
                src={"icons/telegram.svg"}
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
                src={"icons/linkedin.svg"}
                alt="lens"
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
                src={"icons/discord.svg"}
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
                src={"icons/ens.svg"}
                alt="lens"
                height={17}
                width={17}
              />
              {"ENS"}
            </A>
            <A className="rounded-lg" href="mailto:martingbz@proton.me">
              <Image
                className="mr-2 h-5 w-5"
                src={"icons/mail.svg"}
                alt="lens"
                height={17}
                width={17}
              />
              {"Mail"}
            </A>
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
