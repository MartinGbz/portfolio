import Image from "next/image";
import { Background } from "@/components/background";
import { ButtonsBar } from "@/components/buttons-bar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <main className="font-body">
      {/* <div className="flex items-center "> */}
      <div className="flex h-screen w-screen flex-col gap-10 px-3 w-fit h-fit items-center justify-center">
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
                className="inline-flex items-center mx-1 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                target="_blank"
                href="https://www.sismo.io/">
                {"Sismo"}
                <Image
                  className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] ml-1 rounded"
                  src={"/icons/sismo.png"}
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
                src={"/lucha.svg"}
                alt="me"
                width={250}
                height={250}
              />
            </a>
          </div>
        </div>
        <ButtonsBar />
        <a
          href="#skills"
          className="absolute bottom-32 left-1/2 -translate-x-1/2 border-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/75 p-5">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
      {/* </div> */}
      <div className="flex flex-col w-screen items-center gap-y-14 md:gap-y-20 overflow-hidden max-w-7xl m-auto">
        <Skills className="flex flex-col gap-4 md:gap-8 w-full" />
        <Projects className="flex flex-col gap-8 mx-8" />
        <div className="flex flex-col w-full items-center px-8 pb-8 gap-2 md:gap-4">
          <h2 className="text-3xl md:text-5xl font-title text-primary-foreground">
            {"About me"}
          </h2>
          <div className="flex flex-col gap-2 w-11/12 md:w-3/4 text-sm md:text-base">
            <p>{"I'm Martin, 23yo boy who love web3"}</p>
            <div>
              {"Did the "}
              <a
                className="text-secondary-foreground underline underline-offset-4"
                href="https://ig2i.centralelille.fr/">
                {"Ecole Centrale Lille IG2I"}
              </a>
              {" and was graduated 🧑‍🎓 in end of 2023."}
            </div>
            <div>
              <span>{"Joined "}</span>
              <a
                className="text-secondary-foreground underline underline-offset-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                target="_blank"
                href="https://www.sismo.io/">
                {"Sismo"}
              </a>
              <span>
                {
                  " for my end-of-studies internship as a developer support engineer, I loved this experience, and it opened a lot of doors for me."
                }
              </span>
            </div>
            <div>
              <span>
                {
                  "I've been able to travel and support developers around many hackathons ("
                }
              </span>
              <a
                className="text-secondary-foreground underline underline-offset-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                target="_blank"
                href="https://ethporto.org/">
                {"EthPorto"}
              </a>
              <span>{", "}</span>
              <a
                className="text-secondary-foreground underline underline-offset-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                target="_blank"
                href="https://www.zklisbon.com/">
                {"ZK Hack Lisbon"}
              </a>
              <span>{", "}</span>
              <a
                className="text-secondary-foreground underline underline-offset-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                target="_blank"
                href="https://www.ethcc.io/">
                {"EthCC"}
              </a>
              <span>{")."}</span>
            </div>
            <p>
              {
                "Since the end of my internship, I've decided to take some time for myself and work on my own projects. The main aim is to learn/build all the things I didn't have time to do when I was at school."
              }
            </p>
            <p>{"Let's see what's next for me! 👀"}</p>
          </div>
        </div>
      </div>
      <Footer />
      <Background />
    </main>
  );
}
