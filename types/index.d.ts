declare interface ProjectType {
  id: number;
  title: string;
  des: string;
  img?: string;
  category: string[];
  github?: string;
  live?: string;
}

declare interface WorkExperienceType {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}
