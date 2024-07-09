import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import { InlineLink } from "../../components/StyledComponents";
import Awards from "../../components/Awards";
import Media from "../../components/Media";
import jmm from "../../assets/pdfs/jmm.pdf";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function PolygonalFolding({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const awards = [
    {
      description:
        "aws-pme joint mathematics meeting, 10-minute oral presentation",
      date: "01/05/2023",
      id: 0,
    },
    {
      description: "summer undergradute research grant of $4000",
      date: "04/11/2022",
      id: 1,
    },
    {
      description:
        "northwestern undergraduate research exposition, 10-minute oral presentation",
      date: "05/26/2021",
      id: 2,
    },
    {
      description:
        "northwestern undergraduate research assistant program funding up to $1500",
      date: "winter 2021 to spring 2021",
      id: 3,
    },
  ];

  const media = [
    {
      description: "my slide deck for my presentation at JMM",
      date: "01/05/2023",
      url: `${jmm}`,
      id: 0,
    },
    {
      description: "our research paper on arXiv",
      date: "10/01/2022",
      url: "https://arxiv.org/abs/2210.00198v1",
      id: 1,
    },
    {
      description:
        "our presentation at the northwestern undergraduate research exposition",
      date: "05/27/2021",
      url: "https://www.youtube.com/watch?v=1_W9MsM-IUc",
      id: 2,
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
            <Typography variant="projectP" sx={{ mb: 2 }}>
              i was first introduced to research in the field of mathematics
              under the northwestern undergraduate research assistant program (
              <InlineLink
                href="https://undergradresearch.northwestern.edu/urap/"
                target="_blank"
              >
                urap
              </InlineLink>
              ) during my first year. i saw a prompt to study geometry and
              paper-folding under guidance of{" "}
              <InlineLink
                href="https://sites.google.com/view/shuyi-weng"
                target="_blank"
              >
                dr. shuyi weng
              </InlineLink>
              . after submitting my documents and participating in an interview,
              i heard back that i was accepted and i was going to work on this
              project with another student,{" "}
              <InlineLink
                href="https://www.linkedin.com/in/jade-s-zhang"
                target="_blank"
              >
                jade zhang
              </InlineLink>
              . we started by learning the theory and background material with
              lectures, reading papers, and, of course, folding paper.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              the research topic studies the relationship between the starting
              two-dimensional shape and the final three-dimensional shape that
              it becomes, when glued to a companion shape. how is this companion
              shape generated? my mentor developed what is called the "cap
              construction algorithm" to take any polygon, distribute uniform
              curvature to each vertex, and generate a "polygonal cap curve"
              with the same number of sides and side lengths. thus,
              corresponding sides get glued together to create a
              three-dimensional polyhedron. we are particularly interested in
              which kinds of starting shapes allow this construction to create a
              valid, closed polyhedron. my mentor's previous work revelead that
              equilateral triangles are the only three-sided shapes which work,
              and parallelograms are the only four-sided shapes which work.
              thus, it was natural for us to start examining five-sided shapes:
              pentagons.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              while exploring test cases in software such as mathematica, we
              eventually stumbled on quite an interesting phenomenon: it
              appeared as if, as one moved any of the vertices of the pentagon
              along a line, the endpoint of the cap curve would also appear to
              move along a line. this raised suspicion as to whether there was a
              linear (or affine) relationship regarding dependencies of the
              points of these curves. for the next school year, dr. weng and i
              continued to explore this phenomenon and its implications. We
              found that the endpoint of the polygonal cap curve indeed was
              affine dependent on any of the vertices of the starting polygon.
              furthermore, we were able to show that there is a clean linear
              relation which precisely defines when the closed cap condition is
              satisfied for a given number of vertices. we spent much of our
              time formalizing these conclusions in proofs and a paper set for
              publication.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              I had a wonderful time presenting these findings at the{" "}
              <InlineLink
                href="https://www.jointmathematicsmeetings.org//jmm"
                target="_blank"
              >
                joint mathematics meeting
              </InlineLink>{" "}
              in boston, in january 2023. I am so grateful for all of the help I
              received from jade, my mentor, and my various math professors. it
              feels so rewarding to see my work come to fruition.
            </Typography>
            <Typography>
              the paper for this research is waiting to be published in{" "}
              <InlineLink
                href="https://msp.org/involve/about/journal/about.html"
                target="_blank"
              >
                involve
              </InlineLink>{" "}
              in fall 2024.
            </Typography>
            <Awards awards={awards} />
            <Media media={media} />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default PolygonalFolding;
