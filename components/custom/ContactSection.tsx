import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { socialMedia } from "@/constants";
import Image from "next/image";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent p-5 mt-20"
      id="contact"
    >
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to turn your <span className="text-primary">ideas</span> into{" "}
          <span className="text-primary">reality</span>?
        </h1>
        <p className="text-muted-foreground md:mt-10 my-5 text-center">
          Don&apos;t wait! Get in touch today and see how I can help you🤗
        </p>

        <Button asChild>
          <Link
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=johncarlomisa399@gmail.com"
            target="_blank"
            className="flex items-center gap-2 cursor-pointer min-w-52 max-w-52"
          >
            <SendIcon className="size-4" />
            Let's get in touch
          </Link>
        </Button>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between w-full items-center z-50">
        <p className="md:text-base text-sm md:font-normal font-light">
          © JCM {new Date().getFullYear()} - JC Misa
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5">
          {socialMedia.map((social) => (
            <a href={social.link} target="_blank" key={social.id}>
              <span className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <Image src={social.img} alt="icons" width={20} height={20} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
