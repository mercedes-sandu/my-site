import { Box } from "@mui/material";
import {
  StyledContainer,
  StyledFooter,
  StyledHeader,
  StyledHeaderSpan,
  StyledParagraph,
} from "../styles/StyledComponents";
import PortfolioCard from "../components/portfolio-card/PortfolioCard";
import { projects } from "../jsons/projects";

function PortfolioPage() {
  return (
    <StyledContainer sx={{ pt: 8, pl: 20, pr: 20 }}>
      <StyledHeader variant="h1">
        My <StyledHeaderSpan>Projects</StyledHeaderSpan>
      </StyledHeader>
      <StyledParagraph variant="body1">
        Below you'll find a collection of some projects I have completed and
        others that are still in progress. Feel free to use the filters to sort
        them by programming language or topic.
      </StyledParagraph>
      {/* filter tags will go here */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {Object.entries(projects).map(([key, project]) =>
          project.display ? (
            <PortfolioCard
              key={key}
              title={project.title}
              dates={project.dates}
              description={project.description}
              tags={project.tags}
              navTo={project.navTo}
            />
          ) : null
        )}
      </Box>
      <StyledFooter></StyledFooter>
    </StyledContainer>
  );
}

export default PortfolioPage;
