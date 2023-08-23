import { Grid, Link } from "@mui/material";
import { 
    StyledContainer,
    StyledHeader,
    StyledHeaderSpan,
    StyledParagraph,
} from "../styles/StyledComponents";
import { 
    StyledPortfolioCard,
    StyledTitle
} from "../styles/PortfolioCard";
import { StyledCardGrid } from "../styles/PortfolioPage";

function PortfolioPage() {
    return (
        <>
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

                    </Grid>
                    <Grid 
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StyledCardGrid item md={6}>
                            <StyledPortfolioCard>
                                <StyledTitle>
                                    CatSAT
                                </StyledTitle>
                                <Link href="/portfolio/catsat">CatSAT</Link>
                            </StyledPortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <StyledPortfolioCard>
                                <Link href="/portfolio/zendog">ZenDog</Link>
                            </StyledPortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <StyledPortfolioCard>
                                <Link href="/portfolio/papas-what-is-going-on-eria">Papa's What-Is-Going-On-Eria</Link>
                            </StyledPortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <StyledPortfolioCard>
                                <Link href="/portfolio/songlybot">SonglyBot</Link>
                            </StyledPortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <StyledPortfolioCard>
                                <Link href="/portfolio/intervallic">Intervallic</Link>
                            </StyledPortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <StyledPortfolioCard>
                                <Link href="/portfolio/imaginarium">Imaginarium</Link>
                            </StyledPortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <StyledPortfolioCard>
                                <Link href="/portfolio/polygonal-folding">Polygonal Folding</Link>
                            </StyledPortfolioCard>
                        </StyledCardGrid>
                    </Grid>
                </Grid>
            </StyledContainer>
        </>
    );
}

export default PortfolioPage;
