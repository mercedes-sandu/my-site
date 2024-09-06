import { TypographyPropsVariantOverrides, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useMobileMediaQuery = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"));
};

export const getTypographyVariant = (desiredVariant: string) => {
  const isMobile = useMobileMediaQuery();
  return (
    isMobile ? `${desiredVariant}Mobile` : desiredVariant
  ) as keyof TypographyPropsVariantOverrides;
};
