import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import portraitLight from "../assets/images/portrait light.webp";
import portraitDark from "../assets/images/portrait dark.webp";
import portraitLightMobile from "../assets/images/portrait circle light.webp";
import portraitDarkMobile from "../assets/images/portrait circle dark.webp";
import { Typewriter } from "react-simple-typewriter";
import verticalBarLight from "../assets/images/vertical bar light.svg";
import verticalBarDark from "../assets/images/vertical bar dark.svg";
import horizontalBarLight from "../assets/images/horizontal bar light.svg";
import horizontalBarDark from "../assets/images/horizontal bar dark.svg";
import { InlineNavLink } from "../components/StyledComponents";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { getTypographyVariant } from "../utility/responsive";

interface HomePageProps {
  darkMode: boolean;
  isMobile: boolean;
}

function HomePage({ darkMode, isMobile }: HomePageProps) {
  const theme = useTheme();

  return !isMobile ? (
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
            variant={getTypographyVariant("h1")}
            sx={{ color: theme.palette.text.primary, mb: 1 }}
          >
            hi, i'm mercedes
          </Typography>
          <Box sx={{ mb: 4, textIndent: "0px" }}>
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
          <Typography
            variant={getTypographyVariant("body1")}
            sx={{ textIndent: "0px" }}
          >
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
  ) : (
    <Container
      sx={{
        position: "absolute",
        top: "120px",
        left: 0,
        width: "100%",
        height: "calc(100% - 120px)",
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant={getTypographyVariant("h1")}
          sx={{ color: theme.palette.text.primary, mb: 3 }}
        >
          hi, i'm mercedes
        </Typography>
        <Box
          component="img"
          src={darkMode ? portraitLightMobile : portraitDarkMobile}
          width="auto"
          height="auto"
          maxWidth="65%"
          sx={{ mb: 3 }}
        />
        <Box sx={{ mb: 3, textIndent: "0px" }}>
          <span
            style={{
              fontFamily: "Meqanor",
              color: theme.palette.secondary.main,
              fontSize: "22px",
              textAlign: "center",
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
        <Typography
          variant={getTypographyVariant("description")}
          sx={{ textIndent: "0px", mb: 1 }}
        >
          i'm a software and video game developer with a passion for math,
          computer science, art, and music. look around to learn more{" "}
          <InlineNavLink to="/about">about me</InlineNavLink> and my{" "}
          <InlineNavLink to="/portfolio">projects</InlineNavLink>!
        </Typography>
        <Box
          height="50px"
          component="img"
          src={darkMode ? horizontalBarLight : horizontalBarDark}
          sx={{ mb: 3 }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "transparent",
              color: theme.palette.secondary.main,
              transition: "color 0.2s ease-in-out",
              padding: 0,
              mr: 5,
              "&:hover": {
                backgroundColor: "transparent",
                color: theme.palette.text.primary,
              },
            }}
            href="https://www.linkedin.com/in/mercedes-sandu"
            target="_blank"
          >
            <LinkedInIcon sx={{ width: "30px", height: "30px" }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "transparent",
              color: theme.palette.secondary.main,
              transition: "color 0.2s ease-in-out",
              padding: 0,
              mr: 5,
              "&:hover": {
                backgroundColor: "transparent",
                color: theme.palette.text.primary,
              },
            }}
            href="https://github.com/mercedes-sandu"
            target="_blank"
          >
            <GitHubIcon sx={{ width: "30px", height: "30px" }} />
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
            <EmailIcon sx={{ width: "30px", height: "30px" }} />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
