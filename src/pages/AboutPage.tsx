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
          left: 0,
          top: "150px",
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
            <Typography variant="h1">about me</Typography>
            <Typography variant="h2" color={theme.palette.secondary.main}>
              hello world!
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item md={6}>
              <Typography variant="body1">
                i'm a software and video game developer with a passion for math,
                computer science, art, and music. i graduated northwestern
                university with a double major in mathematics and computer
                science, a minor in chemistry, and an M.S. in computer science.
                while there, i worked as:
              </Typography>
              <List sx={{ listStyleType: "disc", pl: 2 }}>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    an undergraduate mathematics researcher investigating paper
                    folding in the field of discrete geometry
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    a graduate computer science researcher exploring the use of
                    logic programming and traditional AI in narrative-based
                    video games
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    a frontend lead and software engineer of intervallic at
                    overture games, a startup founded at the garage that creates
                    games to help make practice more fun for musicians
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1">
                currently, i work at abbott in itpdp (information technology
                professional development program). i'm doing software
                development and design work for my first rotation of the next
                six months.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutPage;
