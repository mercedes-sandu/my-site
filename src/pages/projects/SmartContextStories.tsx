import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import { InlineLink } from "../../components/StyledComponents";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import screenshotOne from "../../assets/images/projects/smart context 1.webp";
import screenshotTwo from "../../assets/images/projects/smart context 2.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function SmartContextStories({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
    {
      description: "signing in with a username",
      id: 0,
    },
    {
      description: "a loading screen while api calls are being made",
      id: 1,
    },
    {
      description: "topic identification and categorization via openai api",
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
              "smart context stories" is a google chrome extension that uses
              openai's gpt-3 api and new york times' api to generate a summary
              of the news you missed on recurring issues while you were busy.
              the project was made for comp_sci 338, where we were tasked with
              creating a project that used ai in some way that benefited media
              production or consumption.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              when the user opens a new york times article on a recurring issue
              (i.e., covid-19, the presidential election, the stock market,
              etc.) and runs the extension, the extension will query a database
              for the last time the user read on this topic. if the user has
              never read about this topic before, the extension will generate a
              summary of the most important points overall, otherwise it will
              only generate a summary of events that have happened since the
              last date of reading. the program then queries the new york times
              api for the most relevant articles in the specified time frame on
              that topic and generates a four-bullet-point summary of the most
              important points. if the user is unsatisfied with the results,
              they can be regenerated via a button, and the user can also see
              the articles/sources used to generate the summary. i worked as the
              frontend developer for the team, and programmed primarily with the
              new york times api.
            </Typography>
            <Typography variant="projectP">
              the webapp was developed using react, firebase, and mui. majority
              of the languages used were javascript, css, and html. for more
              details and specific instructions, please see the{" "}
              <InlineLink href="https://github.com/patrickhoey20/SmartContextStories/blob/main/README.md">
                README file
              </InlineLink>{" "}
              for the project. below are some screenshots of the extension.
            </Typography>
            <LargeImage
              src={screenshotOne}
              alt="the bullet point summary of an article about covid-19"
              description="the bullet point summary of an article about covid-19"
            />
            <LargeImage
              src={screenshotTwo}
              alt="the sources of the articles used to generate the summary"
              description="the sources of the articles used to generate the summary"
            />
            <Features features={features} />
            <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/patrickhoey20/SmartContextStories"
                name="smart context stories"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default SmartContextStories;
