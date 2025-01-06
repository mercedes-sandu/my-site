import {
  Box,
  Container,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import verticalBarLightLong from "../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../assets/images/vertical bar dark long.svg";
import horizontalBarLight from "../assets/images/horizontal bar light.svg";
import horizontalBarDark from "../assets/images/horizontal bar dark.svg";
import { projects, tags } from "./Projects";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { getTypographyVariant } from "../utility/responsive";
import type { Project } from "./Projects";
import { StyledTagButton } from "../components/StyledComponents";

interface PortfolioPageProps {
  darkMode: boolean;
  isMobile: boolean;
}

function PortfolioPage({ darkMode, isMobile }: PortfolioPageProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const [cards, setCards] = useState<Record<string, Project>>(projects);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleFilterButton = (
    _event: React.MouseEvent<HTMLElement>,
    newTags: string[]
  ) => {
    setSelectedTags(newTags);
    if (newTags.length === 0) {
      setCards(projects);
    } else {
      const filteredEntries: [string, Project][] = Object.entries(
        projects
      ).filter(([, value]) => {
        return value.tags.some((tag: string) => newTags.includes(tag));
      });

      setCards(Object.fromEntries(filteredEntries));
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
      <Box sx={{ width: "5%" }}>
        <Box
          alt="vertical bar"
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
            <Typography variant={getTypographyVariant("h1")} sx={{ mb: 1 }}>
              portfolio
            </Typography>
            <Typography
              variant={getTypographyVariant("h2")}
              color={theme.palette.secondary.main}
              sx={{ mb: 4 }}
            >
              my projects
            </Typography>
            <Typography variant={getTypographyVariant("body1")} sx={{ mb: 4 }}>
              below you'll find a collection of some projects i have completed
              and others that are still in progress. feel free to use the
              filters to sort them by programming language or topic.
            </Typography>
            <ToggleButtonGroup
              sx={{
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
                <StyledTagButton
                  key={tag}
                  value={tag}
                  disableRipple
                  sx={{ mr: 2, mb: 2 }}
                >
                  <Typography
                    variant="filterLabel"
                    sx={{ textDecoration: "inherit" }}
                  >
                    {tag}
                  </Typography>
                </StyledTagButton>
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
              (project: Project) =>
                project.display && (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    dates={project.dates}
                    description={project.description}
                    tags={project.tags}
                    onClick={() => navigate(`/portfolio/${project.navTo}`)}
                    isMobile={false}
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
          variant={getTypographyVariant("h1")}
          sx={{ color: theme.palette.text.primary, mb: 3 }}
        >
          portfolio
        </Typography>
        <Typography
          variant={getTypographyVariant("h2")}
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
        <Typography variant={getTypographyVariant("body1")} sx={{ mb: 4 }}>
          below you'll find a collection of some projects i have completed and
          others that are still in progress.
        </Typography>
        {/* TODO: implement filters i can't do select right now */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {Object.values(cards).map(
            (project: Project) =>
              project.display && (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  dates={project.dates}
                  description={project.description}
                  tags={project.tags}
                  onClick={() => navigate(`/portfolio/${project.navTo}`)}
                  isMobile
                />
              )
          )}
        </Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default PortfolioPage;
