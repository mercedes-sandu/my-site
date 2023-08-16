import { Card, Grid, Link, Typography } from "@mui/material";
import "../styles/PortfolioPage.css";

function PortfolioPage() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h2">
                        My Projects
                    </Typography>
                    <Typography variant="body1">
                        Below you'll find a collection of some projects I have completed and 
                        others that are still in progress. Feel free to use the filters to sort 
                        them by programming language or topic.
                    </Typography>
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
            </Grid>
        </>
    );
}

export default PortfolioPage;
