import { Box, Typography } from "@mui/material";

interface CopyrightProps {
  isMobile: boolean;
}

function Copyright({ isMobile }: CopyrightProps) {
  return (
    <Box width="100%" position="fixed" bottom={10} left={0}>
      <Typography
        variant="body2"
        textAlign={isMobile ? "center" : "right"}
        paddingRight={isMobile ? 0 : 2}
      >
        &copy; {new Date().getFullYear()} mercedes sandu. all rights reserved.
      </Typography>
    </Box>
  );
}

export default Copyright;
