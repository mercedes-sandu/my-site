import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../assets/images/vertical bar dark long.svg";
import horizontalBarLight from "../assets/images/horizontal bar light.svg";
import horizontalBarDark from "../assets/images/horizontal bar dark.svg";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";
import { projects } from "./Projects";
import { designs } from "./Designs";
import Footer from "../components/Footer";
import { getTypographyVariant } from "../utility/responsive";

type ProjectType = "project" | "design";

interface ProjectPageProps {
  darkMode: boolean;
  isMobile: boolean;
  projectType?: ProjectType;
}

function ProjectPage({
  darkMode,
  isMobile,
  projectType = "project",
}: ProjectPageProps) {
  const { projectId, designId } = useParams<{
    projectId: string;
    designId: string;
  }>();
  const project =
    projectType === "project"
      ? projects[projectId ?? ""]
      : designs[designId ?? ""];

  const theme = useTheme();

  if (!project) {
    return <ErrorPage />;
  }

  return !isMobile ? (
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
      <Box sx={{ width: "5%" }}>
        <Box
          component="img"
          src={darkMode ? verticalBarLightLong : verticalBarDarkLong}
          sx={{
            position: "fixed",
            top: "200px",
            width: "auto",
            maxHeight: "calc((100vh - 150px) * 0.9)",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "95%",
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
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Typography
              variant={getTypographyVariant("projectDates")}
              sx={{ color: theme.palette.secondary.main }}
            >
              {project.dates}
            </Typography>
            <Typography
              variant={getTypographyVariant("projectTitle")}
              sx={{ mb: 4 }}
            >
              {project.title}
            </Typography>
            <Typography
              variant={getTypographyVariant("projectOrganization")}
              sx={{ mb: 2 }}
            >
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
                  <Typography variant={getTypographyVariant("projectTag")}>
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography
              variant={getTypographyVariant("projectDescription")}
              sx={{ mb: 4 }}
            >
              {project.description}
            </Typography>
            {project.content}
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  ) : (
    <Container
      sx={{
        position: "absolute",
        top: "120px",
        left: 0,
        width: "100%",
        display: "flex",
        "&.MuiContainer-root": {
          pl: "10vw",
          pr: "10vw",
        },
      }}
      maxWidth={false}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
        }}
      >
        <Typography
          variant={getTypographyVariant("projectTitle")}
          sx={{ color: theme.palette.text.primary, mb: 2 }}
        >
          {project.title}
        </Typography>
        <Typography
          variant={getTypographyVariant("projectDates")}
          sx={{ color: theme.palette.secondary.main, mb: 2 }}
        >
          {project.dates}
        </Typography>
        <Typography
          variant={getTypographyVariant("projectOrganization")}
          sx={{ mb: 2 }}
        >
          {project.organization}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {project.tags.map((tag, index) => (
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
                mr: index == project.tags.length - 1 ? 0 : 2,
                mb: 2,
              }}
              key={tag}
            >
              <Typography variant={getTypographyVariant("projectTag")}>
                {tag}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography
          variant={getTypographyVariant("projectDescription")}
          sx={{ mb: 2 }}
        >
          {project.description}
        </Typography>
        <Box
          component="img"
          height="50px"
          src={darkMode ? horizontalBarLight : horizontalBarDark}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {project.content}
        </Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default ProjectPage;
