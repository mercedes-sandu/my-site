import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import logoLight from "../assets/images/logo light.svg";
import logoDark from "../assets/images/logo dark.svg";
import logoMobileLight from "../assets/images/logo mobile light.svg";
import logoMobileDark from "../assets/images/logo mobile dark.svg";
import menuIconLight from "../assets/images/menu icon light.svg";
import menuIconDark from "../assets/images/menu icon dark.svg";
import horizontalBarLight from "../assets/images/navbar horizontal bar light.svg";
import horizontalBarDark from "../assets/images/navbar horizontal bar dark.svg";
import NavbarButton from "./NavbarButton";
import resume from "../assets/pdfs/resume-mercedes-sandu.pdf";
import { useState } from "react";
import DrawerNavbarButton from "./DrawerNavbarButton";

interface NavbarProps {
  darkMode: boolean;
  isMobile: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = 370;

function Navbar({ darkMode, isMobile, setDarkMode }: NavbarProps) {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) setMobileOpen(!mobileOpen);
  };

  return !isMobile ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: theme.palette.background.default,
        zIndex: 1000,
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
  ) : (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: theme.palette.background.default,
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: "40px",
            pl: "30px",
            pr: "30px",
            borderTop: `2px solid ${theme.palette.text.primary}`,
            borderBottom: `2px solid ${theme.palette.text.primary}`,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "transparent",
              color: theme.palette.text.primary,
              transition: "color 0.2s ease-in-out",
              padding: 0,
              "&:hover": {
                backgroundColor: "transparent",
                color: theme.palette.secondary.main,
              },
            }}
            onClick={handleDrawerToggle}
            disableRipple
          >
            <Box
              component="img"
              src={darkMode ? menuIconLight : menuIconDark}
            />
          </IconButton>
          <Box
            component="img"
            src={darkMode ? logoMobileLight : logoMobileDark}
          />
          <Box width="30px" height="26px" />
        </Box>
      </Box>
      <Box component="nav" sx={{ width: drawerWidth, flexShrink: 0 }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: "block",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: theme.palette.primary[1],
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "50px",
              pb: "50px",
            }}
          >
            <Box
              sx={{
                height: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={darkMode ? horizontalBarLight : horizontalBarDark}
              />
              <List>
                <ListItem sx={{ pt: 0, pb: 0 }}>
                  <DrawerNavbarButton
                    label="home"
                    linkTo="/"
                    handleClose={handleDrawerClose}
                  />
                </ListItem>
                <ListItem sx={{ pt: 0, pb: 0 }}>
                  <DrawerNavbarButton
                    label="about"
                    linkTo="/about"
                    handleClose={handleDrawerClose}
                  />
                </ListItem>
                <ListItem sx={{ pt: 0, pb: 0 }}>
                  <DrawerNavbarButton
                    label="portfolio"
                    linkTo="/portfolio"
                    handleClose={handleDrawerClose}
                  />
                </ListItem>
                <ListItem sx={{ pt: 0, pb: 0 }}>
                  <DrawerNavbarButton
                    label="resume"
                    hasFile
                    file={resume}
                    handleClose={handleDrawerClose}
                  />
                </ListItem>
              </List>
            </Box>
            <Box
              sx={{
                height: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <List>
                <ListItem sx={{ pt: 0, pb: 0 }}>
                  <DrawerNavbarButton
                    label={darkMode ? "dark theme" : "light theme"}
                    isModeToggle
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                  />
                </ListItem>
                <ListItem sx={{ pt: 0, pb: 0 }}>
                  <DrawerNavbarButton
                    label="close"
                    isCloseButton
                    handleClose={handleDrawerClose}
                  />
                </ListItem>
              </List>
              <Box
                component="img"
                src={darkMode ? horizontalBarLight : horizontalBarDark}
              />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
