import { Box, Container, Typography, useTheme } from "@mui/material";

interface PortfolioPageProps {
  darkMode: boolean;
}

function PortfolioPage({ darkMode }: PortfolioPageProps) {
  const theme = useTheme();
  return (
    <Container
      sx={{ position: "absolute", top: "150px", left: 0, width: "100%" }}
    >
      <Typography variant="h1">portfolio page</Typography>
    </Container>
  );
}

export default PortfolioPage;
