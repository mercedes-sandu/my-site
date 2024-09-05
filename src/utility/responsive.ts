import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useMobileMediaQuery = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));
};
