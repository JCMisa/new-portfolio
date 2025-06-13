/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

// reviews from linkedin and other social media apps
const reviews = [
  {
    id: 1,
    name: "Creds",
    username: "@personal-portfolio1",
    body: "Great achievement John carlo Misa! You have hit a great milestone! Keep aiming for the highest and reaching for the stars! We are here to applaud your extraordinary efforts and celebrate with you! 🥳🥳🥳",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    id: 2,
    name: "GreatStack 🎓",
    username: "@netflix-clone1",
    body: "Awesome job! John 👏 Loved it. Keep up the great work.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id: 3,
    name: "Krishna",
    username: "@netflix-clone2",
    body: "Like it 👏👏",
    img: "https://avatar.vercel.sh/john",
  },
  {
    id: 4,
    name: "Soumya",
    username: "@netflix-clone3",
    body: "Nice work 👍",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    id: 5,
    name: "GreatStack 🎓",
    username: "@dictionairy1",
    body: "Congratulations on launching dictionAIry John Carlo Misa! Excited to see how dictionAIry evolves! 🚀",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id: 6,
    name: "Malavika",
    username: "@dictionairy2",
    body: "Have you tried integrating different APIs into your projects, and what challenges did you face?",
    img: "https://avatar.vercel.sh/john",
  },
  {
    id: 7,
    name: "JavaScript Mastery",
    username: "@curatech1",
    body: "Well done, John! Glad you enjoyed the tutorial! 🔥",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    id: 8,
    name: "JavaScript Mastery",
    username: "@applceclone1",
    body: "Amazing work! Well done, John - thanks for recommending us 🙌",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id: 9,
    name: "JavaScript Mastery",
    username: "@animated-portfolio1",
    body: "Well done, John! 🔥",
    img: "https://avatar.vercel.sh/john",
  },
  {
    id: 10,
    name: "JavaScript Mastery",
    username: "@aora1",
    body: "Well done! 🔥",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    id: 11,
    name: "JavaScript Mastery",
    username: "@ignite1",
    body: "Well done for completing this project! 🔥",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id: 12,
    name: "Jaffer",
    username: "@techtrail1",
    body: "The concept of personalized learning powered by AI is truly revolutionary, especially with the ability to generate custom reviewers for students.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    id: 13,
    name: "Jaffer",
    username: "@techtrail2",
    body: "John Carlo Misa Great insights, ! The prompt engineering techniques you're using with the Gemini AI model are really solid for ensuring the content is both relevant and tailored.",
    img: "https://avatar.vercel.sh/jack",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function ProjectsOverview() {
  return (
    <div className="relative flex h-[50rem] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
