"use client";

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
import { useState, useMemo } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDebounce } from "@/lib/hooks/use-debounce";

const higherHeight = [
  9, 1, 17, 11, 3, 13, 5, 15, 23, 25, 27, 19, 7, 29, 31, 21,
];

export function ProjectsGallery() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 300); // 300ms debounce

  // Get unique categories from all projects
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    projects.forEach((project) => {
      project.category.forEach((cat) => categorySet.add(cat));
    });
    return Array.from(categorySet).sort();
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter((project) =>
      project.category.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section id="photos">
      <div className="my-6">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {selectedCategory
                ? selectedCategory
                : "Select a category to filter..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput
                placeholder="Search categories..."
                value={searchValue}
                onValueChange={setSearchValue}
              />
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {categories
                  .filter((category) =>
                    category
                      .toLowerCase()
                      .includes(debouncedSearch.toLowerCase())
                  )
                  .map((category) => (
                    <CommandItem
                      key={category}
                      value={category}
                      onSelect={(currentValue) => {
                        setSelectedCategory(
                          currentValue === selectedCategory ? "" : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedCategory === category
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {category}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="columns-2 gap-4 sm:columns-3">
        {filteredProjects.map((proj: ProjectType, idx: number) => (
          <BlurFade key={proj.id} delay={0.25 + idx * 0.05} inView>
            <Dialog>
              <DialogTrigger>
                <div className="relative">
                  <span className="absolute top-3 left-3 text-primary">
                    {idx}
                  </span>
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
                </div>
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
