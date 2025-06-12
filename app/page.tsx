import { DockNavbar } from "@/components/custom/DockNavbar";
import EasterEgg from "@/components/custom/EasterEgg";
import Hero from "@/components/custom/Hero";
import { OverviewSection } from "@/components/custom/OverviewSection";
import ProjectsSection from "../components/custom/ProjectsSection";
import GoUp from "@/components/custom/GoUp";

export default function Home() {
  return (
    <div className="p-10 md:px-14 lg:px-20">
      <DockNavbar />
      <Hero />
      <OverviewSection />
      <ProjectsSection />
      <GoUp />
      <EasterEgg />
    </div>
  );
}
