/* eslint-disable @next/next/no-img-element */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function ProjectCard({
  project,
  className,
}: {
  project: ProjectType;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        // light styles
        "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <CardHeader>
        <Lens defaultPosition={{ x: 260, y: 150 }}>
          {/* <img
            src={project.img || "/empty-img.png"}
            alt="image placeholder"
            width={500}
            height={500}
          /> */}
          <Image
            src={project.img || "/empty-img.png"}
            alt={`${project.title} project image`}
            width={500}
            height={500}
            priority={false}
            quality={85}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription>{project.des}</CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        {project?.github ? (
          <Button asChild>
            <Link href={project.github} target="_blank">
              Github Link
            </Link>
          </Button>
        ) : (
          <Button className="line-through" disabled>
            Github Link
          </Button>
        )}

        {project?.live ? (
          <Button variant="secondary" asChild>
            <Link href={project.live} target="_blank">
              View Live
            </Link>
          </Button>
        ) : (
          <Button variant="secondary" className="line-through" disabled>
            View Live
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
