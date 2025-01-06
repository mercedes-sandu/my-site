import { ReactNode } from "react";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import { ItalicText } from "../components/StyledComponents";
import { InlineLink } from "../components/StyledComponents";
import LargeImage from "../components/LargeImage";
import Features from "../components/Features";
import RepositoryButton from "../components/RepositoryButton";
import Media from "../components/Media";
import CodeSnippet from "../components/CodeSnippet";
import Awards from "../components/Awards";

import nonNegativeNews from "../assets/images/projects/nonnegativenews design.webp";
import gymCats from "../assets/images/projects/gymcats design.webp";
import budgetBuddy from "../assets/images/projects/budget buddy designs.webp";
import oceanCleanupTitle from "../assets/images/projects/ocean cleanup title.webp";
import oceanCleanupInstructions from "../assets/images/projects/ocean cleanup instructions.webp";
import oceanCleanupScreenshotOne from "../assets/images/projects/ocean cleanup area 1.webp";
import oceanCleanupScreenshotTwo from "../assets/images/projects/ocean cleanup area 2.webp";
import oceanCleanupShop from "../assets/images/projects/ocean cleanup shop.webp";
import oceanCleanupAssets from "../assets/images/projects/ocean cleanup assets.webp";
import smartContextScreenshotOne from "../assets/images/projects/smart context 1.webp";
import smartContextScreenshotTwo from "../assets/images/projects/smart context 2.webp";
import zenDogLogo from "../assets/images/projects/zendog.webp";
import zenDogScreenshots from "../assets/images/projects/zendog screenshots.webp";
import diningInformant from "../assets/images/projects/dininginformant.webp";
import wtdthTitle from "../assets/images/projects/wtdth title.webp";
import wtdthInstructions from "../assets/images/projects/wtdth instructions.webp";
import wtdthControls from "../assets/images/projects/wtdth controls.webp";
import wtdthScreenshotOne from "../assets/images/projects/wtdth 1.webp";
import wtdthScreenshotTwo from "../assets/images/projects/wtdth 2.webp";
import wtdthScreenshotThree from "../assets/images/projects/wtdth 3.webp";
import wtdthScreenshotFour from "../assets/images/projects/wtdth 4.webp";
import riverswoodTitle from "../assets/images/projects/riverswood title.webp";
import riverswoodOne from "../assets/images/projects/riverswood 1.webp";
import riverswoodTwo from "../assets/images/projects/riverswood 2.webp";
import riverswoodThree from "../assets/images/projects/riverswood 3.webp";
import riverswoodFour from "../assets/images/projects/riverswood 4.webp";
import riverswoodFive from "../assets/images/projects/riverswood 5.webp";
import weThreeWitchesImage from "../assets/images/projects/we three witches title.webp";
import weThreeWitchesCharacterSelection from "../assets/images/projects/we three witches character select.webp";
import weThreeWitchesGameplay from "../assets/images/projects/we three witches gameplay.webp";
import papasImage from "../assets/images/projects/papas what is going on eria.webp";
import orderReceipt from "../assets/images/projects/order receipt.webp";
import cooker from "../assets/images/projects/cooker.webp";
import assembler from "../assets/images/projects/assembler.webp";
import sodaMachine from "../assets/images/projects/soda machine.webp";
import songlyBotImage from "../assets/images/projects/songlybot.webp";
import intervallicCoverImage from "../assets/images/projects/intervallic-cover.webp";
import imaginariumImage from "../assets/images/projects/imaginarium.webp";
import imaginariumRelationshipsImage from "../assets/images/projects/relationships.webp";
import { imaginariumCode } from "./CodeSnippets";
import jmm from "../assets/pdfs/jmm.pdf";
import polygonalFoldingImage from "../assets/images/projects/polygonal folding.webp";

export interface Project {
  title: string;
  dates: string;
  organization: string;
  description: string;
  tags: string[];
  navTo: string;
  mxrkdownUrl: string;
  display: boolean;
  content?: ReactNode;
}

export const projects: Record<string, Project> = {
  catsat: {
    title: "catsat",
    dates: "march 2023 to present",
    organization: "computer science research",
    description:
      "a sat solver developed by dr. ian horswill that uses an optimized walksat algorithm to solve constraint problems and pseudoboolean constraint problems.",
    tags: [
      "catsat",
      "cs research",
      "c#",
      "imaginarium",
      "figma",
      "typescript",
      "react",
      "web dev",
    ],
    navTo: "catsat",
    mxrkdownUrl: "",
    display: false,
  },
  "pour-decisions": {
    title: "pour decisions",
    dates: "april 2024 to may 2024",
    organization: "progression mechanics game jam 2024",
    description:
      "a narrative, dialogue-based game about a decommissioned android and a homesick bartender.",
    tags: ["c#", "unity"],
    navTo: "pour-decisions",
    mxrkdownUrl: "",
    display: false,
  },
  "8-bit-gambit": {
    title: "8-bit gambit",
    dates: "november 2023 to december 2023",
    organization: "1-button game jam 2023",
    description:
      "a game where you use a single button to destroy your opponent's chess pieces across multiple levels.",
    tags: ["c#", "unity"],
    navTo: "8-bit-gambit",
    mxrkdownUrl: "",
    display: false,
  },
  "non-negative-news": {
    title: "non-negative news",
    dates: "december 2023",
    organization: "comp_sci 392-0: rapid software prototyping",
    description:
      "a webapp that provides users with positive news stories to counteract the negativity in the media.",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "non-negative-news",
    mxrkdownUrl: "",
    display: true,
    content: (
      <>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "non-negative news" was the third and last project my team worked on
          in comp_sci 392. for this project, we had to quickly come up with an
          app idea, pitch it within the first week of design, and begin
          development. we decided to make a webapp that displayed positive news
          stories for users to read and share with their friends. the idea was
          to counteract the negativity in the media and provide a space for
          users to read uplifting news stories. however, we discovered that very
          basic sentiment analysis is not enough to determine if a news story is
          positive or negative, so we pivoted and hilariously renamed the app to
          "non-negative news" to reflect this change.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          we came up with the app idea, a figma mockup, and a list of user
          stories. i created and iterated upon the figma mockups and helped
          implement the frontend aspects of the webapp. i also helped set up
          sentiment analysis using vader as i had a bit of experience doing that
          in a machine learning class, comp_sci 349.
        </Typography>
        <Typography variant="projectP">
          the webapp was developed using react, firebase, and mui. majority of
          the languages used were javascript, css, and html. below are some
          screenshots of the webapp.
        </Typography>
        <LargeImage
          src={nonNegativeNews}
          alt="the login page, onboarding page, home page, and profile page of the webapp"
          description="the login page, onboarding page, home page, and profile page of the webapp"
        />
        <Features
          features={[
            {
              description: "signing in with a google account",
              id: 0,
            },
            {
              description:
                "a signup form where the user fills in what kinds of stories they want to see (business, entertainment, general, health, science, sports, or technology)",
              id: 1,
            },
            {
              description:
                "a home page that displays the stories and has a refresh page feature",
              id: 2,
            },
            {
              description: "a bookmarking feature to save stories for later",
              id: 3,
            },
            {
              description:
                "a sharing feature to share stories with friends on various social media",
              id: 4,
            },
            {
              description:
                "a profile page that displays the user's saved stories and preferred topics",
              id: 5,
            },
          ]}
        />
        <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/392-f23/HappyHeadlines"
            name="non-negative news (formerly happyheadlines)"
          />
        </Box>
      </>
    ),
  },
  gymcats: {
    title: "gymcats",
    dates: "november 2023",
    organization: "comp_sci 392-0: rapid software prototyping",
    description:
      "a webapp that matches users with workout buddies based on their preferences and schedules.",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "gymcats",
    mxrkdownUrl: "",
    display: true,
    content: (
      <>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "gymcats" was the second project my team worked on in comp_sci 392.
          for this project, we had to quickly come up with an app idea, pitch it
          within the first week of design, and begin development. we decided to
          make a webapp that was like a dating app but for finding workout
          buddies. the app would match users (targeted toward northwestern
          students) based on their workout preferences, skill level, and
          schedules.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          we came up with the app idea, a figma mockup, and a list of user
          stories. i created and iterated upon the figma mockups and helped
          implement the frontend aspects of the webapp.
        </Typography>
        <Typography variant="projectP">
          the webapp was developed using react, firebase, and mui. majority of
          the languages used were javascript, css, and html. below are some
          screenshots of the webapp.
        </Typography>
        <LargeImage
          src={gymCats}
          alt="the login page, onboarding page, home page, friends page, and profile pages of the webapp"
          description="the login page, onboarding page, home page, friends page, and profile pages of the webapp"
        />
        <Features
          features={[
            {
              description: "signing in with a google account",
              id: 0,
            },
            {
              description:
                "a signup form where the user fills in personal information related to their school, demographics, experience level, workout preferences, and goals, as well as what they prefer in a workout buddy",
              id: 1,
            },
            {
              description:
                "a home page that displays the user's workout buddy matches to be accepted or declined",
              id: 2,
            },
            {
              description:
                "a friends page that shows the user's accepted workout buddies as well as incoming friend requests",
              id: 3,
            },
            {
              description:
                "a profile page where the user can edit their personal details and workout buddy preferences",
              id: 4,
            },
            {
              description:
                "a notification bubble that appears on the navigation bar when the user has a new friend request or a new workout buddy match",
              id: 5,
            },
          ]}
        />
        <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/392-f23/GymCats"
            name="gymcats"
          />
        </Box>
      </>
    ),
  },
  budgetbuddy: {
    title: "budgetbuddy",
    dates: "october 2023",
    organization: "comp_sci 392-0: rapid software prototyping",
    description:
      "a webapp for users to budget their money and track their expenses.",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "budgetbuddy",
    mxrkdownUrl: "",
    display: true,
    content: (
      <>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "budgetbuddy" was the first project my team worked on in comp_sci 392.
          for this project, we had to quickly come up with an app idea, pitch it
          within the first week, and begin development. we decided to make a
          webapp that would help people track their spending and manage their
          budget, as well as get some insights about their spending. we had
          approximately three weeks to complete this project.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          we came up with the app idea, a figma mockup, and a list of user
          stories. i created and iterated upon the figma mockups and helped
          implement the frontend aspects of the webapp.
        </Typography>
        <Typography variant="projectP">
          the webapp was developed using react, firebase, and mui. majority of
          the languages used were javascript, css, and html. below are some
          screenshots of the webapp.
        </Typography>
        <LargeImage
          src={budgetBuddy}
          alt="the login page, setup page, home page, navigation sidebar, and insights page of the webapp"
          description="the login page, setup page, home page, navigation sidebar, and insights page of the webapp"
        />
        <Features
          features={[
            {
              description: "signing in with a google account",
              id: 0,
            },
            {
              description:
                "a signup form where the user fills in personal information related to their monthly income, monthly budget, and how they would like to split up their budget into categories",
              id: 1,
            },
            {
              description:
                "a home page that displays the user's budget and spending in a donut chart and category breakdown",
              id: 2,
            },
            {
              description:
                "a form to add a new transaction to the user's spending",
              id: 3,
            },
            {
              description:
                "an insights page that shows a line graph of the user's spending over a particular month and a recommendation of how much to spend a day to stay within budget",
              id: 4,
            },
            {
              description:
                "a silly mascot that has clippy's eyes on a dollar sign whose expression changes as you get closer and closer to spending your full budget",
              id: 5,
            },
          ]}
        />
        <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/392-f23/BudgetBuddy"
            name="budgetbuddy"
          />
        </Box>
      </>
    ),
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
    content: (
      <>
        <LargeImage
          src={oceanCleanupTitle}
          alt="the start menu for the game"
          description="the start menu for the game"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "ocean cleanup" is a game my team made for the 2023 progression
          mechanics game jam hosted at northwestern. you control a cute low-poly
          submarine that must explore the ocean and collect trash to clean it
          up. as you collect trash, you gain points which are expendable on ship
          upgrades. we had about eight weeks to complete this project.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          on this project, i worked as both a 3d artist and a programmer. as an
          artist, i created all of the 3d models (aside from the terrain, which
          was created using a unity package which procedurally generates
          low-poly terrain) and their respective materials using blender. as
          shown in a screenshot below, i made
        </Typography>
        <List
          sx={{
            listStyleType: "disc",
            pl: 6,
            mb: 2,
            "&.MuiList-root": {
              pt: 0,
              pb: 0,
            },
          }}
        >
          <ListItem sx={{ display: "list-item", padding: "0px" }}>
            <ListItemText>
              <Typography variant="body1" sx={{ textIndent: "0px" }}>
                the submarine (the propellers rotate!),
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item", padding: "0px" }}>
            <ListItemText>
              <Typography variant="body1" sx={{ textIndent: "0px" }}>
                the various plastics (bottles, cups, bowls, lids, balloons, and
                utensils), and
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item", padding: "0px" }}>
            <ListItemText>
              <Typography variant="body1" sx={{ textIndent: "0px" }}>
                the aquatic plants (corals, kelps, and mushrooms).
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          as a programmer, i was mainly responsible for coding the plastics,
          level manager, shop, and ui. this was my first experience with a game
          jam, so i underestimated how quickly time would fly (especially during
          the school year). i would have loved to have a lot more mechanics and
          areas in the game, but i'm still proud fo what we were able to
          accomplish in the time allotted. i'm looking forward to finishing the
          project some day!
        </Typography>
        <Typography variant="projectP">
          the game was made using unity and c#.
        </Typography>
        <Features
          features={[
            {
              description:
                "custom 3d models for the submarine (with moving components), plastics, and aquatic plants",
              id: 0,
            },
            {
              description: "two levels and areas of exploration",
              id: 1,
            },
            {
              description:
                "a third-person controller that allows the player to control the direction and yaw/pitch/roll of the vessel",
              id: 2,
            },
            {
              description:
                "in-game ui overlay to see how many pieces of plastic and how much currency you've collected",
              id: 3,
            },
            {
              description:
                "a ui overla shop to purchase upgrades (speed and collision radius) with in-game currency",
              id: 4,
            },
            {
              description:
                "a level control script that detects when the player has completed a level (collected all pieces of plastic), and advances the player to the next level",
              id: 5,
            },
          ]}
        />
        <Typography variant="projectP" sx={{ mt: 4 }}>
          below are some screenshots for the game.
        </Typography>
        <LargeImage
          src={oceanCleanupInstructions}
          alt="the instructions screen for the game"
          description="the instructions screen for the game"
        />
        <LargeImage
          src={oceanCleanupScreenshotOne}
          alt="level one"
          description="level one"
        />
        <LargeImage
          src={oceanCleanupScreenshotTwo}
          alt="level two"
          description="level two"
        />
        <LargeImage
          src={oceanCleanupShop}
          alt="the in-game shop"
          description="the in-game shop"
        />
        <LargeImage
          src={oceanCleanupAssets}
          alt="the assets i created in blender"
          description="the assets i created in blender"
        />
        <Box sx={{ mt: 2, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/mercedes-sandu/Ocean-Cleanup"
            name="ocean cleanup"
          />
        </Box>
      </>
    ),
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
    content: (
      <>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "smart context stories" is a google chrome extension that uses
          openai's gpt-3 api and new york times' api to generate a summary of
          the news you missed on recurring issues while you were busy. the
          project was made for comp_sci 338, where we were tasked with creating
          a project that used ai in some way that benefited media production or
          consumption.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          when the user opens a new york times article on a recurring issue
          (i.e., covid-19, the presidential election, the stock market, etc.)
          and runs the extension, the extension will query a database for the
          last time the user read on this topic. if the user has never read
          about this topic before, the extension will generate a summary of the
          most important points overall, otherwise it will only generate a
          summary of events that have happened since the last date of reading.
          the program then queries the new york times api for the most relevant
          articles in the specified time frame on that topic and generates a
          four-bullet-point summary of the most important points. if the user is
          unsatisfied with the results, they can be regenerated via a button,
          and the user can also see the articles/sources used to generate the
          summary. i worked as the frontend developer for the team, and
          programmed primarily with the new york times api.
        </Typography>
        <Typography variant="projectP">
          the webapp was developed using react, firebase, and mui. majority of
          the languages used were javascript, css, and html. for more details
          and specific instructions, please see the{" "}
          <InlineLink href="https://github.com/patrickhoey20/SmartContextStories/blob/main/README.md">
            README file
          </InlineLink>{" "}
          for the project. below are some screenshots of the extension.
        </Typography>
        <LargeImage
          src={smartContextScreenshotOne}
          alt="the bullet point summary of an article about covid-19"
          description="the bullet point summary of an article about covid-19"
        />
        <LargeImage
          src={smartContextScreenshotTwo}
          alt="the sources of the articles used to generate the summary"
          description="the sources of the articles used to generate the summary"
        />
        <Features
          features={[
            {
              description: "signing in with a username",
              id: 0,
            },
            {
              description: "a loading screen while api calls are being made",
              id: 1,
            },
            {
              description:
                "topic identification and categorization via openai api",
              id: 2,
            },
            {
              description: "article queries using new york times api",
              id: 3,
            },
            {
              description: "summary of articles queried in four bullet points",
              id: 4,
            },
            {
              description: "list of sources pointing to articles used",
              id: 5,
            },
            {
              description: "an option to regenerate the summary",
              id: 6,
            },
          ]}
        />
        <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/patrickhoey20/SmartContextStories"
            name="smart context stories"
          />
        </Box>
      </>
    ),
  },
  zendog: {
    title: "zendog",
    dates: "february 2023 to march 2023",
    organization: "comp_sci 394-0: agile software development",
    description:
      "a webapp allowing dog owners to connect with experts and receive curated content.",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "zendog",
    mxrkdownUrl: "",
    display: true,
    content: (
      <>
        <LargeImage
          src={zenDogLogo}
          alt="the zendog sign-in screen"
          description="the zendog sign-in screen"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "zendog" was the second project my team worked on in comp_sci 394. for
          this project, we partnered up with a team of clients from
          northwestern's mpd 405 class. the clients were a group of students who
          were interested in developing a webapp that would help dog owners
          receive and explore personalized content to aid them in improving
          their dog's behavior and training. we had five weeks to complete this
          project.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          the client team provided us with the app idea, a figma mockup, and a
          list of user stories. we worked together to create a sprint plan week
          by week and had weekly meetings to discuss what needed to be done and
          the plan of action. my personal role in the project was to communicate
          with the clients about the development team's progress and to
          primarily implement the frontend aspects of the app. i implemented the
          signup form and aided other developers with the ui/ux for other pages
          and components. i also worked on setting up the databases in firebase,
          and set up end-to-end as well as unit testing for the app before
          delivering it to the clients at the end of the quarter.
        </Typography>
        <Typography variant="projectP">
          the webapp was developed using react, firebase, and mui. majority of
          the languages used were javascript, css, and html. below are some
          screenshots of the webapp.
        </Typography>
        <LargeImage
          src={zenDogScreenshots}
          alt="the onboarding form and home screen of the webapp"
          description="the onboarding form and home screen of the webapp"
        />
        <Features
          features={[
            {
              description: "signing in with a google account",
              id: 0,
            },
            {
              description:
                "a signup form where the user fills in personal information as well as their dog's information, issues, and training preferences",
              id: 1,
            },
            {
              description:
                "a home page where the user receives a daily tip and can explore the different registered experts, filtered by dog issue (i.e., barking, crying, etc.)",
              id: 2,
            },
            {
              description:
                "expert pages which display their information, contact points, and videos available to watch in the webapp",
              id: 3,
            },
            {
              description:
                "on the expert pages, users can view the expert's content (youtube videos provided)",
              id: 4,
            },
            {
              description:
                "storage and retrieval of both user and expert information via firebase databases",
              id: 5,
            },
          ]}
        />
        <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/394-w23/DogSpace"
            name="zendog"
          />
        </Box>
      </>
    ),
  },
  dininginformant: {
    title: "dininginformant",
    dates: "january 2023 to february 2023",
    organization: "comp_sci 394-0: agile software development",
    description:
      "a webapp that allows northwestern students to see wait times and menus for on-campus dining halls.",
    tags: ["figma", "javascript", "react", "web dev"],
    navTo: "dininginformant",
    mxrkdownUrl: "",
    display: true,
    content: (
      <>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "dininginformant" was the first project my team worked on in comp_sci
          394. for this project, we had to quickly come up with a webapp idea,
          pitch it within the first week, and begin development. we decided to
          make a webapp that would help first- and second-year students at
          northwestern see the wait time at various dining halls on campus,
          report their wait times and rating of the dining halls, and see the
          menus for each meal, daily. we had five weeks to complete this
          project.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          we came up with the app idea, a figma mockup, and a list of user
          stories. we worked together to create a sprint plan week by week and
          had weekly meetings to discuss what needed to be done and the plan of
          action. my personal role in the project was to demo the project
          weekly, to create and iterate upon the figma mockups, and to primarily
          implement the frontend aspects of the webapp. i entirely implemented
          the rating form and aided the other developers with the ui/ux for
          other pages and components. i also worked on setting up the databases
          in firebase, and set up end-to-end as well as unit testing for the app
          before delivering it by the middle of the quarter.
        </Typography>
        <Typography variant="projectP">
          the webapp was developed using react, firebase, and mui. majority of
          the languages used were javascript, css, and html. below are some
          screenshots of the webapp.
        </Typography>
        <LargeImage
          src={diningInformant}
          alt="the home page, menu page, and rating form of the webapp"
          description="the home page, menu page, and rating form of the webapp"
        />
        <Features
          features={[
            {
              description:
                "a home page where the user can see a card corresponding to every dining hall, featured meal items, the dining hall's star rating, and the current approximate wait time",
              id: 0,
            },
            {
              description:
                "a page where the user can see the menu of each meal being offered at every dining hall, with a tab for each meal (i.e., breakfast, lunch, dinner)",
              id: 1,
            },
            {
              description:
                "a form where users can report their experienced wait time and rating of the dining hall they went to",
              id: 2,
            },
            {
              description:
                "storage and retrieval of dining hall information (i.e., wait time, rating, etc.)",
              id: 3,
            },
            {
              description:
                "dineoncampus api calls to retrieve hall menus and cache them",
              id: 4,
            },
          ]}
        />
        <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/394-w23/DiningInformant"
            name="dininginformant"
          />
        </Box>
      </>
    ),
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
    content: (
      <>
        <LargeImage
          src={wtdthTitle}
          alt="the start menu for the game"
          description="the start menu for the game"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "when the devil takes hold" is a top-down puzzle and fighting game my
          team made in six weeks in comp_sci 377. you play as a girl who signed
          a pact with a demon to kill people for him in exchange for her life.
          if you do not do so fast enough, then the pact is breached and you
          must fight the demon for your life. thus, the game is split into two
          core game loops: one where the player is solving puzzles to murder
          npcs, and one where the player is fighting or trying to escape from
          the demon. you win the game by either completing all fo the puzzles or
          killing the demon, and you lose by dying to the demon.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          at the start of every level, a timer is displayed at the top of the
          screen. the player must complete the puzzle within this time, but
          killing an npc grants them a bit of extra time. if the timer runs out,
          the player is teleported to the fight sequence. at this point, the
          player can either fight to the death or find objects to hide behind,
          making the demon somehow forget their existence, teleporting the
          player back to the last puzzle they failed to complete. but, be
          careful! hiding penalizes the player by decreasing the time allowed to
          complete the puzzle they return to.
        </Typography>
        <Typography variant="projectP">
          the game was made using unity and c#.
        </Typography>
        <Features
          features={[
            {
              description: "seven different levels:",
              id: 0,
              subFeatures: [
                {
                  description:
                    "level one: kill the npcs by rotating the lasers being reflected from the mirrors",
                  id: 1,
                },
                {
                  description:
                    "level two: crush the npc by dropping a boulder on them from above",
                  id: 2,
                },
                {
                  description:
                    "level three: find and kill the npc that is not a decoy",
                  id: 3,
                },
                {
                  description:
                    "level four: find the npc to kill in the unlit maze",
                  id: 4,
                },
                {
                  description:
                    "level five: crush the npc with a boulder by pushing it and avoiding other holes",
                  id: 5,
                },
                {
                  description:
                    "level six: find and kill the npc that is not a decoy in the dark",
                  id: 6,
                },
                {
                  description:
                    "level seven: use your single-use lighter to detonate a string of bombs and kill all the npcs",
                  id: 7,
                },
              ],
            },
            {
              description:
                "a dynamic timer system that allows for adding and subtracting time",
              id: 8,
            },
            {
              description:
                "point and click projectile system with limited ammo",
              id: 9,
            },
            {
              description:
                "player data saving across scenes (ammo, health, timer, etc.)",
              id: 10,
            },
            {
              description:
                "enemy script with demon movement, pathfinding projectiles, and custom behavior for when the player hides",
              id: 11,
            },
            {
              description: "breakable pots for replenishing ammo",
              id: 12,
            },
            {
              description: "instructions and control screens",
              id: 13,
            },
            {
              description:
                "sound effects for various game events such as taking damage, dealing damage, and dying",
              id: 14,
            },
          ]}
        />
        <Typography variant="projectP" sx={{ mt: 4 }}>
          below are some screenshots for the game.
        </Typography>
        <LargeImage
          src={wtdthInstructions}
          alt="an order receipt for the game"
          description="an order receipt for the game"
        />
        <LargeImage
          src={wtdthControls}
          alt="the grill station where meat is cooked"
          description="the grill station where meat is cooked"
        />
        <LargeImage
          src={wtdthScreenshotOne}
          alt="the station where the burger is assembled with toppings and condiments"
          description="the station where the burger is assembled with toppings and condiments"
        />
        <LargeImage
          src={wtdthScreenshotTwo}
          alt="the soda machine where soda is poured into a cup"
          description="the soda machine where soda is poured into a cup"
        />
        <LargeImage
          src={wtdthScreenshotThree}
          alt="the soda machine where soda is poured into a cup"
          description="the soda machine where soda is poured into a cup"
        />
        <LargeImage
          src={wtdthScreenshotFour}
          alt="the soda machine where soda is poured into a cup"
          description="the soda machine where soda is poured into a cup"
        />
        <Box sx={{ mt: 2, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/mercedes-sandu/When-the-Devil-Takes-Hold"
            name="when the devil takes hold"
          />
        </Box>
      </>
    ),
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
    content: (
      <>
        <LargeImage
          src={riverswoodTitle}
          alt="the start menu for the game"
          description="the start menu for the game"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "riverswood manor" is a 3d game i made in two weeks for my final
          project in comp_sci 376. you play as a butler in a manor where the
          countess has been murdered by the count. you start in your room,
          hearing a scream and seeing a note being slipped under your door from
          the countess. from there, you must figure out how to escape the manor.
          after escaping the room through the painting on the wall, you enter
          the count's office, where you must solve a puzzle to unlock the hidden
          door in the bookcase. the game ends when you escape.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          there ar emultiple systems in play with this game, including cued game
          events, an interaction system to pick up and touch various objects,
          and a ui inventory system to store and view clues. the office scene
          requires the player to listen to audio cues played from a music box
          and find corresponding items in the room that make the same sounds.
          these objects are distinctly colored red, yellow, and green, matching
          the buttons on the wall by the fireplace to make a code. if the right
          code is entered, the player successfully escapes the manor.
        </Typography>
        <Typography variant="projectP">
          the game was made using unity and c#.
        </Typography>
        <Features
          features={[
            {
              description: "3d first-person player controller",
              id: 0,
            },
            {
              description:
                "a custom cursor in the center of the screen that changes when you can interact with an object",
              id: 1,
            },
            {
              description:
                "ui letters as clues, which can be stored in the player's inventory to be read again",
              id: 2,
            },
            {
              description:
                "particle systems and animated objects upon interaction",
              id: 3,
            },
            {
              description:
                "collision detection that cues certain game events (i.e., letters sliding in from under a door or carpet)",
              id: 4,
            },
            {
              description: "an inventory system to store and view clues",
              id: 5,
            },
            {
              description: "sound effects and music",
              id: 6,
            },
          ]}
        />
        <Typography variant="projectP" sx={{ mt: 4 }}>
          below are some screenshots for the game.
        </Typography>
        <LargeImage
          src={riverswoodOne}
          alt="the butler's bedroom"
          description="the butler's bedroom"
        />
        <LargeImage
          src={riverswoodTwo}
          alt="the letter from the countess"
          description="the letter from the countess"
        />
        <LargeImage
          src={riverswoodThree}
          alt="the inventory with stored clues"
          description="the inventory with stored clues"
        />
        <LargeImage
          src={riverswoodFour}
          alt="the count's office"
          description="the count's office"
        />
        <LargeImage
          src={riverswoodFive}
          alt="the fireplace in the count's office"
          description="the fireplace in the count's office"
        />
        <Box sx={{ mt: 2, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/mercedes-sandu/Riverswood-Manor"
            name="riverswood manor"
          />
        </Box>
      </>
    ),
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
    content: (
      <>
        <LargeImage
          src={weThreeWitchesImage}
          alt="the start menu for the game"
          description="the start menu for the game"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "we three witches" is a game i made in a week for one of the freestyle
          projects in comp_sci 376. you play as one of three witches, each with
          their own unique attacks, to fight off ai enemy monsters. the goal is
          to survive as long as possible.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          in terms of gameplay, it is pretty standard and basic as a 2d
          platformer due to only having a week to complete the project. i wanted
          some unique features, so i added character selection and a mana point
          system. each of the three witches has a basic projectile attack where
          the player can point and shoot in the direction where they want the
          projectile to fire, and a special magic attack that drains mana. the
          player's mana and health are displayed in a hud, and mana gradually
          replenishes with time.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          the enemies spawn at a set of random locations on the map, and use a*
          pathfinding to move toward the player, avoiding game objects labeled
          as obstacles. they then attack the player whenthey get within a close
          enough range, and their health bar is displayed above them. if time
          allows in the future, i would love to add more than one area to the
          game, have more unique abilities for the witches (such as melee
          attacks), and add more enemy types and bosses.
        </Typography>
        <Typography variant="projectP">
          the game was made using unity and c#.
        </Typography>
        <Features
          features={[
            {
              description: "character selection",
              id: 0,
            },
            {
              description:
                "a hud that incorporates a health point and mana system",
              id: 1,
            },
            {
              description:
                "ai enemies that use a* pathfinding to move toward the player, avoiding obstacles, once spawned in, and attack the player when in a close enough range",
              id: 2,
            },
            {
              description:
                "unlimited projectile attacks that fly toward the direction of the mouse pointer, and specialized magic attacks that drain mana",
              id: 3,
            },
            {
              description: "a game over screen when the player dies",
              id: 4,
            },
          ]}
        />
        <Typography variant="projectP" sx={{ mt: 4 }}>
          below are some screenshots for the game.
        </Typography>
        <LargeImage
          src={weThreeWitchesCharacterSelection}
          alt="the character selection screen for the game"
          description="the character selection screen for the game"
        />
        <LargeImage
          src={weThreeWitchesGameplay}
          alt="gameplay"
          description="gameplay"
        />
        <Box sx={{ mt: 2, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/mercedes-sandu/We-Three-Witches"
            name="we three witches"
          />
        </Box>
      </>
    ),
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
    content: (
      <>
        <LargeImage
          src={papasImage}
          alt="the start menu for the game"
          description="the start menu for the game"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          "papa's what-is-going-on-eria" is a game i made in a week for one of
          the freestyle projects in comp_sci 376. it is largely inspired by{" "}
          <InlineLink
            href="https://www.coolmathgames.com/0-papas-pizzeria"
            target="_blank"
          >
            papa's pizzeria
          </InlineLink>{" "}
          and other games in the franchise. you control a character in a
          top-down 2d kitchen, receiving randomized orders for burgers and soda.
          you must go to each station in the kitchen to receive and then make
          the order. the basic game loop is as follows:
        </Typography>
        <List
          sx={{
            listStyle: "decimal",
            pl: 6,
            mb: 2,
            "&.MuiList-root": {
              pt: 0,
              pb: 0,
            },
          }}
        >
          <ListItem sx={{ display: "list-item", padding: "0px" }}>
            <ListItemText>
              <Typography variant="body1" sx={{ textIndent: "0px" }}>
                go to the order counter to receive a ticket with all the order
                details
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item", padding: "0px" }}>
            <ListItemText>
              <Typography variant="body1" sx={{ textIndent: "0px" }}>
                go to the stove to prepare the meat that goes on the burger
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item", padding: "0px" }}>
            <ListItemText>
              <Typography variant="body1" sx={{ textIndent: "0px" }}>
                go to the cutting board to assemble the burger with all of the
                proper add-ons and condiments
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item", padding: "0px" }}>
            <ListItemText>
              <Typography variant="body1" sx={{ textIndent: "0px" }}>
                go to the soda machine to pour the correct soda into the cup
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem sx={{ display: "list-item", padding: "0px" }}>
            <ListItemText>
              <Typography variant="body1" sx={{ textIndent: "0px" }}>
                go to the lunch tray to serve the order
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          this process repeats over adn over until your time runs out, so the
          goal is to complete as many orders as possible and thus maximize your
          score.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          as you complete orders, you may notice something slightly odd
          happening. it seems that every time you complete an order, one of the
          ingredients randomly gets corrupted and you can no longer use it! the
          corrupted ingredients may still pop up on the order ticket, just try
          to carry on and ignore them.
        </Typography>
        <Typography variant="projectP">
          the game was made using unity and c#. for more details and specific
          instructions/controls please see the{" "}
          <InlineLink
            href="https://github.com/mercedes-sandu/Papas-What-Is-Going-On-Eria/blob/main/README.md"
            target="_blank"
          >
            readme file
          </InlineLink>{" "}
          for the game.
        </Typography>
        <Features
          features={[
            {
              description: "hand-drawn art using procreate",
              id: 0,
            },
            {
              description:
                "randomized generation of orders using dynamic loading of prefabs from the resources folder",
              id: 1,
            },
            {
              description:
                "an interaction system that allows ui interfaces to pop up when interacting with different kitchen stations",
              id: 2,
            },
            {
              description:
                "four different ui overlays for each station with specialized functionality",
              id: 3,
            },
            {
              description:
                "a click-move-and-drop system to assemble the burger by placing items exactly where you wish them to be",
              id: 4,
            },
            {
              description: "a timer that invokes the end condition",
              id: 5,
            },
          ]}
        />
        <Typography variant="projectP" sx={{ mt: 4 }}>
          below are some screenshots for the game.
        </Typography>
        <LargeImage
          src={orderReceipt}
          alt="an order receipt for the game"
          description="an order receipt for the game"
        />
        <LargeImage
          src={cooker}
          alt="the grill station where meat is cooked"
          description="the grill station where meat is cooked"
        />
        <LargeImage
          src={assembler}
          alt="the station where the burger is assembled with toppings and condiments"
          description="the station where the burger is assembled with toppings and condiments"
        />
        <LargeImage
          src={sodaMachine}
          alt="the soda machine where soda is poured into a cup"
          description="the soda machine where soda is poured into a cup"
        />
        <Box sx={{ mt: 2, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/mercedes-sandu/Papas-What-Is-Going-On-Eria"
            name="papa's what-is-going-on-eria"
          />
        </Box>
      </>
    ),
  },
  songlybot: {
    title: "songlybot",
    dates: "july 2022 to august 2022",
    organization: "overture games",
    description:
      "a discord bot created for the official overture games discord server developed to make the server more interactive and fun.",
    tags: ["discord api", "python"],
    navTo: "songlybot",
    mxrkdownUrl: "",
    display: true,
    content: (
      <>
        <LargeImage
          src={songlyBotImage}
          alt="songlybot discord profile"
          description="songlybot discord profile"
        />
        <Typography variant="projectP">
          songlybot is a small discord api python bot that i developed to help
          foster a community in the overture games discord server. i had a
          really fun time learning to use python and discord api to create this
          bot, as well as amazon web services to host it 24/7.
        </Typography>
        <Features
          features={[
            {
              description:
                "assigning yourself roles by reacting with specific emojis",
              id: 0,
            },
            {
              description:
                "restricting access to the server until new members have read the rules",
              id: 1,
            },
            {
              description:
                "multiplayer wordle (written in collaboration with a friend of mine)",
              id: 2,
            },
            {
              description: "a scoreboard for minigames",
              id: 3,
            },
            {
              description:
                "responding to certain keywords, for the sake of inside jokes",
              id: 4,
            },
          ]}
        />
      </>
    ),
  },
  intervallic: {
    title: "intervallic",
    dates: "june 2022 to october 2023",
    organization: "overture games",
    description:
      "a video game where you can use your instrument to control an alien robot cat as it navigates the world through music.",
    tags: ["c#", "unity"],
    navTo: "intervallic",
    mxrkdownUrl: "/intervallic.mxr",
    display: true,
    content: (
      <>
        <LargeImage
          src={intervallicCoverImage}
          alt="intervallic cover art"
          description="intervallic cover art"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          <ItalicText>intervallic</ItalicText> is{" "}
          <InlineLink href="https://www.overture.games/" target="_blank">
            overture games'
          </InlineLink>{" "}
          first title. the game itself is a 2d runner that allows users to play
          their instrument to control an alien-robot-space cat and navigate
          through a level, dodging obstacles and collecting records and samples.
          the notes that are played correspond to vertical movement of the cat.
          for example, playing up on a scale allows the cat to move vertically
          upward, and playing down on a scale moves the cat vertically downward.
          this way, by the end of a level, the user has played through an entire
          song. the game currently allows input from any instrument, midi
          device, as well as computer keyboard and mouse. you play as starburst,
          a nerdy music-lover working to explore strange planets with her
          companion robot cat (who the player controls with their instrument).
          as you continue playing, you make new friends and play more fun songs,
          restoring the planet of audius.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          at overture, i worked as a gameplay software developer and got
          promoted to lead frontend engineer. during my time there, i learned
          extensively about many other aspects of game development, such as art,
          music, design, marketing, and funding. as a software developer, i was
          primarily in charge of designing and implementing the main game
          mechanics as well as majority of the frontend aspects (ui/ux). in
          particular, i programmed things like player movement, the main menu
          and pause menu, collectibles, obstacles, and in-game ui. i also
          developed the following systems:
        </Typography>
        <Features
          features={[
            {
              description:
                "a key signature and note system to be used with player input and level management/building",
              id: 0,
            },
            {
              description:
                "an accuracy and statistics system to be use dfor live feedback during gameplay and musical practice reports",
              id: 1,
            },
            {
              description:
                "support for different input processing modes and game modes, such as rhythm mode",
              id: 2,
            },
            {
              description:
                "a level selector that displays player data and a level preview, for every available level",
              id: 3,
            },
            {
              description:
                "a level generator that takes a midi file as input and places necessary game objects (collectibles and other movement objects) in the correct places to create a level",
              id: 4,
            },
            {
              description: "an in-level ui vfx and sfx feedback system",
              id: 5,
            },
            {
              description: "a new card-based main menu",
              id: 6,
            },
            {
              description:
                "a campaign system with linear progression and custom ui menus",
              id: 7,
            },
          ]}
        />
        <Typography variant="projectP" sx={{ mt: 4, mb: 2 }}>
          as frontend lead, i was responsible for doing all ui/ux design and
          communicating regularly with the art team to get both game assets and
          ui assets designed, scoped, and completed on time according to sprints
          and deadlines. i spent a lot of time understanding the digital art
          process, how long it takes, and how to coordinate better between the
          team's artists and designers.
        </Typography>
        <Typography variant="projectP">
          working on <ItalicText>intervallic</ItalicText> was a great experience
          where i learned to work with a small team and undergo a fast-paced
          development process. i worked there my junior and senior years of
          university, leading up to the release of{" "}
          <ItalicText>intervallic</ItalicText> in early access on october 6th,
          2023. you see the game's steam page{" "}
          <InlineLink
            href="https://store.steampowered.com/app/2270460/Intervallic"
            target="_blank"
          >
            here
          </InlineLink>
          !
        </Typography>
        <Media
          media={[
            {
              description:
                "an announcement about our partnership with techstars",
              date: "09/11/2023",
              url: "https://www.linkedin.com/posts/overture-games_techstars-accelerator-startup-activity-7107063944556511232-kasi?utm_source=share&utm_medium=member_desktop",
              id: 0,
            },
            {
              description: "an announcement about our partnership with ascap",
              date: "06/13/2023",
              url: "https://www.linkedin.com/posts/overture-games_music-ai-activity-7075157553386582017-HgEW?utm_source=share&utm_medium=member_desktop",
              id: 1,
            },
            {
              description: "a podcast in crain's chicago business",
              date: "05/24/2023",
              url: "https://www.chicagobusiness.com/crains-daily-gist/checking-startup-progress-northwesterns-garage",
              id: 2,
            },
            {
              description: "an audio story featured in the daily nu",
              date: "05/15/2023",
              url: "https://dailynorthwestern.com/2023/05/14/audio/nu-declassified-built-this-overture-games-aims-to-turn-practice-into-play/",
              id: 3,
            },
            {
              description: "an article featured on scene + heard",
              date: "05/05/2023",
              url: "https://www.sceneandheardnu.com/content/2023/5/5/the-next-generation-of-game-developers-talking-with-overture-games-about-inspiration-and-innovation",
              id: 4,
            },
            {
              description: "our steam page",
              date: "uploaded originally on 04/17/2023",
              url: "https://store.steampowered.com/app/2270460/Intervallic/",
              id: 5,
            },
            {
              description: "our demo on itch.io",
              date: "uploaded originally on 02/05/2023",
              url: "https://overturegames.itch.io/intervallic",
              id: 6,
            },
            {
              description: "an article featured in the daily nu",
              date: "11/21/2022",
              url: "https://dailynorthwestern.com/2022/11/21/photo/captured-glimpse-under-the-hood-the-garages-undergraduate-projects/#modal-photo",
              id: 7,
            },
            {
              description:
                "our success with demo day at jumpstart at the garage",
              date: "08/24/2022",
              url: "https://thegarage.northwestern.edu/news/jumpstart-2022-demo-day-wrap-up/",
              id: 8,
            },
            {
              description: "our team interview from jumpstart at the garage",
              date: "08/15/2022",
              url: "https://thegarage.northwestern.edu/news/overture-games-team-spotlight/",
              id: 9,
            },
          ]}
        />
        <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://overture.games"
            name="overture games website"
            showIcon={false}
          />
        </Box>
      </>
    ),
  },
  imaginarium: {
    title: "imaginarium",
    dates: "march 2022 to june 2024",
    organization: "computer science research",
    description:
      "a language developed by dr. ian horswill to generate just about anything you could imagine.",
    tags: ["cs research", "c#", "imaginarium", "unity"],
    navTo: "imaginarium",
    mxrkdownUrl: "",
    display: true,
    content: (
      <>
        <LargeImage
          src={imaginariumImage}
          alt="a graph showing all types of entities to generate in the unity imaginarium implementation"
          description="a graph showing all types of entities to generate in the unity imaginarium implementation"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          <ItalicText>imaginarium</ItalicText> is a program created by{" "}
          <InlineLink
            href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/horswill-ian.html"
            target="_blank"
          >
            dr. ian horswill
          </InlineLink>{" "}
          designed to generate any fictional entity one could imagine for
          purposes such as (but not limited to) story creation, narrative
          development, and tabletop roleplaying games. i stumbled upon this
          project when taking a special topics in computer science class with
          him that focused on the role of ai in narrative-based games.
        </Typography>
        <Typography variant="projectP">
          in this class, we were asked to use{" "}
          <ItalicText>imaginarium</ItalicText> to generate some characters and
          write a quick story. i was immediately hooked and intrigued by the
          fact that the "code" one writes in{" "}
          <ItalicText>imaginarium</ItalicText> is basically just structured
          english. there is no fancy notation or syntax to learn, which is what
          makes such a tool so powerful; it is accessible to anyone, regardless
          of coding experience. for reference, here is what an example of my
          code looks like to generate settings for a narrative-based game:
        </Typography>
        <CodeSnippet
          code={imaginariumCode}
          darkMode={localStorage.getItem("darkMode") === "true"}
          title="setting.gen"
        />
        <Typography variant="projectP">
          in addition to generating entities,{" "}
          <ItalicText>imaginarium</ItalicText> can also be used to generate
          relationships between said entities. if you were to generate
          characters, you could write something like "characters can love each
          other," and then generating at least two characters would result in a
          graph of characters with edges between them representing the
          relationship. here's an example of such a relationship graph:
        </Typography>
        <LargeImage
          src={imaginariumRelationshipsImage}
          alt="a graph showing all relationships between generated cats in the unity imaginarium implementation"
          description="a graph showing all relationships between generated cats in the unity imaginarium implementation"
        />
        <Typography variant="projectP">
          it happened to be the case that i was also starting to take interest
          in pursuing a combined degree (b.a. and m.s. in computer science) at
          northwestern university, and reached out to dr. horswill to see if i
          could take a graduate-level research projects class with him as my
          advisor. eventually, i decided i would work on expanding{" "}
          <ItalicText>imaginarium</ItalicText>'s capabilities, in particular
          looking at the core of the code and the sat solver that is used to
          generate constraint-based models.
        </Typography>
        <Features
          features={[
            {
              description:
                'better gerund support (e.g., being able to say something like "happily being married is a way of knowing") for relationships',
              id: 0,
            },
            {
              description:
                "expanded domain and codomain for verbs in relationships to allow entities to relate to more than one other kind of entity",
              id: 1,
            },
          ]}
        />
        <Features
          features={[
            {
              description: 'an "exists" predicate',
              id: 0,
            },
            {
              description:
                "an easier way to generate multiple different kinds of entites at the same time",
              id: 1,
            },
            {
              description:
                'negation of verbs (e.g., "cannot," "must not," etc.)',
              id: 2,
            },
            {
              description: "improved ui of unity implementation",
              id: 3,
            },
            {
              description: "more robust documentation",
              id: 4,
            },
          ]}
          toImplement
        />
        <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
          <RepositoryButton
            url="https://github.com/ianhorswill/ImaginariumCore"
            name="imaginariumcore"
          />
          <RepositoryButton
            url="https://github.com/ianhorswill/Imaginarium"
            name="imaginarium"
          />
        </Box>
      </>
    ),
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
    content: (
      <>
        <LargeImage
          src={polygonalFoldingImage}
          alt="quadrilateral and pentagon drawn using the cap construction algorithm"
          description="quadrilateral and pentagon drawn using the cap construction algorithm"
        />
        <Typography variant="projectP" sx={{ mb: 2 }}>
          i was first introduced to research in the field of mathematics under
          the northwestern undergraduate research assistant program (
          <InlineLink
            href="https://undergradresearch.northwestern.edu/urap/"
            target="_blank"
          >
            urap
          </InlineLink>
          ) during my first year. i saw a prompt to study geometry and
          paper-folding under guidance of{" "}
          <InlineLink
            href="https://sites.google.com/view/shuyi-weng"
            target="_blank"
          >
            dr. shuyi weng
          </InlineLink>
          . after submitting my documents and participating in an interview, i
          heard back that i was accepted and i was going to work on this project
          with another student,{" "}
          <InlineLink
            href="https://www.linkedin.com/in/jade-s-zhang"
            target="_blank"
          >
            jade zhang
          </InlineLink>
          . we started by learning the theory and background material with
          lectures, reading papers, and, of course, folding paper.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          the research topic studies the relationship between the starting
          two-dimensional shape and the final three-dimensional shape that it
          becomes, when glued to a companion shape. how is this companion shape
          generated? my mentor developed what is called the "cap construction
          algorithm" to take any polygon, distribute uniform curvature to each
          vertex, and generate a "polygonal cap curve" with the same number of
          sides and side lengths. thus, corresponding sides get glued together
          to create a three-dimensional polyhedron. we are particularly
          interested in which kinds of starting shapes allow this construction
          to create a valid, closed polyhedron. my mentor's previous work
          revelead that equilateral triangles are the only three-sided shapes
          which work, and parallelograms are the only four-sided shapes which
          work. thus, it was natural for us to start examining five-sided
          shapes: pentagons.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          while exploring test cases in software such as mathematica, we
          eventually stumbled on quite an interesting phenomenon: it appeared as
          if, as one moved any of the vertices of the pentagon along a line, the
          endpoint of the cap curve would also appear to move along a line. this
          raised suspicion as to whether there was a linear (or affine)
          relationship regarding dependencies of the points of these curves. for
          the next school year, dr. weng and i continued to explore this
          phenomenon and its implications. We found that the endpoint of the
          polygonal cap curve indeed was affine dependent on any of the vertices
          of the starting polygon. furthermore, we were able to show that there
          is a clean linear relation which precisely defines when the closed cap
          condition is satisfied for a given number of vertices. we spent much
          of our time formalizing these conclusions in proofs and a paper set
          for publication.
        </Typography>
        <Typography variant="projectP" sx={{ mb: 2 }}>
          I had a wonderful time presenting these findings at the{" "}
          <InlineLink
            href="https://www.jointmathematicsmeetings.org//jmm"
            target="_blank"
          >
            joint mathematics meeting
          </InlineLink>{" "}
          in boston, in january 2023. I am so grateful for all of the help I
          received from jade, my mentor, and my various math professors. it
          feels so rewarding to see my work come to fruition.
        </Typography>
        <Typography>
          the paper for this research was published in{" "}
          <InlineLink
            href="https://msp.org/involve/2024/17-5/p01.xhtml"
            target="_blank"
          >
            involve
          </InlineLink>{" "}
          in november of 2024.
        </Typography>
        <Awards
          awards={[
            {
              description:
                "aws-pme joint mathematics meeting, 10-minute oral presentation",
              date: "01/05/2023",
              id: 0,
            },
            {
              description: "summer undergradute research grant of $4000",
              date: "04/11/2022",
              id: 1,
            },
            {
              description:
                "northwestern undergraduate research exposition, 10-minute oral presentation",
              date: "05/26/2021",
              id: 2,
            },
            {
              description:
                "northwestern undergraduate research assistant program funding up to $1500",
              date: "winter 2021 to spring 2021",
              id: 3,
            },
          ]}
        />
        <Media
          media={[
            {
              description: "our research paper in involve, a journal of mathematics 17-5 (2024), 723--736. doi 10.2140/involve.2024.17.723",
              date: "11/21/2024",
              url: "https://msp.org/involve/2024/17-5/p01.xhtml",
              id: 0,
            },
            {
              description: "my slide deck for my presentation at JMM",
              date: "01/05/2023",
              url: `${jmm}`,
              id: 1,
            },
            {
              description: "our research paper on arXiv",
              date: "10/01/2022",
              url: "https://arxiv.org/abs/2210.00198v1",
              id: 2,
            },
            {
              description:
                "our presentation at the northwestern undergraduate research exposition",
              date: "05/27/2021",
              url: "https://www.youtube.com/watch?v=1_W9MsM-IUc",
              id: 3,
            },
          ]}
        />
      </>
    ),
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
