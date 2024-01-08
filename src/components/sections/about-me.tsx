"use client";

interface AboutMeProps {
  className?: string;
}

export function AboutMe({ className }: AboutMeProps) {
  return (
    <div
      className={`${className} flex flex-col w-full items-center gap-2 md:gap-4`}>
      <h2 className="text-3xl md:text-5xl font-title text-primary-foreground">
        {"About me"}
      </h2>
      <div className="flex flex-col gap-2 w-11/12 md:w-3/4 text-sm md:text-base">
        <p>{"I'm Martin, 23yo boy who loves web3"}</p>
        <div>
          {"Did the "}
          <a
            className="text-secondary-foreground underline underline-offset-4"
            href="https://ig2i.centralelille.fr/">
            {"Centrale Lille IG2I"}
          </a>
          {" engineering school and was graduated in end of 2023 🧑‍🎓"}
        </div>
        <div>
          <span>{"I joined "}</span>
          <a
            className="text-secondary-foreground underline underline-offset-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            target="_blank"
            href="https://www.sismo.io/">
            {"Sismo"}
          </a>
          <span>
            {
              " for my end-of-studies internship as a developer support engineer, and I loved this experience."
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
            "Since the end of my internship, I've decided to take some time for myself and work on my own projects. The aim is to learn/build all the things I didn't have time to do when I was at school."
          }
        </p>
        <p>{"Let's see what's next for me! 👀"}</p>
      </div>
    </div>
  );
}
