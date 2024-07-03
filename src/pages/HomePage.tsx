import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import portraitLight from "../assets/images/portrait light.webp";
import portraitDark from "../assets/images/portrait dark.webp";
import { Typewriter } from "react-simple-typewriter";
import verticalBarLight from "../assets/images/vertical bar light.svg";
import verticalBarDark from "../assets/images/vertical bar dark.svg";
import { InlineNavLink } from "../components/StyledComponents";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

interface HomePageProps {
  darkMode: boolean;
}

function HomePage({ darkMode }: HomePageProps) {
  const theme = useTheme();

  return (
    <Container
      sx={{
        position: "absolute",
        top: "150px",
        left: 0,
        width: "100%",
        height: "calc(100% - 150px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&.MuiContainer-root": {
          pl: "10vw",
          pr: "10vw",
        },
      }}
      maxWidth={false}
    >
      <Box sx={{ width: "55%", height: "100%", display: "flex" }}>
        <Box
          component="img"
          width="50px"
          src={darkMode ? verticalBarLight : verticalBarDark}
          alt="vertical bar"
        />
        <Box
          sx={{
            width: "calc(100% - 50px)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            pl: 5,
          }}
        >
          <Typography
            variant="h1"
            sx={{ color: theme.palette.text.primary, mb: 1 }}
          >
            hi, i'm mercedes
          </Typography>
          <Box sx={{ mb: 4 }}>
            <span
              style={{
                fontFamily: "Meqanor",
                color: theme.palette.secondary.main,
                fontSize: "34px",
              }}
            >
              <Typewriter
                words={[
                  "game developer",
                  "software developer",
                  "web developer",
                  "mathematician",
                  "computer scientist",
                  "artist",
                  "musician",
                ]}
                cursor
                loop={false}
              />
            </span>
          </Box>
          <Typography>
            i'm a software and video game developer with a passion for math,
            computer science, art, and music. look around to learn more{" "}
            <InlineNavLink to="/about">about me</InlineNavLink> and my{" "}
            <InlineNavLink to="/portfolio">projects</InlineNavLink>!
          </Typography>
          <Box sx={{ display: "flex", mt: 6 }}>
            <IconButton
              sx={{
                backgroundColor: "transparent",
                color: theme.palette.secondary.main,
                transition: "color 0.2s ease-in-out",
                padding: 0,
                mr: 10,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: theme.palette.text.primary,
                },
              }}
              href="https://www.linkedin.com/in/mercedes-sandu"
              target="_blank"
            >
              <LinkedInIcon sx={{ width: "50px", height: "50px" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "transparent",
                color: theme.palette.secondary.main,
                transition: "color 0.2s ease-in-out",
                padding: 0,
                mr: 10,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: theme.palette.text.primary,
                },
              }}
              href="https://github.com/mercedes-sandu"
              target="_blank"
            >
              <GitHubIcon sx={{ width: "50px", height: "50px" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "transparent",
                color: theme.palette.secondary.main,
                transition: "color 0.2s ease-in-out",
                padding: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: theme.palette.text.primary,
                },
              }}
              href="mailto:mxrcedes@gmail.com"
            >
              <EmailIcon sx={{ width: "50px", height: "50px" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "45%",
          height: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          minWidth="40%"
          width="auto"
          height="auto"
          maxHeight="60%"
          src={darkMode ? portraitLight : portraitDark}
          alt="sci-fi portrait of me"
        />
      </Box>
    </Container>
  );
}

export default HomePage;
