import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import portrait from "../assets/images/portrait.webp";
import { Typewriter } from "react-simple-typewriter";
import verticalBar from "../assets/images/vertical bar.svg";
import { StyledInlineLink } from "../components/StyledComponents";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.svg";
import email from "../assets/images/email.svg";

function HomePage() {
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
          pl: "16vw",
          pr: "16vw",
        },
      }}
      maxWidth={false}
    >
      <Box sx={{ width: "55%", height: "100%", display: "flex" }}>
        <Box
          component="img"
          width="50px"
          src={verticalBar}
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
                fontSize: "40px",
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
            <StyledInlineLink>about me</StyledInlineLink> and my{" "}
            <StyledInlineLink>projects</StyledInlineLink>!
          </Typography>
          <Box sx={{ display: "flex" }}>
            <IconButton sx={{ padding: "none" }}>
              <Box component="img" width="50px" src={linkedin} />
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
          height="65%"
          src={portrait}
          alt="sci-fi portrait of me"
        />
      </Box>
    </Container>
  );
}

export default HomePage;
