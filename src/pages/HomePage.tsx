import { 
    StyledContainer,
    StyledHeader,
    StyledHomePageContainer,
    StyledInlineLink,
} from "../styles/StyledComponents";
import { 
    Grid,
    Typography,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import {
    StyledAvatar,
    StyledEmail,
    StyledGitHub,
    StyledHalfContainer,
    StyledIconButton,
    StyledLinkedIn
} from "../styles/HomePage";
import "../styles/HomePage.css";
import ProfilePicture from "../components/mercedes profile-modified.png";

function HomePage() {
    return (
        <StyledHomePageContainer container spacing={12}>
            <StyledHalfContainer item md={6}>
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
                        wrapperClassName: "typewriter-wrapper",
                        cursorClassName: "typewriter-cursor",
                    }}
                />
                <Typography variant="body1">
                    I'm a rising senior at Northwestern University with a passion for math,
                    computer science, and software/video game development! Look around to
                    learn more <StyledInlineLink href="/about">about me</StyledInlineLink> and
                    my <StyledInlineLink href="/portfolio">projects</StyledInlineLink>!
                </Typography>
                <Grid container spacing={2} mt={1}>
                    <Grid item md={2}>
                        <StyledIconButton 
                            size="large"
                        >
                            <StyledLinkedIn />
                        </StyledIconButton>
                    </Grid>
                    <Grid item md={2}>
                        <StyledIconButton 
                            size="large"
                        >
                            <StyledGitHub />
                        </StyledIconButton>
                    </Grid>
                    <Grid item md={2}>
                        <StyledIconButton 
                            size="large"
                        >
                            <StyledEmail />
                        </StyledIconButton>
                    </Grid>
                </Grid>
                {/* <div class="meowcom-div" style="position: absolute;top: 81%;left: 10%;width: 40%;margin-left: 0px;margin-right: 0px;"><a href="/" class="meowcom-link" id="meowcom-prev"><- {name}</a><a href="https://meow.computer" class="meowcom-link">meow.computer </a><a href="/" class="meowcom-link" id="meowcom-next">{name} -></a></div>
                <script src="https://meow.computer/meowcom.js"></script><script>meowcom_auto("mxrcedes");</script> */}
            </StyledHalfContainer>
            <StyledHalfContainer item md={6}>
                <Grid item md={12}>
                    <StyledAvatar
                        src={ProfilePicture}
                        alt="Mercedes Sandu"
                    />
                </Grid>
            </StyledHalfContainer>
        </StyledHomePageContainer>
    );
}

export default HomePage;
