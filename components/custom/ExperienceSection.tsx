import { workExperience } from "@/constants";
import { TypingAnimation } from "../magicui/typing-animation";
import { Button } from "../ui/button";
import ExperienceCard from "./ExperienceCard";
import { ScratchToReveal } from "../magicui/scratch-to-reveal";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  return (
    <section className="mt-20 w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-6xl font-bold text-center">
          My <span className="text-primary">Work</span> &{" "}
          <span className="text-primary">Contributions</span>
        </h1>
        <TypingAnimation
          startOnView={true}
          className="text-lg lg:text-xl text-muted-foreground text-center"
        >
          Exploring significant projects and experiences from my academic
          journey, freelance endeavors, and commissioned assignments.
        </TypingAnimation>
        <span className="text-xs text-primary font-semibold text-center">
          Scratch to reveal.
        </span>
      </div>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-3">
        {workExperience.map((exp) => (
          <ScratchToReveal
            key={exp.id}
            minScratchPercentage={30}
            className={cn(
              "relative h-full w-full cursor-pointer flex items-center justify-center overflow-hidden rounded-xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
            gradientColors={["#fda4af", "#f43f5e", "#e11d48"]}
          >
            <ExperienceCard exp={exp} />
          </ScratchToReveal>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
