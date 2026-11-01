import { Hero } from "@/sections/hero/Hero";
import { Journey } from "@/sections/journey/Journey";
import { Impact } from "@/sections/impact/Impact";
import { Projects } from "@/sections/projects/Projects";
import { Expertise } from "@/sections/expertise/Expertise";
import { Ventures } from "@/sections/ventures/Ventures";
import { Contact } from "@/sections/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Journey />
      <Impact />
      <Projects />
      <Expertise />
      <Ventures />
      <Contact />
    </>
  );
}
