import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import verticalBarLightLong from "../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../assets/images/vertical bar dark long.svg";
import {
  InlineLink,
  InlineNavLink,
  ItalicText,
} from "../components/StyledComponents";

interface AboutPageProps {
  darkMode: boolean;
}

function AboutPage({ darkMode }: AboutPageProps) {
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
      <Box
        component="img"
        src={darkMode ? verticalBarLightLong : verticalBarDarkLong}
        sx={{
          position: "fixed",
          left: "150px",
          top: "200px",
          width: "auto",
          maxHeight: "calc((100vh - 150px) * 0.9)",
        }}
      />
      <Box
        sx={{
          width: "calc(100% - 50px)",
          height: "75%",
          display: "flex",
          pl: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Typography variant="h1" sx={{ mb: 1 }}>
              about me
            </Typography>
            <Typography
              variant="h2"
              color={theme.palette.secondary.main}
              sx={{ mb: 4 }}
            >
              hello world!
            </Typography>
          </Box>
          <Grid container spacing={8}>
            <Grid item md={6}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                i'm a software and video game developer with a passion for math,
                computer science, art, and music. i graduated{" "}
                <InlineLink
                  href="https://www.northwestern.edu/"
                  target="_blank"
                >
                  northwestern university
                </InlineLink>{" "}
                with a double major in mathematics and computer science, a minor
                in chemistry, and an M.S. in computer science. while there, i
                worked as:
              </Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  pl: 2,
                  "&.MuiList-root": {
                    pt: 0,
                    pb: 0,
                  },
                }}
              >
                <ListItem
                  sx={{
                    display: "list-item",
                    "&.MuiListItem-root": {
                      pt: 0,
                      pb: 0,
                    },
                  }}
                >
                  <ListItemText>
                    {/* TODO: add link to math research project page */}
                    an undergraduate{" "}
                    <InlineLink>mathematics researcher</InlineLink>{" "}
                    investigating paper folding in the field of discrete
                    geometry
                  </ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                    "&.MuiListItem-root": {
                      pt: 0,
                      pb: 0,
                    },
                  }}
                >
                  <ListItemText>
                    {/* TODO: add link to comp sci research project page */}a
                    graduate{" "}
                    <InlineLink>computer science researcher</InlineLink>{" "}
                    exploring the use of logic programming and traditional AI in
                    narrative-based video games
                  </ListItemText>
                </ListItem>
                <ListItem
                  sx={{
                    display: "list-item",
                    "&.MuiListItem-root": {
                      pt: 0,
                      pb: 0,
                    },
                  }}
                >
                  <ListItemText>
                    a frontend lead and software engineer of{" "}
                    <InlineLink>intervallic</InlineLink> at{" "}
                    <InlineLink
                      href="https://www.overture.games/"
                      target="_blank"
                    >
                      overture games
                    </InlineLink>
                    , a startup founded at{" "}
                    <InlineLink
                      href="https://www.thegarage.northwestern.edu/"
                      target="_blank"
                    >
                      the garage
                    </InlineLink>{" "}
                    that creates games to help make practice more fun for
                    musicians
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                currently, i work at{" "}
                <InlineLink href="https://www.abbott.com" target="_blank">
                  abbott
                </InlineLink>{" "}
                in{" "}
                <InlineLink
                  href="https://www.abbott.com/careers/students/development-programs.html"
                  target="_blank"
                >
                  itpdp
                </InlineLink>{" "}
                (information technology professional development program). i'm
                doing software development and design work for my first rotation
                of the next six months.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                aside from my work, i love making video games and working on
                video game AI research. i adore collaborating with peers,
                participating in game jams, and writing about my findings and
                <InlineNavLink to="/portfolio">projects</InlineNavLink>.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                in my free time, i love to play video games (
                <ItalicText>NieR: Automata</ItalicText>,{" "}
                <ItalicText>Persona 5 Royal</ItalicText>, and{" "}
                <ItalicText>Final Fantasy XVI</ItalicText> are some of my
                favorites), play piano,{" "}
                <InlineLink
                  href="https://musescore.com/user/917141"
                  target="_blank"
                >
                  arrange music
                </InlineLink>
                , create art, and read.
              </Typography>
              <Typography variant="body1">
                questions or comments? feel free to{" "}
                <InlineLink href="mailto:mxrcedes@gmail.com">
                  email me
                </InlineLink>
                !
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutPage;
