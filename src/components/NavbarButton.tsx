import { Box, styled, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

interface NavbarButtonProps {
  label?: string | null;
  linkTo?: string | null;
  hasFile?: boolean;
  file?: any | null;
  isModeToggle?: boolean;
  darkMode?: boolean;
  setDarkMode?: any;
  first?: boolean;
}

function NavbarButton({
  label,
  linkTo,
  hasFile = false,
  file,
  isModeToggle = false,
  darkMode,
  setDarkMode,
  first = false,
}: NavbarButtonProps) {
  const theme = useTheme();

  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontFamily: "Cormorant Garamond",
    fontSize: "22px",
    fontWeight: 400,
    backgroundImage: `linear-gradient(${theme.palette.text.primary}, ${theme.palette.text.primary})`,
    backgroundPosition: "0% 100%",
    backgroundSize: "0% 1px",
    backgroundRepeat: "no-repeat",
    transition:
      "color 0.2s ease-in-out, background-size 0.3s, background-position 0s 0.3s",
    "&:hover": {
      color: theme.palette.text.primary,
      backgroundPosition: "100% 100%",
      backgroundSize: "100% 1px",
    },
    "&.active": {
      color: theme.palette.text.primary,
      backgroundPosition: "100% 100%",
      backgroundSize: "100% 1px",
    },
  }));

  return (
    <Box
      sx={{
        width: "200px",
        height: "100%",
        borderLeft: first ? `2px solid ${theme.palette.text.primary}` : "none",
        borderRight: `2px solid ${theme.palette.text.primary}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {hasFile ? (
        <Typography
          variant="navbarLabel"
          component="a"
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.text.primary,
            textDecoration: "none",
            backgroundImage: `linear-gradient(${theme.palette.text.primary}, ${theme.palette.text.primary})`,
            backgroundPosition: "0 100%",
            backgroundSize: "0 1px",
            backgroundRepeat: "no-repeat",
            transition:
              "color 0.2s ease-in-out, background-size 0.3s, background-position 0s 0.3s",
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.text.primary,
              backgroundPosition: "100% 100%",
              backgroundSize: "100% 1px",
            },
          }}
        >
          {label}
        </Typography>
      ) : isModeToggle ? (
        <Typography
          variant="navbarLabel"
          component="button"
          sx={{
            color: theme.palette.text.primary,
            backgroundColor: "transparent",
            border: "none",
            backgroundImage: `linear-gradient(${theme.palette.text.primary}, ${theme.palette.text.primary})`,
            backgroundPosition: "0 100%",
            backgroundSize: "0 1px",
            backgroundRepeat: "no-repeat",
            transition:
              "color 0.2s ease-in-out, background-size 0.3s, background-position 0s 0.3s",
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.text.primary,
              backgroundPosition: "100% 100%",
              backgroundSize: "100% 1px",
            },
          }}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "dark mode" : "light mode"}
        </Typography>
      ) : (
        <StyledNavLink to={linkTo ?? "/"}>{label}</StyledNavLink>
      )}
    </Box>
  );
}

export default NavbarButton;
