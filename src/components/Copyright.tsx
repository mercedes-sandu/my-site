import { Box, Typography } from "@mui/material";

interface CopyrightProps {
  isMobile: boolean;
}

function Copyright({ isMobile }: CopyrightProps) {
  return !isMobile ? (
    <Box width="100%" position="fixed" bottom={10} left={0}>
      <Typography variant="body2" textAlign="right" paddingRight={2}>
        &copy; {new Date().getFullYear()} mercedes sandu. all rights reserved.
      </Typography>
    </Box>
  ) : (
    <Box width="100%">
      <Typography variant="body2" textAlign="center" paddingRight={0} paddingBottom={2}>
        &copy; {new Date().getFullYear()} mercedes sandu. all rights reserved.
      </Typography>
    </Box>
  );
}

export default Copyright;
