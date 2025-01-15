import { ReactNode } from "react";

import { Typography } from "@mui/material";

import LargeImage from "../components/LargeImage";
import RepositoryButton from "../components/RepositoryButton";

import mercedesSanduThumbnail from "../assets/images/designs/my-site.webp";
import csThesisSite from "../assets/images/designs/cs-thesis-site.webp";

export interface Design {
  title: string;
  dates: string;
  organization: string;
  description: string;
  tags: string[];
  navTo: string;
  thumbnail: string;
  mxrkdownUrl?: string;
  display: boolean;
  content?: ReactNode;
}

export const designs: Record<string, Design> = {
  "mercedes-sandu": {
    title: "mercedessandu.com",
    dates: "ongoing",
    organization: "mercedes sandu",
    description: "my personal website showcasing my various projects.",
    tags: ["desktop", "mobile"],
    navTo: "mercedes-sandu",
    thumbnail: mercedesSanduThumbnail,
    display: true,
    content: (
      <>
        <Typography></Typography>
        <LargeImage
          src={csThesisSite}
          alt="the design for my single-page website outlining my computer science research"
          fullWidth
        />
      </>
    ),
  },
  "cs-thesis-site": {
    title: "cs thesis site",
    dates: "may 2024",
    organization: "mercedes sandu",
    description:
      "a website showcasing my work on my computer science master's thesis.",
    tags: ["desktop"],
    navTo: "cs-thesis-site",
    thumbnail: csThesisSite,
    display: true,
    content: (
      <>
        <Typography></Typography>
        <LargeImage
          src={csThesisSite}
          alt="the design for my single-page website outlining my computer science research"
          fullWidth
        />
        <RepositoryButton name="figma" url="" type="figma" />
      </>
    ),
  },
};
