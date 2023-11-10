import {
  StyledHeader,
  StyledHomePageContainer,
  StyledInlineLink,
} from "../styles/StyledComponents";
import { Box, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import {
  StyledAvatar,
  StyledEmail,
  StyledGitHub,
  StyledHalfContainer,
  StyledIconButton,
  StyledLinkedIn,
} from "../styles/HomePage";
import "../styles/HomePage.css";
import ProfilePicture from "../components/mercedes profile-modified.png";

function HomePage() {
  return (
    <StyledHomePageContainer container sx={{ pl: 20, pr: 20 }}>
      <StyledHalfContainer item md={6} sx={{ pr: 10 }}>
        <StyledHeader variant="h1" sx={{ mb: 1 }}>
          Hi! I'm Mercedes!
        </StyledHeader>
        <Box sx={{ mb: 6 }}>
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
        </Box>
        <Typography variant="body1" sx={{ mb: 8 }}>
          I'm a senior at Northwestern University with a passion for math,
          computer science, and software/video game development! Look around to
          learn more <StyledInlineLink href="/about">about me</StyledInlineLink>{" "}
          and my <StyledInlineLink href="/portfolio">projects</StyledInlineLink>
          !
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <StyledIconButton size="large" sx={{ mr: 6 }}>
            <StyledLinkedIn />
          </StyledIconButton>
          <StyledIconButton size="large" sx={{ mr: 6 }}>
            <StyledGitHub />
          </StyledIconButton>
          <StyledIconButton size="large">
            <StyledEmail />
          </StyledIconButton>
        </Box>
      </StyledHalfContainer>
      <StyledHalfContainer
        item
        md={6}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Grid item md={9}>
          <StyledAvatar src={ProfilePicture} alt="Mercedes Sandu" />
        </Grid>
      </StyledHalfContainer>
    </StyledHomePageContainer>
  );
}

export default HomePage;
