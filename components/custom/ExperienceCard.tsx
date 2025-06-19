"use client";

import Image from "next/image";
import { useState } from "react";

const MAX_LINES = 3; // Number of lines to show when collapsed

const ExperienceCard = ({ exp }: { exp: WorkExperienceType }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`flex w-80 flex-col rounded-xl bg-[#f6ebef] dark:bg-[#19191c] bg-clip-border text-muted-foreground shadow-md transition-all duration-300 ${
        expanded ? "" : "h-[420px]"
      }`}
    >
      <div className="mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
        <Image
          src={exp.thumbnail}
          alt={exp.title}
          width={320}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 flex-1 overflow-hidden">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {exp.title}
        </h5>
        <p
          className={`block font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-300 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {exp.desc}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white dark:text-black shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;
