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
import { InlineLink, ItalicText } from "../../components/StyledComponents";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import papasImage from "../../assets/images/projects/papas what is going on eria.webp";
import orderReceipt from "../../assets/images/projects/order receipt.webp";
import cooker from "../../assets/images/projects/cooker.webp";
import assembler from "../../assets/images/projects/assembler.webp";
import sodaMachine from "../../assets/images/projects/soda machine.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function PapasWhatIsGoingOnEria({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
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
              src={papasImage}
              alt="the start menu for the game"
              description="the start menu for the game"
            />
            <Typography variant="projectP" sx={{ mb: 2 }}>
              "papa's what-is-going-on-eria" is a game i made in a week for one
              of the freestyle projects in comp_sci 376. it is largely inspired
              by{" "}
              <InlineLink
                href="https://www.coolmathgames.com/0-papas-pizzeria"
                target="_blank"
              >
                papa's pizzeria
              </InlineLink>{" "}
              and other games in the franchise. you control a character in a
              top-down 2d kitchen, receiving randomized orders for burgers and
              soda. you must go to each station in the kitchen to receive and
              then make the order. the basic game loop is as follows:
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
                    go to the order counter to receive a ticket with all the
                    order details
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
                    go to the cutting board to assemble the burger with all of
                    the proper add-ons and condiments
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
              this process repeats over adn over until your time runs out, so
              the goal is to complete as many orders as possible and thus
              maximize your score.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              as you complete orders, you may notice something slightly odd
              happening. it seems that every time you complete an order, one of
              the ingredients randomly gets corrupted and you can no longer use
              it! the corrupted ingredients may still pop up on the order
              ticket, just try to carry on and ignore them.
            </Typography>
            <Typography variant="projectP">
              the game was made using unity and c#. for more details and
              specific instructions/controls please see the{" "}
              <InlineLink
                href="https://github.com/mercedes-sandu/Papas-What-Is-Going-On-Eria/blob/main/README.md"
                target="_blank"
              >
                readme file
              </InlineLink>{" "}
              for the game.
            </Typography>
            <Features features={features} />
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
            <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/mercedes-sandu/Papas-What-Is-Going-On-Eria"
                name="papa's what-is-going-on-eria"
                showIcon
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default PapasWhatIsGoingOnEria;
