import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../assets/images/vertical bar dark long.svg";
import horizontalBarLight from "../assets/images/horizontal bar light.svg";
import horizontalBarDark from "../assets/images/horizontal bar dark.svg";
import { designs, type Design } from "./Designs";
import DesignCard from "../components/DesignCard";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { getTypographyVariant } from "../utility/responsive";

interface DesignPortfolioPageProps {
  darkMode: boolean;
  isMobile: boolean;
}

function DesignPortfolioPage({ darkMode, isMobile }: DesignPortfolioPageProps) {
  const theme = useTheme();
  const navigate = useNavigate();

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
      <Box sx={{ width: "5%" }}>
        <Box
          alt="vertical bar"
          component="img"
          src={darkMode ? verticalBarLightLong : verticalBarDarkLong}
          sx={{
            position: "fixed",
            top: "200px",
            width: "auto",
            maxHeight: "calc((100vh - 150px) * 0.9)",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "95%",
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
            <Typography variant={getTypographyVariant("h1")} sx={{ mb: 1 }}>
              design portfolio
            </Typography>
            <Typography
              variant={getTypographyVariant("h2")}
              color={theme.palette.secondary.main}
              sx={{ mb: 4 }}
            >
              websites and games
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {Object.values(designs).map(
              (design: Design) =>
                design.display && (
                  <DesignCard
                    key={design.title}
                    title={design.title}
                    description={design.description}
                    tags={design.tags}
                    onClick={() => navigate(`/design/${design.navTo}`)}
                    isMobile={false}
                    thumbnail={design.thumbnail}
                    alt={design.title}
                  />
                )
            )}
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  ) : (
    <Container
      sx={{
        position: "absolute",
        top: "120px",
        left: 0,
        width: "100%",
        display: "flex",
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
          mt: 10,
        }}
      >
        <Typography
          variant={getTypographyVariant("h1")}
          sx={{ color: theme.palette.text.primary, mb: 3 }}
        >
          design portfolio
        </Typography>
        <Typography
          variant={getTypographyVariant("h2")}
          sx={{ color: theme.palette.secondary.main, mb: 2 }}
        >
          websites and games
        </Typography>
        <Box
          component="img"
          height="50px"
          src={darkMode ? horizontalBarLight : horizontalBarDark}
          sx={{ mb: 3 }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {Object.values(designs).map(
            (design: Design) =>
              design.display && (
                <DesignCard
                  key={design.title}
                  title={design.title}
                  description={design.description}
                  tags={design.tags}
                  onClick={() => navigate(`/design/${design.navTo}`)}
                  isMobile
                  thumbnail={design.thumbnail}
                  alt={design.title}
                />
              )
          )}
        </Box>
        <Footer />
      </Box>
    </Container>
  );
}

export default DesignPortfolioPage;
