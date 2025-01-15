import { Box, Typography, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ImageProps {
  src: string;
  alt?: string;
  description?: string;
  fullWidth?: boolean;
}

function LargeImage({ src, alt, description, fullWidth = false }: ImageProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 4,
        mb: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: isMobile || fullWidth ? "100%" : "70%",
          maxHeight: fullWidth ? "auto" : "93vh",
          height: "auto",
          border: `2px solid ${theme.palette.text.primary}`,
          padding: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box component="img" src={src} alt={alt} width="100%" height="100%" />
      </Box>
      <Typography
        variant="largeImageDescription"
        sx={{ maxWidth: "70%", height: "auto", textAlign: "center" }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default LargeImage;
