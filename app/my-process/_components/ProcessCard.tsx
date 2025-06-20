import { EvervaultCard, Icon } from "./EvervaultCard";

const ProcessCard = ({
  name,
  body,
  tag,
}: {
  name: string;
  body: string;
  tag: string;
}) => {
  return (
    <div className="border border-primary flex flex-col items-start mx-auto p-4 relative h-full max-w-sm">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 " />

      <EvervaultCard
        text={name}
        className="bg-white/20 dark:bg-black/20 rounded-lg"
      />

      <h2 className=" mt-4 text-sm font-light h-32">{body}</h2>
      <p className="text-sm border font-light border-primary rounded-full mt-4 px-2 py-0.5">
        {tag}
      </p>
    </div>
  );
};

export default ProcessCard;
