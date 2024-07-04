import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../assets/images/vertical bar dark long.svg";

interface ProjectPageProps {
  darkMode: boolean;
  projectData: any;
}

function ProjectPage({ darkMode, projectData }: ProjectPageProps) {
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
              portfolio
            </Typography>
            <Typography
              variant="h2"
              color={theme.palette.secondary.main}
              sx={{ mb: 4 }}
            >
              my projects
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              below you'll find a collection of some projects i have completed
              and others that are still in progress. feel free to use the
              filters to sort them by programming language or topic.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectPage;
