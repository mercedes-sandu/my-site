import { 
    StyledContainer,
    StyledHeader,
    StyledInlineLink,
} from "../styles/StyledComponents";
import { 
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import { 
    Email,
    GitHub,
    LinkedIn,
} from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import { StyledAvatar } from "../styles/HomePage";

function HomePage() {
    return (
        <>
            <StyledContainer 
                container
                spacing={12}
            >
                <Grid
                    item
                    md={6}
                >
                    <StyledHeader variant="h2">
                        Hi! I'm Mercedes!
                    </StyledHeader>
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
                        learn more <StyledInlineLink href="/about">about me</StyledInlineLink> and
                        my <StyledInlineLink href="/portfolio">projects</StyledInlineLink>!
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
                        <StyledAvatar
                            alt="Mercedes Sandu"
                        />
                    </Grid>
                </Grid>
            </StyledContainer>
        </>
    );
}

export default HomePage;
