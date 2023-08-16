// import { StyledHomePage } from "../styles/HomePage";
import { Avatar, Grid, IconButton, Link, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import "../styles/HomePage";

function HomePage() {
    // const classes = useStyles();
    return (
        // <StyledHomePage>
        <>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Typography variant="h2">
                        Hi! I'm Mercedes!
                    </Typography>
                    <Typewriter
                        options={{
                            strings: [
                                "Mathematician",
                                "Computer Scientist",
                                "Game Developer",
                                "Undergrad Researcher",
                                "Artist",
                                "Musician",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <Typography variant="body1">
                        I'm a rising senior at Northwestern University with a passion for math,
                        computer science, and software/video game development! Look around to
                        learn more <Link href="/about">about me</Link> and my <Link href="/portfolio">projects</Link>!
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item md={2}>
                            <IconButton>
                                <LinkedIn />
                            </IconButton>
                        </Grid>
                        <Grid item md={2}>
                            <IconButton>
                                <GitHub />
                            </IconButton>
                        </Grid>
                        <Grid item md={2}>
                            <IconButton>
                                <Email />
                            </IconButton>
                        </Grid>
                    </Grid>
                    {/* <div class="meowcom-div" style="position: absolute;top: 81%;left: 10%;width: 40%;margin-left: 0px;margin-right: 0px;"><a href="/" class="meowcom-link" id="meowcom-prev"><- {name}</a><a href="https://meow.computer" class="meowcom-link">meow.computer </a><a href="/" class="meowcom-link" id="meowcom-next">{name} -></a></div>
                    <script src="https://meow.computer/meowcom.js"></script><script>meowcom_auto("mxrcedes");</script> */}
                </Grid>
                <Grid item md={6}>
                    <Grid item md={12}>
                        <Avatar
                            alt="Mercedes Sandu"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
        // </StyledHomePage>
    );
}

export default HomePage;
