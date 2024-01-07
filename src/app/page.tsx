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
        <Presentation className="px-4" />
        <ButtonsBar />
        <ButtonDown className="hidden md:block" />
      </div>
      <div className="flex flex-col w-screen items-center gap-y-14 md:gap-y-20 overflow-hidden max-w-7xl m-auto">
        <Skills />
        <Projects />
        <AboutMe className="px-8 pb-8" />
      </div>
      <Footer />
      <Background />
    </main>
  );
}
