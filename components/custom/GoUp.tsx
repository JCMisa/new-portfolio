import { ChevronUpIcon } from "lucide-react";
import Link from "next/link";

const GoUp = () => {
  return (
    <Link
      href={"#top"}
      className="bg-primary p-2 w-10 h-10 rounded-full shadow-md fixed bottom-3 right-3 flex items-center justify-center scale-100 hover:scale-90 transition-all cursor-pointer"
      aria-label="Scroll to top"
      type="button"
    >
      <ChevronUpIcon className="size-5" />
    </Link>
  );
};

export default GoUp;
