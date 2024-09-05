import {
  Box,
  Container,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import verticalBarLightLong from "../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../assets/images/vertical bar dark long.svg";
import horizontalBarLight from "../assets/images/horizontal bar light.svg";
import horizontalBarDark from "../assets/images/horizontal bar dark.svg";
import { projects, tags } from "./Projects";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

interface PortfolioPageProps {
  darkMode: boolean;
  isMobile: boolean;
}

function PortfolioPage({ darkMode, isMobile }: PortfolioPageProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const [cards, setCards] = useState<any>(projects);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleFilterButton = (
    _event: React.MouseEvent<HTMLElement>,
    newTags: string[]
  ) => {
    setSelectedTags(newTags);
    if (newTags.length === 0) {
      setCards(projects);
    } else {
      setCards(
        Object.values(projects).filter((project) => {
          return project.tags.some((tag: string) => newTags.includes(tag));
        })
      );
    }
  };

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
            <ToggleButtonGroup
              sx={{
                // TODO: make flexwrap
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                pl: "24px",
                pr: "24px",
                mb: 4,
              }}
              value={selectedTags}
              onChange={handleFilterButton}
            >
              {tags.map((tag) => (
                <ToggleButton
                  key={tag}
                  value={tag}
                  sx={{
                    color: theme.palette.text.primary,
                    border: `2px solid ${theme.palette.secondary.main}`,
                    borderRadius: 0,
                    textTransform: "none",
                    width: "136px",
                    height: "30px",
                    mr: 2,
                    mb: 2,
                    transition: "border-color 0.2s ease-in-out",
                    textDecoration: "none",
                    "&.MuiToggleButton-root": {
                      border: `2px solid ${theme.palette.secondary.main}`,
                    },
                    "&:hover": {
                      border: `2px solid ${theme.palette.text.primary}`,
                      backgroundColor: "transparent",
                    },
                    "&.Mui-selected": {
                      border: `2px solid ${theme.palette.secondary.main}`,
                      textDecoration: "underline",
                      backgroundColor: "transparent",
                    },
                    "&.Mui-selected:hover": {
                      border: `2px solid ${theme.palette.text.primary}`,
                      backgroundColor: "transparent",
                    },
                    // TODO: focus state
                  }}
                  disableRipple
                >
                  <Typography
                    variant="filterLabel"
                    sx={{ textDecoration: "inherit" }}
                  >
                    {tag}
                  </Typography>
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {Object.values(cards).map(
              (project: any) =>
                project.display && (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    dates={project.dates}
                    description={project.description}
                    tags={project.tags}
                    onClick={() => navigate(`/portfolio/${project.navTo}`)}
                  />
                )
            )}
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
          variant="h1mobile"
          sx={{ color: theme.palette.text.primary, mb: 3 }}
        >
          portfolio
        </Typography>
        <Typography
          variant="h2mobile"
          sx={{ color: theme.palette.secondary.main, mb: 2 }}
        >
          my projects
        </Typography>
        <Box
          component="img"
          height="50px"
          src={darkMode ? horizontalBarLight : horizontalBarDark}
          sx={{ mb: 3 }}
        />
        <Typography variant="body1mobile" sx={{ mb: 2 }}>
          below you'll find a collection of some projects i have completed and
          others that are still in progress. feel free to use the filters to
          sort them by programming language or topic.
        </Typography>
        <Footer />
      </Box>
    </Container>
  );
}

export default PortfolioPage;
