import { TypingAnimation } from "../magicui/typing-animation";
import { ProjectsGallery } from "./ProjectsGallery";
import { ProjectsOverview } from "./ProjectsOverview";

const ProjectsSection = () => {
  return (
    <section className="my-10 space-y-4" id="projects">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">
          My <span className="text-primary">Work</span>
        </h1>
        <TypingAnimation
          startOnView={true}
          className="text-lg lg:text-xl text-muted-foreground text-center"
        >
          Transforming complex ideas into impactful digital realities.
        </TypingAnimation>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 relative">
        <div className="">
          <ProjectsOverview />
        </div>

        <div className="sm:col-span-2 relative max-h-[50rem] overflow-y-auto no-scrollbar">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
          <ProjectsGallery />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
