import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-primary">Hello</p>
      <div className="min-h-32 max-h-32 min-w-32 max-w-32 bg-dark-100 dark:bg-light-100" />
      <Button>Click me</Button>
      <ModeToggle />
      <Image src={"/jcm-logo.svg"} alt="logo" width={100} height={100} />
    </div>
  );
}
