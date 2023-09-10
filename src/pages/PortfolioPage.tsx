import { Grid } from "@mui/material";
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
        <StyledContainer container spacing={2}>
            <Grid item md={12}>
                <StyledHeader variant="h2">
                    My <StyledHeaderSpan>Projects</StyledHeaderSpan>
                </StyledHeader>
                <StyledParagraph variant="body1">
                    Below you'll find a collection of some projects I have completed and 
                    others that are still in progress. Feel free to use the filters to sort 
                    them by programming language or topic.
                </StyledParagraph>
                <Grid item md={12}>
                    {/* filter tags will go here */}
                </Grid>
                <Grid 
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    {Object.entries(projects).map(([key, project]) => (
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
                    ))}
                </Grid>
            </Grid>
            <StyledFooter>
            </StyledFooter>
        </StyledContainer>
    );
}

export default PortfolioPage;
