import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import verticalBarLightLong from "../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../assets/images/vertical bar dark long.svg";
import { projects, tags } from "./Projects";

interface PortfolioPageProps {
  darkMode: boolean;
}

function PortfolioPage({ darkMode }: PortfolioPageProps) {
  const theme = useTheme();

  // for filtering projects by tag: https://codesandbox.io/s/admiring-keldysh-dh1o0o?file=/src/App.js
  
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
              portfolio
            </Typography>
            <Typography
              variant="h2"
              color={theme.palette.secondary.main}
              sx={{ mb: 4 }}
            >
              my projects
            </Typography>
            <Typography variant="body1">
              below you'll find a collection of some projects i have completed
              and others that are still in progress. feel free to use the
              filters to sort them by programming language or topic.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {tags.map((tag) => (
                <Button
                  key={tag}
                  variant="outlined"
                  sx={{
                    color: theme.palette.text.primary,
                    border: `2px solid ${theme.palette.secondary.main}`,
                    borderRadius: 0,
                    textTransform: "none",
                    transition: "border-color 0.2s ease-in-out",
                    "&:hover": {
                      border: `2px solid ${theme.palette.text.primary}`,
                    },
                    // TODO: selected state
                    // TODO: focus state
                  }}
                >
                  <Typography variant="filterLabel">{tag}</Typography>
                </Button>
              ))}
            </Box>
          </Box>
          <Grid container spacing={8}>
            <Grid item md={6}></Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default PortfolioPage;
