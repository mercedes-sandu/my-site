import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import zenDogLogo from "../../assets/images/projects/zendog.webp";
import screenshots from "../../assets/images/projects/zendog screenshots.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function ZenDog({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
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
              src={zenDogLogo}
              alt="the zendog sign-in screen"
              description="the zendog sign-in screen"
            />
            <Typography variant="projectP" sx={{ mb: 2 }}>
              "zendog" was the second project my team worked on in comp_sci 394.
              for this project, we partnered up with a team of clients from
              northwestern's mpd 405 class. the clients were a group of students
              who were interested in developing a webapp that would help dog
              owners receive and explore personalized content to aid them in
              improving their dog's behavior and training. we had five weeks to
              complete this project.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              the client team provided us with the app idea, a figma mockup, and
              a list of user stories. we worked together to create a sprint plan
              week by week and had weekly meetings to discuss what needed to be
              done and the plan of action. my personal role in the project was
              to communicate with the clients about the development team's
              progress and to primarily implement the frontend aspects of the
              app. i implemented the signup form and aided other developers with
              the ui/ux for other pages and components. i also worked on setting
              up the databases in firebase, and set up end-to-end as well as
              unit testing for the app before delivering it to the clients at
              the end of the quarter.
            </Typography>
            <Typography variant="projectP">
              the webapp was developed using react, firebase, and mui. majority
              of the languages used were javascript, css, and html. below are
              some screenshots of the webapp.
            </Typography>
            <LargeImage
              src={screenshots}
              alt="the onboarding form and home screen of the webapp"
              description="the onboarding form and home screen of the webapp"
            />
            <Features features={features} />
            <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/394-w23/DogSpace"
                name="zendog"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default ZenDog;
