import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import { InlineLink } from "../../components/StyledComponents";
import LargeImage from "../../components/LargeImage";
import imaginariumImage from "../../assets/images/projects/imaginarium.webp";
import imaginariumRelationshipsImage from "../../assets/images/projects/relationships.webp";
import Features from "../../components/Features";
import CodeSnippet from "../../components/CodeSnippet";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function Imaginarium({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const imaginariumCode = `a setting is a kind of place.

  // noun descriptors
  school, beach, mountain, castle, restaurant, cafe, fortress, oasis, and city are kinds of setting.

  // plurals
  the plural of oasis is oases.

  // adjective descriptors
  a setting can be ancient, contemporary, magical, majestic, modern, mystical, quiet, or traditional.
  a setting is any two of alive, attractive, beautiful, bustling, calm, charming, creepy, enchanting, fascinating, lively, or peaceful.

  // specific descriptors
  schools are bustling, lively, or crowded.
  castles are ancient or magical.
  castles are beautiful or creepy.
  cities are bustling, lively, crowded, alive, or modern.
  oases are charming, beautiful, fascinating, peaceful, or majestic.

  // time of day
  settings have a time.
  times have an hour from hours. // 1 to 12
  times have a minute from minutes. // 00 to 59
  times have a half from halves. // AM or PM
  a time is described as "at [hour]:[minute] [half]".
  `;

  const features = [
    {
      description:
        'better gerund support (e.g., being able to say something like "happily being married is a way of knowing") for relationships',
      id: 0,
    },
    {
      description:
        "expanded domain and codomain for verbs in relationships to allow entities to relate to more than one other kind of entity",
      id: 1,
    },
  ];

  const featuresToImplement = [
    {
      description: 'an "exists" predicate',
      id: 0,
    },
    {
      description:
        "an easier way to generate multiple different kinds of entites at the same time",
      id: 1,
    },
    {
      description: 'negation of verbs (e.g., "cannot," "must not," etc.)',
      id: 2,
    },
    {
      description: "improved ui of unity implementation",
      id: 3,
    },
    {
      description: "more robust documentation",
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
              mb: 2,
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
              src={imaginariumImage}
              alt="a graph showing all types of entities to generate in the unity imaginarium implementation"
            />
            <Typography variant="projectP" sx={{ mb: 2 }}></Typography>
            <CodeSnippet code={imaginariumCode} />
            <Features features={features} />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default Imaginarium;
