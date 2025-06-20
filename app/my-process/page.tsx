import { TypingAnimation } from "@/components/magicui/typing-animation";
import { approaches } from "@/constants";
import ProcessCard from "./_components/ProcessCard";

const MyProcessPage = () => {
  return (
    <div className="p-10 md:px-14 lg:px-20 sm:py-28 lg:py-40 w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-6xl font-bold text-center">
          The Blueprint to Brilliant:{" "}
          <span className="text-primary">My Development Process</span>
        </h1>
        <TypingAnimation
          startOnView={true}
          className="text-lg lg:text-xl text-muted-foreground text-center"
        >
          Discover the structured workflow that ensures every project I
          undertake is built for performance, scalability, and user delight.
        </TypingAnimation>
      </div>
      <div className="w-full flex flex-wrap items-center justify-center gap-5 mt-10 space-y-5">
        {approaches.map((approach) => (
          <ProcessCard
            key={approach.name}
            name={approach.name}
            body={approach.body}
            tag={approach.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProcessPage;
