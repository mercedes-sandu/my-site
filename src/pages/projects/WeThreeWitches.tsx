import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import weThreeWitchesImage from "../../assets/images/projects/we three witches title.webp";
import characterSelection from "../../assets/images/projects/we three witches character select.webp";
import gameplay from "../../assets/images/projects/we three witches gameplay.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function WeThreeWitches({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
    {
      description: "character selection",
      id: 0,
    },
    {
      description: "a hud that incorporates a health point and mana system",
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
              src={weThreeWitchesImage}
              alt="the start menu for the game"
              description="the start menu for the game"
            />
            <Typography variant="projectP" sx={{ mb: 2 }}>
              "we three witches" is a game i made in a week for one of the
              freestyle projects in comp_sci 376. you play as one of three
              witches, each with their own unique attacks, to fight off ai enemy
              monsters. the goal is to survive as long as possible.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              in terms of gameplay, it is pretty standard and basic as a 2d
              platformer due to only having a week to complete the project. i
              wanted some unique features, so i added character selection and a
              mana point system. each of the three witches has a basic
              projectile attack where the player can point and shoot in the
              direction where they want the projectile to fire, and a special
              magic attack that drains mana. the player's mana and health are
              displayed in a hud, and mana gradually replenishes with time.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              the enemies spawn at a set of random locations on the map, and use
              a* pathfinding to move toward the player, avoiding game objects
              labeled as obstacles. they then attack the player whenthey get
              within a close enough range, and their health bar is displayed
              above them. if time allows in the future, i would love to add more
              than one area to the game, have more unique abilities for the
              witches (such as melee attacks), and add more enemy types and
              bosses.
            </Typography>
            <Typography variant="projectP">
              the game was made using unity and c#.
            </Typography>
            <Features features={features} />
            <Typography variant="projectP" sx={{ mt: 4 }}>
              below are some screenshots for the game.
            </Typography>
            <LargeImage
              src={characterSelection}
              alt="the character selection screen for the game"
              description="the character selection screen for the game"
            />
            <LargeImage src={gameplay} alt="gameplay" description="gameplay" />
            <Box sx={{ mt: 2, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/mercedes-sandu/We-Three-Witches"
                name="we three witches"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default WeThreeWitches;
