import { Card, Grid, Link } from "@mui/material";
import { 
    StyledContainer,
    StyledHeader,
    StyledHeaderSpan,
    StyledParagraph,
} from "../styles/StyledComponents";

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
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Card>
                                <Link href="/catsat">CatSAT</Link>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card>
                                <Link href="/zendog">ZenDog</Link>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card>
                                <Link href="/papas-what-is-going-on-eria">Papa's What-Is-Going-On-Eria</Link>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card>
                                <Link href="/songlybot">SonglyBot</Link>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card>
                                <Link href="/intervallic">Intervallic</Link>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card>
                                <Link href="/imaginarium">Imaginarium</Link>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card>
                                <Link href="/polygonal-folding">Polygonal Folding</Link>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledContainer>
        </>
    );
}

export default PortfolioPage;
