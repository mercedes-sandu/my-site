import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../assets/images/vertical bar dark long.svg";
import ErrorPage from "./ErrorPage";
import { useParams } from "react-router-dom";
import { projects } from "./Projects";

interface ProjectPageProps {
  darkMode: boolean;
}

function ProjectPage({ darkMode }: ProjectPageProps) {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects[projectId ?? ""];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

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
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Typography variant="h1" sx={{ mb: 1 }}>
              {project.title}
            </Typography>
            <Typography
              variant="h2"
              color={theme.palette.secondary.main}
              sx={{ mb: 4 }}
            >
              {project.dates}
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              {project.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectPage;
