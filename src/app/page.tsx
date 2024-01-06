import { Background } from "@/components/background";
import { ButtonsBar } from "@/components/buttons-bar";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Footer } from "@/components/footer";
import { AboutMe } from "@/components/sections/about-me";
import { Presentation } from "@/components/presentation";
import { ButtonDown } from "@/components/button-down";

export default function Home() {
  return (
    <main className="font-body">
      <div className="flex h-screen w-screen flex-col gap-10 px-3 w-fit h-fit items-center justify-center">
        <Presentation className="flex flex-col-reverse items-center gap-8 md:flex-row" />
        <ButtonsBar />
        <ButtonDown className="absolute bottom-32 left-1/2 -translate-x-1/2" />
      </div>
      <div className="flex flex-col w-screen items-center gap-y-14 md:gap-y-20 overflow-hidden max-w-7xl m-auto">
        <Skills className="flex flex-col gap-4 md:gap-8 w-full" />
        <Projects className="flex flex-col gap-8 mx-8" />
        <AboutMe className="flex flex-col w-full items-center px-8 pb-8 gap-2 md:gap-4" />
      </div>
      <Footer />
      <Background />
    </main>
  );
}
