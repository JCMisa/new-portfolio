import React from "react";
import { TypingAnimation } from "../magicui/typing-animation";
import { CertificatesList } from "./CertificatesList";
import { VelocityScroll } from "../magicui/scroll-based-velocity";

const CertificatesSection = () => {
  return (
    <section className="my-10 space-y-4">
      {/* <div className="flex flex-col items-center justify-self-end perspective-1000">
        <h1 className="text-6xl font-bold text-center scale-110 translate-x-[-20px] translate-z-[-50px] rotate-y-[-10deg]">
          Certifications <span className="text-primary">&</span> Achievements
        </h1>
        <TypingAnimation
          startOnView={true}
          className="text-lg lg:text-xl text-muted-foreground text-center transform transition-all duration-1000 hover:scale-105 hover:translate-x-[-10px] hover:translate-z-[-30px] hover:rotate-y-[-5deg]"
        >
          Certifications and Achievements
        </TypingAnimation>
      </div> */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll defaultVelocity={3}>
          <span className="text-primary">Certifications</span> and Achievements
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      <div className="sm:col-span-2 relative max-h-[50rem] overflow-y-auto no-scrollbar">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <CertificatesList />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default CertificatesSection;
