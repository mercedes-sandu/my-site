import { Grid } from "@mui/material";
import { 
    StyledContainer,
    StyledHeader,
    StyledHeaderSpan,
    StyledParagraph,
} from "../styles/StyledComponents";
import PortfolioCard from "../components/portfolio-card/PortfolioCard";

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
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                        <PortfolioCard />
                            {/* <Link href="/portfolio/catsat">CatSAT</Link> */}
                        {/* <StyledCardGrid item md={6}>
                            <PortfolioCard>
                                <Link href="/portfolio/zendog">ZenDog</Link>
                            </PortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <PortfolioCard>
                                <Link href="/portfolio/papas-what-is-going-on-eria">Papa's What-Is-Going-On-Eria</Link>
                            </PortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <PortfolioCard>
                                <Link href="/portfolio/songlybot">SonglyBot</Link>
                            </PortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <PortfolioCard>
                                <Link href="/portfolio/intervallic">Intervallic</Link>
                            </PortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <PortfolioCard>
                                <Link href="/portfolio/imaginarium">Imaginarium</Link>
                            </PortfolioCard>
                        </StyledCardGrid>
                        <StyledCardGrid item md={6}>
                            <PortfolioCard>
                                <Link href="/portfolio/polygonal-folding">Polygonal Folding</Link>
                            </PortfolioCard>
                        </StyledCardGrid> */}
                    </Grid>
                </Grid>
            </StyledContainer>
        </>
    );
}

export default PortfolioPage;
