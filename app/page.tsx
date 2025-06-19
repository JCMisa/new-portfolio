import { DockNavbar } from "@/components/custom/DockNavbar";
import Hero from "@/components/custom/Hero";
import { OverviewSection } from "@/components/custom/OverviewSection";
import ProjectsSection from "../components/custom/ProjectsSection";
import GoUp from "@/components/custom/GoUp";
import CertificatesSection from "@/components/custom/CertificatesSection";
import ContactSection from "@/components/custom/ContactSection";
import { TestimonialsSection } from "@/components/custom/TestimonialsSection";
import ExperienceSection from "@/components/custom/ExperienceSection";

export default function Home() {
  return (
    <div className="p-10 md:px-14 lg:px-20">
      <DockNavbar />
      <Hero />
      <OverviewSection />
      <div className="my-20 lg:mt-52">
        <ProjectsSection />
        <CertificatesSection />
      </div>
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <GoUp />
    </div>
  );
}
