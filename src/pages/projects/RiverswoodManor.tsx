import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import riverswoodTitle from "../../assets/images/projects/riverswood title.webp";
import riverswoodOne from "../../assets/images/projects/riverswood 1.webp";
import riverswoodTwo from "../../assets/images/projects/riverswood 2.webp";
import riverswoodThree from "../../assets/images/projects/riverswood 3.webp";
import riverswoodFour from "../../assets/images/projects/riverswood 4.webp";
import riverswoodFive from "../../assets/images/projects/riverswood 5.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function RiverswoodManor({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
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
      description: "particle systems and animated objects upon interaction",
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
            <Typography variant="projectTitle" sx={{ mb: 6 }}>
              {project.title}
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
              src={riverswoodTitle}
              alt="the start menu for the game"
              description="the start menu for the game"
            />
            <Typography variant="projectP" sx={{ mb: 2 }}>
              "riverswood manor" is a 3d game i made in two weeks for my final
              project in comp_sci 376. you play as a butler in a manor where the
              countess has been murdered by the count. you start in your room,
              hearing a scream and seeing a note being slipped under your door
              from the countess. from there, you must figure out how to escape
              the manor. after escaping the room through the painting on the
              wall, you enter the count's office, where you must solve a puzzle
              to unlock the hidden door in the bookcase. the game ends when you
              escape.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              there ar emultiple systems in play with this game, including cued
              game events, an interaction system to pick up and touch various
              objects, and a ui inventory system to store and view clues. the
              office scene requires the player to listen to audio cues played
              from a music box and find corresponding items in the room that
              make the same sounds. these objects are distinctly colored red,
              yellow, and green, matching the buttons on the wall by the
              fireplace to make a code. if the right code is entered, the player
              successfully escapes the manor.
            </Typography>
            <Typography variant="projectP">
              the game was made using unity and c#.
            </Typography>
            <Features features={features} />
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
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default RiverswoodManor;
