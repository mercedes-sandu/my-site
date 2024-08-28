import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import gymCats from "../../assets/images/projects/gymcats design.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function GymCats({ darkMode, projectKey }: ProjectPageProps) {
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
            <Typography variant="projectP" sx={{ mb: 2 }}>
              "gymcats" was the second project my team worked on in comp_sci
              392. for this project, we had to quickly come up with an app idea,
              pitch it within the first week of design, and begin development.
              we decided to make a webapp that was like a dating app but for
              finding workout buddies. the app would match users (targeted
              toward northwestern students) based on their workout preferences,
              skill level, and schedules.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              we came up with the app idea, a figma mockup, and a list of user
              stories. i created and iterated upon the figma mockups and helped
              implement the frontend aspects of the webapp.
            </Typography>
            <Typography variant="projectP">
              the webapp was developed using react, firebase, and mui. majority
              of the languages used were javascript, css, and html. below are
              some screenshots of the webapp.
            </Typography>
            <LargeImage
              src={gymCats}
              alt="the login page, onboarding page, home page, friends page, and profile pages of the webapp"
              description="the login page, onboarding page, home page, friends page, and profile pages of the webapp"
            />
            <Features features={features} />
            <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/392-f23/GymCats"
                name="gymcats"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default GymCats;
