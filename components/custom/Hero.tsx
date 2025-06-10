import Image from "next/image";
import { BackgroundBeams } from "./BackgroundBeams";
import HeroVideo from "./HeroVideo";

const Hero = () => {
  return (
    <section>
      <BackgroundBeams />

      <div className="flex items-center justify-center my-20 flex-col">
        <Image
          src={"/jcm-logo.svg"}
          alt="logo"
          width={500}
          height={500}
          priority
        />
        <h3 className="text-xl lg:text-2xl font-semibold">
          Transforming ideas into tangible impact.{" "}
          <span className="text-primary">See how I do it.</span>
        </h3>
        <HeroVideo />
      </div>
    </section>
  );
};

export default Hero;
