import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import budgetBuddy from "../../assets/images/projects/budget buddy designs.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function BudgetBuddy({ darkMode, projectKey }: ProjectPageProps) {
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
        "a signup form where the user fills in personal information related to their monthly income, monthly budget, and how they would like to split up their budget into categories",
      id: 1,
    },
    {
      description:
        "a home page that displays the user's budget and spending in a donut chart and category breakdown",
      id: 2,
    },
    {
      description: "a form to add a new transaction to the user's spending",
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
              "budgetbuddy" was the first project my team worked on in comp_sci
              392. for this project, we had to quickly come up with an app idea,
              pitch it within the first week, and begin development. we decided
              to make a webapp that would help people track their spending and
              manage their budget, as well as get some insights about their
              spending. we had approximately three weeks to complete this
              project.
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
              src={budgetBuddy}
              alt="the login page, setup page, home page, navigation sidebar, and insights page of the webapp"
              description="the login page, setup page, home page, navigation sidebar, and insights page of the webapp"
            />
            <Features features={features} />
            <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/392-f23/BudgetBuddy"
                name="budgetbuddy"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default BudgetBuddy;
