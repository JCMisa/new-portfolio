import Image from "next/image";
import { BackgroundBeams } from "./BackgroundBeams";
import HeroVideo from "./HeroVideo";

import ResumeButton from "./ResumeButton";
import { Suspense } from "react";
import ScatterText from "./ScatterText";

const Hero = () => {
  return (
    <section>
      <BackgroundBeams />

      <div className="flex items-center justify-center my-20 flex-col">
        <Suspense fallback="loading...">
          <ResumeButton />
        </Suspense>
        <Image
          src={"/jcm-logo.svg"}
          alt="logo"
          width={500}
          height={500}
          priority
        />
        <h3 className="text-xl lg:text-2xl font-semibold text-center">
          Transforming ideas into tangible impact.{" "}
          <span className="text-primary">
            <ScatterText text="See how I do it." />
          </span>
        </h3>
      </div>
      <HeroVideo />
    </section>
  );
};

export default Hero;
