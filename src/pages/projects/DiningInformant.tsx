import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import RepositoryButton from "../../components/RepositoryButton";
import diningInformant from "../../assets/images/projects/dininginformant.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function DiningInformant({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
    {
      description: "a home page where the user can see a card corresponding to every dining hall, featured meal items, the dining hall's star rating, and the current approximate wait time",
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
              "dininginformant" was the first project my team worked on in
              comp_sci 394. for this project, we had to quickly come up with a
              webapp idea, pitch it within the first week, and begin
              development. we decided to make a webapp that would help first-
              and second-year students at northwestern see the wait time at
              various dining halls on campus, report their wait times and rating
              of the dining halls, and see the menus for each meal, daily. we
              had five weeks to complete this project.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              we came up with the app idea, a figma mockup, and a list of user
              stories. we worked together to create a sprint plan week by week
              and had weekly meetings to discuss what needed to be done and the
              plan of action. my personal role in the project was to demo the
              project weekly, to create and iterate upon the figma mockups, and
              to primarily implement the frontend aspects of the webapp. i
              entirely implemented the rating form and aided the other
              developers with the ui/ux for other pages and components. i also
              worked on setting up the databases in firebase, and set up
              end-to-end as well as unit testing for the app before delivering
              it by the middle of the quarter.
            </Typography>
            <Typography variant="projectP">
              the webapp was developed using react, firebase, and mui. majority
              of the languages used were javascript, css, and html. below are
              some screenshots of the webapp.
            </Typography>
            <LargeImage
              src={diningInformant}
              alt="the home page, menu page, and rating form of the webapp"
              description="the home page, menu page, and rating form of the webapp"
            />
            <Features features={features} />
            <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/394-w23/DiningInformant"
                name="dininginformant"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default DiningInformant;
