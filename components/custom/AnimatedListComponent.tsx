"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import {
  BrainIcon,
  LightbulbIcon,
  MessageSquareIcon,
  RefreshCwIcon,
  UsersIcon,
} from "lucide-react";

interface Item {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  tagline: string;
}

let softSkills = [
  {
    name: "Effective Communication",
    description:
      "Conveying complex ideas clearly and listening actively to foster understanding.",
    icon: MessageSquareIcon,
    color: "#4CAF50",
    context:
      "Ensuring seamless team alignment and client satisfaction through transparent dialogue.",
    tagline: "Clarity",
  },
  {
    name: "Collaborative Leadership",
    description:
      "Guiding teams with empathy and empowering individuals to achieve collective goals.",
    icon: UsersIcon,
    color: "#2196F3",
    context:
      "Cultivating a cohesive environment where diverse talents converge to deliver exceptional outcomes.",
    tagline: "Synergy",
  },
  {
    name: "Adaptability & Resilience",
    description:
      "Thriving in dynamic environments and overcoming obstacles with a flexible mindset.",
    icon: RefreshCwIcon,
    color: "#FFC107",
    context:
      "Navigating unforeseen challenges and pivots to maintain project momentum and quality.",
    tagline: "Agility",
  },
  {
    name: "Strategic Problem Solving",
    description:
      "Approaching challenges systematically to identify root causes and implement innovative solutions.",
    icon: LightbulbIcon,
    color: "#9C27B0",
    context:
      "Transforming complex issues into actionable strategies that drive efficiency and growth.",
    tagline: "Solutions",
  },
  {
    name: "Critical Thinking",
    description:
      "Analyzing information objectively and making informed decisions based on evidence.",
    icon: BrainIcon,
    color: "#E91E63",
    context:
      "Synthesizing diverse data points to inform robust solutions and minimize risks.",
    tagline: "Insight",
  },
];

softSkills = Array.from({ length: 10 }, () => softSkills).flat();

const Notification = ({
  name,
  description,
  icon: Icon,
  color,
  tagline,
}: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center p-2 px-3 rounded-full"
          style={{
            backgroundColor: color,
          }}
        >
          <Icon className="size-5 text-white" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{tagline}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListComponent({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-auto no-scrollbar p-2",
        className
      )}
    >
      <AnimatedList>
        {softSkills.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
