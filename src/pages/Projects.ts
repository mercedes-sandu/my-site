export interface Project {
  title: string;
  dates: string;
  organization: string;
  description: string;
  tags: string[];
  navTo: string;
  mxrkdownUrl: string;
  display: boolean;
}

export const projects: Record<string, Project> = {
  "pour-decisions": {
    title: "pour decisions",
    dates: "april 2024 to may 2024",
    organization: "progression mechanics game jam 2024",
    description: "",
    tags: ["c#", "unity"],
    navTo: "pour-decisions",
    mxrkdownUrl: "",
    display: false,
  },
  "8-bit-gambit": {
    title: "8-bit gambit",
    dates: "november 2023 to december 2023",
    organization: "1-button game jam 2023",
    description: "",
    tags: ["c#", "unity"],
    navTo: "8-bit-gambit",
    mxrkdownUrl: "",
    display: false,
  },
  "non-negative-news": {
    title: "non-negative news",
    dates: "december 2023",
    organization: "comp_sci 392-0: rapid software prototyping",
    description: "",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "non-negative-news",
    mxrkdownUrl: "",
    display: false,
  },
  "gymcats": {
    title: "gymcats",
    dates: "november 2023",
    organization: "comp_sci 392-0: rapid software prototyping",
    description: "",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "gymcats",
    mxrkdownUrl: "",
    display: false,
  },
  "budgetbuddy": {
    title: "budgetbuddy",
    dates: "october 2023",
    organization: "comp_sci 392-0: rapid software prototyping",
    description: "",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "budgetbuddy",
    mxrkdownUrl: "",
    display: false,
  },
  "ocean-cleanup": {
    title: "ocean cleanup",
    dates: "april 2023 to may 2023",
    organization: "progression mechanics game jam 2023",
    description:
      "a low-poly 3d ocean exploration and cleanup game made for the 2023 progression mechanics game jam.",
    tags: ["c#", "unity"],
    navTo: "ocean-cleanup",
    mxrkdownUrl: "",
    display: true,
  },
  "catsat": {
    title: "catsat",
    dates: "march 2023 to present",
    organization: "computer science research",
    description:
      "a sat solver developed by dr. ian horswill that uses an optimized walksat algorithm to solve constraint problems and pseudoboolean constraint problems.",
    tags: ["catsat", "cs research", "c#", "imaginarium", "figma", "typescript", "react", "web dev"],
    navTo: "catsat",
    mxrkdownUrl: "",
    display: true,
  },
  "smart-context-stories": {
    title: "smart context stories",
    dates: "march 2023 to june 2023",
    organization:
      "comp_sci 338-0: practicum in intelligent information systems",
    description:
      "an openai google chrome extension that catches you up on the news you missed while you were busy.",
    tags: ["figma", "javascript", "openai", "react", "web dev"],
    navTo: "smart-context-stories",
    mxrkdownUrl: "",
    display: true,
  },
  "zendog": {
    title: "zendog",
    dates: "february 2023 to march 2023",
    organization: "comp_sci 394-0: agile software development",
    description:
      "a webapp allowing dog owners to connect with experts and receive curated content.",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "zendog",
    mxrkdownUrl: "",
    display: true,
  },
  "dininginformant": {
    title: "dininginformant",
    dates: "january 2023 to february 2023",
    organization: "comp_sci 394-0: agile software development",
    description:
      "a webapp that allows northwestern students to see wait times and menus for on-campus dining halls.",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "dininginformant",
    mxrkdownUrl: "",
    display: true,
  },
  "when-the-devil-takes-hold": {
    title: "when the devil takes hold",
    dates: "january 2023 to march 2023",
    organization: "comp_sci 377-0: game development studio",
    description:
      "a 2d pixel puzzle game where you solve murderous puzzles to appease a demon, all while trying to escape his wrath.",
    tags: ["c#", "unity"],
    navTo: "when-the-devil-takes-hold",
    mxrkdownUrl: "",
    display: true,
  },
  "riverswood-manor": {
    title: "riverswood manor",
    dates: "november 2022 to december 2022",
    organization: "comp_sci 376-0: game design and development",
    description:
      "a 3d escape room game where you play as a butler trying to escape a haunted mansion.",
    tags: ["c#", "unity"],
    navTo: "riverswood-manor",
    mxrkdownUrl: "",
    display: true,
  },
  "we-three-witches": {
    title: "we three witches",
    dates: "november 2022",
    organization: "comp_sci 376-0: game design and development",
    description:
      "a 2d pixel platformer game where you play as one of three witches fighting ai enemy monsters.",
    tags: ["c#", "unity"],
    navTo: "we-three-witches",
    mxrkdownUrl: "",
    display: true,
  },
  "papas-what-is-going-on-eria": {
    title: "papa's what-is-going-on-eria",
    dates: "october 2022",
    organization: "comp_sci 376-0: game design and development",
    description:
      "a cooking flash game where you fulfill restaurant orders as ingredients gradually become corrupted and unusable.",
    tags: ["c#", "unity"],
    navTo: "papas-what-is-going-on-eria",
    mxrkdownUrl: "",
    display: true,
  },
  "songlybot": {
    title: "songlybot",
    dates: "july 2022 to august 2022",
    organization: "overture games",
    description:
      "a discord bot created for the official overture games discord server developed to make the server more interactive and fun.",
    tags: ["discord api", "python"],
    navTo: "songlybot",
    mxrkdownUrl: "",
    display: true,
  },
  "intervallic": {
    title: "intervallic",
    dates: "june 2022 to october 2023",
    organization: "overture games",
    description:
      "a video game where you can use your instrument to control an alien robot cat as it navigates the world through music.",
    tags: ["c#", "unity"],
    navTo: "intervallic",
    mxrkdownUrl: "/intervallic.mxr",
    display: true,
  },
  "imaginarium": {
    title: "imaginarium",
    dates: "march 2022 to june 2024",
    organization: "computer science research",
    description:
      "a language developed by dr. ian horswill to generate just about anything you could imagine.",
    tags: ["cs research", "c#", "imaginarium", "unity"],
    navTo: "imaginarium",
    mxrkdownUrl: "",
    display: true,
  },
  "polygonal-folding": {
    title: "polygonal folding",
    dates: "january 2021 to june 2023",
    organization: "mathematics research",
    description:
      "mathematics research done with dr. shuyi weng in discrete geometry exploring the affine dependence of vertices in polygonal cap curves.",
    tags: ["latex", "math research", "mathematica"],
    navTo: "polygonal-folding",
    mxrkdownUrl: "",
    display: true,
  },
};

export const tags = [
  "blender",
  "catsat",
  "cs research",
  "c#",
  "discord api",
  "figma",
  "imaginarium",
  "javascript",
  "latex",
  "mathematica",
  "math research",
  "openai",
  "python",
  "react",
  "typescript",
  "unity",
  "web dev",
];
