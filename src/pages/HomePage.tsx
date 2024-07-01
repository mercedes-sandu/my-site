import { Box, Container, Typography, useTheme } from "@mui/material";

function HomePage() {
  const theme = useTheme();
  return (
    <Container
      sx={{ position: "absolute", top: "150px", left: 0, width: "100%" }}
    >
      <Typography variant="h1">home page</Typography>
    </Container>
  );
}

export default HomePage;
