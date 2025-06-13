"use client";

/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/magicui/marquee";
import { certificates } from "@/constants";
import Image from "next/image";

// Calculate the number of certificates per row
const certificatesPerRow = Math.ceil(certificates.length / 4);

// Slice the certificates array into four equal parts
const firstRow = certificates.slice(0, certificatesPerRow);
const secondRow = certificates.slice(
  certificatesPerRow,
  certificatesPerRow * 2
);
const thirdRow = certificates.slice(
  certificatesPerRow * 2,
  certificatesPerRow * 3
);
const fourthRow = certificates.slice(certificatesPerRow * 3);

console.log(
  `first row: ${firstRow.map((row) => row.id)},\n 
  second row: ${secondRow.map((row) => row.id)},\n
  third row: ${thirdRow.map((row) => row.id)},\n
  fourth row: ${fourthRow.map((row) => row.id)}`
);

const handleImageClick = (
  event: React.MouseEvent<HTMLImageElement, MouseEvent>
) => {
  const image = event.currentTarget;
  image.classList.add("fullscreen-image");

  if (image.requestFullscreen) {
    image.requestFullscreen();
  } else if ((image as any).webkitRequestFullscreen) {
    (image as any).webkitRequestFullscreen();
  } else if ((image as any).mozRequestFullScreen) {
    (image as any).mozRequestFullScreen();
  } else if ((image as any).msRequestFullscreen) {
    (image as any).msRequestFullscreen();
  }
};

// Add event listener for fullscreen change
if (typeof window !== "undefined") {
  document.addEventListener("fullscreenchange", () => {
    const fullscreenElement = document.fullscreenElement;
    if (!fullscreenElement) {
      // Remove the class when exiting fullscreen
      document.querySelectorAll(".fullscreen-image").forEach((img) => {
        img.classList.remove("fullscreen-image");
      });
    }
  });
}

export function CertificatesList() {
  return (
    <div className="relative flex h-96 md:h-[50rem] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <style jsx global>{`
        .fullscreen-image {
          object-fit: contain !important;
          max-width: 100vw !important;
          max-height: 100vh !important;
          width: auto !important;
          height: auto !important;
          margin: auto !important;
          background-color: rgba(0, 0, 0, 0.9) !important;
        }
      `}</style>
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((cert) => (
            <Image
              src={cert.img || "/empty-img.png"}
              alt={`${cert.title} certificate image`}
              width={500}
              height={500}
              priority={false}
              quality={85}
              className="object-cover cursor-pointer transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              key={cert.id}
              onClick={handleImageClick}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((cert) => (
            <Image
              src={cert.img || "/empty-img.png"}
              alt={`${cert.title} certificate image`}
              width={500}
              height={500}
              priority={false}
              quality={85}
              className="object-cover cursor-pointer transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              key={cert.id}
              onClick={handleImageClick}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((cert) => (
            <Image
              src={cert.img || "/empty-img.png"}
              alt={`${cert.title} certificate image`}
              width={500}
              height={500}
              priority={false}
              quality={85}
              className="object-cover cursor-pointer transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              key={cert.id}
              onClick={handleImageClick}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((cert) => (
            <Image
              src={cert.img || "/empty-img.png"}
              alt={`${cert.title} certificate image`}
              width={500}
              height={500}
              priority={false}
              quality={85}
              className="object-cover cursor-pointer transition-all duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              key={cert.id}
              onClick={handleImageClick}
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
