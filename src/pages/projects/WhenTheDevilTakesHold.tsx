import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import title from "../../assets/images/projects/wtdth title.webp";
import instructions from "../../assets/images/projects/wtdth instructions.webp";
import controls from "../../assets/images/projects/wtdth controls.webp";
import screenshotOne from "../../assets/images/projects/wtdth 1.webp";
import screenshotTwo from "../../assets/images/projects/wtdth 2.webp";
import screenshotThree from "../../assets/images/projects/wtdth 3.webp";
import screenshotFour from "../../assets/images/projects/wtdth 4.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function WhenTheDevilTakesHold({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
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
          description: "level three: find and kill the npc that is not a decoy",
          id: 3,
        },
        {
          description: "level four: find the npc to kill in the unlit maze",
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
      description: "point and click projectile system with limited ammo",
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
  ];

  return (
    <Container
      sx={{
        position: "absolute",
        top: "150px",
        left: 0,
        width: "100%",
        height: "calc(100% - 150px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&.MuiContainer-root": {
          pl: "10vw",
          pr: "10vw",
        },
      }}
      maxWidth={false}
    >
      <Box
        component="img"
        src={darkMode ? verticalBarLightLong : verticalBarDarkLong}
        sx={{
          position: "fixed",
          left: "150px",
          top: "200px",
          width: "auto",
          maxHeight: "calc((100vh - 150px) * 0.9)",
        }}
      />
      <Box
        sx={{
          width: "calc(100% - 50px)",
          height: "75%",
          display: "flex",
          pl: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="projectDates"
              color={theme.palette.secondary.main}
            >
              {project.dates}
            </Typography>
            <Typography variant="projectTitle" sx={{ mb: 4 }}>
              {project.title}
            </Typography>
            <Typography variant="projectOrganization" sx={{ mb: 2 }}>
              {project.organization}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {project.tags.map((tag) => (
                <Box
                  sx={{
                    height: "30px",
                    pl: "12px",
                    pr: "12px",
                    backgroundColor: "transparent",
                    border: `2px solid ${theme.palette.secondary.main}`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 2,
                    mb: 2,
                  }}
                  key={tag}
                >
                  <Typography variant="projectTag">{tag}</Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="projectDescription" sx={{ mb: 4 }}>
              {project.description}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LargeImage
              src={title}
              alt="the start menu for the game"
              description="the start menu for the game"
            />
            <Typography variant="projectP" sx={{ mb: 2 }}>
              "when the devil takes hold" is a top-down puzzle and fighting game
              my team made in six weeks in comp_sci 377. you play as a girl who
              signed a pact with a demon to kill people for him in exchange for
              her life. if you do not do so fast enough, then the pact is
              breached and you must fight the demon for your life. thus, the
              game is split into two core game loops: one where the player is
              solving puzzles to murder npcs, and one where the player is
              fighting or trying to escape from the demon. you win the game by
              either completing all fo the puzzles or killing the demon, and you
              lose by dying to the demon.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              at the start of every level, a timer is displayed at the top of
              the screen. the player must complete the puzzle within this time,
              but killing an npc grants them a bit of extra time. if the timer
              runs out, the player is teleported to the fight sequence. at this
              point, the player can either fight to the death or find objects to
              hide behind, making the demon somehow forget their existence,
              teleporting the player back to the last puzzle they failed to
              complete. but, be careful! hiding penalizes the player by
              decreasing the time allowed to complete the puzzle they return to.
            </Typography>
            <Typography variant="projectP">
              the game was made using unity and c#.
            </Typography>
            <Features features={features} />
            <Typography variant="projectP" sx={{ mt: 4 }}>
              below are some screenshots for the game.
            </Typography>
            <LargeImage
              src={instructions}
              alt="an order receipt for the game"
              description="an order receipt for the game"
            />
            <LargeImage
              src={controls}
              alt="the grill station where meat is cooked"
              description="the grill station where meat is cooked"
            />
            <LargeImage
              src={screenshotOne}
              alt="the station where the burger is assembled with toppings and condiments"
              description="the station where the burger is assembled with toppings and condiments"
            />
            <LargeImage
              src={screenshotTwo}
              alt="the soda machine where soda is poured into a cup"
              description="the soda machine where soda is poured into a cup"
            />
            <LargeImage
              src={screenshotThree}
              alt="the soda machine where soda is poured into a cup"
              description="the soda machine where soda is poured into a cup"
            />
            <LargeImage
              src={screenshotFour}
              alt="the soda machine where soda is poured into a cup"
              description="the soda machine where soda is poured into a cup"
            />
            <Box sx={{ mt: 2, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/mercedes-sandu/When-the-Devil-Takes-Hold"
                name="when the devil takes hold"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default WhenTheDevilTakesHold;
