import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import { InlineLink, ItalicText } from "../../components/StyledComponents";
import LargeImage from "../../components/LargeImage";
import imaginariumImage from "../../assets/images/projects/imaginarium.webp";
import imaginariumRelationshipsImage from "../../assets/images/projects/relationships.webp";
import Features from "../../components/Features";
import CodeSnippet from "../../components/CodeSnippet";
import { imaginariumCode } from "../CodeSnippets";
import RepositoryButton from "../../components/RepositoryButton";

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
              src={imaginariumImage}
              alt="a graph showing all types of entities to generate in the unity imaginarium implementation"
              description="a graph showing all types of entities to generate in the unity imaginarium implementation"
            />
            <Typography variant="projectP" sx={{ mb: 2 }}>
              <ItalicText>imaginarium</ItalicText> is a program created by{" "}
              <InlineLink
                href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/horswill-ian.html"
                target="_blank"
              >
                dr. ian horswill
              </InlineLink>{" "}
              designed to generate any fictional entity one could imagine for
              purposes such as (but not limited to) story creation, narrative
              development, and tabletop roleplaying games. i stumbled upon this
              project when taking a special topics in computer science class
              with him that focused on the role of ai in narrative-based games.
            </Typography>
            <Typography variant="projectP">
              in this class, we were asked to use{" "}
              <ItalicText>imaginarium</ItalicText> to generate some characters
              and write a quick story. i was immediately hooked and intrigued by
              the fact that the "code" one writes in{" "}
              <ItalicText>imaginarium</ItalicText> is basically just structured
              english. there is no fancy notation or syntax to learn, which is
              what makes such a tool so powerful; it is accessible to anyone,
              regardless of coding experience. for reference, here is what an
              example of my code looks like to generate settings for a
              narrative-based game:
            </Typography>
            <CodeSnippet
              code={imaginariumCode}
              darkMode={darkMode}
              title="setting.gen"
            />
            <Typography variant="projectP">
              in addition to generating entities,{" "}
              <ItalicText>imaginarium</ItalicText> can also be used to generate
              relationships between said entities. if you were to generate
              characters, you could write something like "characters can love
              each other," and then generating at least two characters would
              result in a graph of characters with edges between them
              representing the relationship. here's an example of such a
              relationship graph:
            </Typography>
            <LargeImage
              src={imaginariumRelationshipsImage}
              alt="a graph showing all relationships between generated cats in the unity imaginarium implementation"
              description="a graph showing all relationships between generated cats in the unity imaginarium implementation"
            />
            <Typography variant="projectP">
              it happened to be the case that i was also starting to take
              interest in pursuing a combined degree (b.a. and m.s. in computer
              science) at northwestern university, and reached out to dr.
              horswill to see if i could take a graduate-level research projects
              class with him as my advisor. eventually, i decided i would work
              on expanding <ItalicText>imaginarium</ItalicText>'s capabilities,
              in particular looking at the core of the code and the sat solver
              that is used to generate constraint-based models.
            </Typography>
            <Features features={features} />
            <Features features={featuresToImplement} toImplement />
            <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://github.com/ianhorswill/ImaginariumCore"
                name="imaginariumcore"
              />
              <RepositoryButton
                url="https://github.com/ianhorswill/Imaginarium"
                name="imaginarium"
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default Imaginarium;
