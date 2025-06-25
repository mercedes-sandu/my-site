import {
  Box,
  Container,
  IconButton,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import Copyright from "../components/Copyright";
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
              disableRipple
              disableFocusRipple
              disableTouchRipple
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
              disableRipple
              disableFocusRipple
              disableTouchRipple
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
              disableRipple
              disableFocusRipple
              disableTouchRipple
              sx={{
                backgroundColor: "transparent",
                padding: 0,
                mr: 10,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              href="https://bsky.app/profile/mercedessandu.com"
              target="_blank"
            >
              <SvgIcon
                sx={{
                  color: theme.palette.secondary.main,
                  height: "44px",
                  transition: "color 0.2s ease-in-out",
                  width: "44px",
                  "&:hover": { color: theme.palette.text.primary },
                }}
              >
                <svg
                  width="34"
                  height="30"
                  viewBox="0 0 34 30"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_114_2)">
                    <path
                      d="M7.36193 2.01934C11.2553 4.95237 15.4437 10.8984 16.981 14.0893C18.5184 10.8984 22.707 4.95237 26.6003 2.01934C29.4102 -0.0964752 33.9622 -1.73403 33.9622 3.476C33.9622 4.51616 33.3678 12.2171 33.0188 13.4676C31.8068 17.8134 27.3889 18.922 23.4595 18.2512C30.3282 19.424 32.0753 23.3083 28.3018 27.1928C21.1352 34.5706 18.0011 25.3418 17.1987 22.9771C16.9672 22.2964 17.0003 22.2808 16.7635 22.9771C15.961 25.3418 12.8271 34.5706 5.66056 27.1928C1.8869 23.3083 3.63403 19.424 10.5028 18.2512C6.5733 18.922 2.15548 17.8134 0.943449 13.4676C0.594473 12.2171 0 4.51616 0 3.476C0 -1.73403 4.55261 -0.0964752 7.36193 2.01934Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_114_2">
                      <rect width="33.9622" height="30" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </SvgIcon>
            </IconButton>
            <IconButton
              disableRipple
              disableFocusRipple
              disableTouchRipple
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
      <Copyright isMobile={isMobile} />
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
            disableRipple
            disableFocusRipple
            disableTouchRipple
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
            disableRipple
            disableFocusRipple
            disableTouchRipple
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
            disableRipple
            disableFocusRipple
            disableTouchRipple
            sx={{
              backgroundColor: "transparent",
              padding: 0,
              mr: 5,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            href="https://bsky.app/profile/mercedessandu.com"
            target="_blank"
          >
            <SvgIcon
              sx={{
                color: theme.palette.secondary.main,
                height: "24px",
                transition: "color 0.2s ease-in-out",
                width: "24px",
                "&:hover": { color: theme.palette.text.primary },
              }}
            >
              <svg
                width="34"
                height="30"
                viewBox="0 0 34 30"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_114_2)">
                  <path
                    d="M7.36193 2.01934C11.2553 4.95237 15.4437 10.8984 16.981 14.0893C18.5184 10.8984 22.707 4.95237 26.6003 2.01934C29.4102 -0.0964752 33.9622 -1.73403 33.9622 3.476C33.9622 4.51616 33.3678 12.2171 33.0188 13.4676C31.8068 17.8134 27.3889 18.922 23.4595 18.2512C30.3282 19.424 32.0753 23.3083 28.3018 27.1928C21.1352 34.5706 18.0011 25.3418 17.1987 22.9771C16.9672 22.2964 17.0003 22.2808 16.7635 22.9771C15.961 25.3418 12.8271 34.5706 5.66056 27.1928C1.8869 23.3083 3.63403 19.424 10.5028 18.2512C6.5733 18.922 2.15548 17.8134 0.943449 13.4676C0.594473 12.2171 0 4.51616 0 3.476C0 -1.73403 4.55261 -0.0964752 7.36193 2.01934Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_114_2">
                    <rect width="33.9622" height="30" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </SvgIcon>
          </IconButton>
          <IconButton
            disableRipple
            disableFocusRipple
            disableTouchRipple
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
      <Copyright isMobile={isMobile} />
    </Container>
  );
}

export default HomePage;
