import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import title from "../../assets/images/projects/ocean cleanup title.webp";
import instructions from "../../assets/images/projects/ocean cleanup instructions.webp";
import screenshotOne from "../../assets/images/projects/ocean cleanup area 1.webp";
import screenshotTwo from "../../assets/images/projects/ocean cleanup area 2.webp";
import shop from "../../assets/images/projects/ocean cleanup shop.webp";
import assets from "../../assets/images/projects/ocean cleanup assets.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function OceanCleanup({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
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
              "ocean cleanup" is a game my team made for the 2023 progression
              mechanics game jam hosted at northwestern. you control a cute
              low-poly submarine that must explore the ocean and collect trash
              to clean it up. as you collect trash, you gain points which are
              expendable on ship upgrades. we had about eight weeks to complete
              this project.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              on this project, i worked as both a 3d artist and a programmer. as
              an artist, i created all of the 3d models (aside from the terrain,
              which was created using a unity package which procedurally
              generates low-poly terrain) and their respective materials using
              blender. as shown in a screenshot below, i made
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
                    the various plastics (bottles, cups, bowls, lids, balloons,
                    and utensils), and
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
              level manager, shop, and ui. this was my first experience with a
              game jam, so i underestimated how quickly time would fly
              (especially during the school year). i would have loved to have a
              lot more mechanics and areas in the game, but i'm still proud fo
              what we were able to accomplish in the time allotted. i'm looking
              forward to finishing the project some day!
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
              alt="the instructions screen for the game"
              description="the instructions screen for the game"
            />
            <LargeImage
              src={screenshotOne}
              alt="level one"
              description="level one"
            />
            <LargeImage
              src={screenshotTwo}
              alt="level two"
              description="level two"
            />
            <LargeImage
              src={shop}
              alt="the in-game shop"
              description="the in-game shop"
            />
            <LargeImage
              src={assets}
              alt="the assets i created in blender"
              description="the assets i created in blender"
            />
            <Box sx={{ mt: 2, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/mercedes-sandu/Ocean-Cleanup"
                name="ocean cleanup"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default OceanCleanup;
