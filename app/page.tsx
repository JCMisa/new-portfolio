import { DockNavbar } from "@/components/custom/DockNavbar";
import Hero from "@/components/custom/Hero";
import { OverviewSection } from "@/components/custom/OverviewSection";
import ProjectsSection from "../components/custom/ProjectsSection";
import GoUp from "@/components/custom/GoUp";
import CertificatesSection from "@/components/custom/CertificatesSection";

export default function Home() {
  return (
    <div className="p-10 md:px-14 lg:px-20">
      <DockNavbar />
      <Hero />
      <OverviewSection />
      <div className="mt-20 lg:mt-52">
        <ProjectsSection />
        <CertificatesSection />
      </div>
      <GoUp />
    </div>
  );
}
