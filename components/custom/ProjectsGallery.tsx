/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/constants";
import { ProjectCard } from "./ProjectCard";
import Image from "next/image";

const higherHeight = [1, 8, 17, 10, 3, 19, 11, 20, 4, 21, 13];

export function ProjectsGallery() {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {projects.map((proj: ProjectType, idx: number) => (
          <BlurFade key={proj.id} delay={0.25 + idx * 0.05} inView>
            <Dialog>
              <DialogTrigger>
                <Image
                  src={proj.img || "/empty-img.png"}
                  alt={`Project Image ${idx + 1}`}
                  width={500}
                  height={500}
                  className={`mb-4 size-full rounded-lg object-cover cursor-pointer hover:scale-105 transition-all ${
                    higherHeight.includes(idx) ? "h-96" : "h-64"
                  }`}
                  priority={idx < 2}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </DialogTrigger>
              <DialogContent className="bg-transparent border border-none">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription asChild>
                    <ProjectCard project={proj} />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </BlurFade>
        ))}
        {/* {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <Dialog>
              <DialogTrigger>
                <img
                  className="mb-4 size-full rounded-lg object-contain cursor-pointer hover:scale-105 transition-all"
                  src={imageUrl}
                  alt={`Random stock image ${idx + 1}`}
                />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </BlurFade>
        ))} */}
      </div>
    </section>
  );
}
