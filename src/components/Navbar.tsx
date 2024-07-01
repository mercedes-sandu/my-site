import { Box, useTheme } from "@mui/material";
import logoLight from "../assets/images/logo-light.svg";
import logoDark from "../assets/images/logo-dark.svg";
import NavbarButton from "./NavbarButton";
import resume from "../assets/pdfs/resume-mercedes-sandu.pdf";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: any;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          width="90px"
          height="50px"
          src={darkMode ? logoLight : logoDark}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: `2px solid ${theme.palette.text.primary}`,
          borderBottom: `2px solid ${theme.palette.text.primary}`,
        }}
      >
        <NavbarButton label="home" linkTo="/" first={true} />
        <NavbarButton label="about" linkTo="/about" />
        <NavbarButton label="portfolio" linkTo="/portfolio" />
        <NavbarButton label="resume" hasFile={true} file={resume} />
        <NavbarButton
          isModeToggle={true}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
