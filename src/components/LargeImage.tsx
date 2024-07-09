import { Box, useTheme } from "@mui/material";

interface ImageProps {
  src: string;
  alt?: string;
}

function LargeImage({ src, alt }: ImageProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "content",
        mb: 4,
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "auto",
          border: `2px solid ${theme.palette.text.primary}`,
          padding: "12px", // TODO: tweak?
        }}
      >
        <Box component="img" src={src} alt={alt} width="100%" />
      </Box>
    </Box>
  );
}

export default LargeImage;
