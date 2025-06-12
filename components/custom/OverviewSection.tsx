import {
  ClockIcon,
  HandshakeIcon,
  Laptop2Icon,
  PuzzleIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputs } from "./AnimatedBeamMultipleOutputs";
import { AnimatedListComponent } from "./AnimatedListComponent";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "../magicui/marquee";
import { TypingAnimation } from "../magicui/typing-animation";
import { Globe } from "../magicui/globe";

const approaches = [
  {
    name: "User-Centered Design",
    body: "I prioritize understanding user needs and behaviors to craft intuitive, engaging experiences that genuinely solve problems.",
  },
  {
    name: "Iterative Development",
    body: "My process involves continuous cycles of feedback, refinement, and testing, ensuring robust and adaptable solutions.",
  },
  {
    name: "Strategic Problem Solving",
    body: "I dissect complex challenges into manageable parts, applying critical thinking to devise effective and innovative solutions.",
  },
  {
    name: "Clean Code Principles",
    body: "I commit to writing maintainable, scalable, and efficient code, building a solid foundation for future growth and collaboration.",
  },
  {
    name: "Data-Driven Decisions",
    body: "Leveraging analytics and insights, I inform design and development choices to optimize performance and achieve measurable results.",
  },
];

const features = [
  {
    Icon: PuzzleIcon,
    name: "My Process",
    description: "Unveiling the strategic thinking behind impactful solutions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {approaches.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: HandshakeIcon,
    name: "Catalyst for Collaboration",
    description:
      "Fostering synergy and effective communication to drive shared success.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListComponent className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Laptop2Icon,
    name: "My Stack",
    description: "The robust technologies powering my solutions.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputs className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: ClockIcon,
    name: "Global Synchronicity",
    description:
      "Mastering diverse timelines to deliver on schedule, anywhere.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      //   <Calendar
      //     mode="single"
      //     selected={new Date(2022, 4, 11, 0, 0, 0)}
      //     className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      //   />
      <Globe className="absolute right-0 top-10 origin-top scale-75 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90" />
    ),
  },
];

export function OverviewSection() {
  return (
    <section className="my-10 space-y-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">
          The <span className="text-primary">Core</span>
        </h1>
        <TypingAnimation
          startOnView={true}
          className="text-lg lg:text-xl text-muted-foreground text-center"
        >
          Unveiling My Approach, Skills, and Proven Value
        </TypingAnimation>
      </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
