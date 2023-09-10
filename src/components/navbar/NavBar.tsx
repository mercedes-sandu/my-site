import { useState } from "react";
import { 
    StyledDarkMode,
    StyledIconButton,
    StyledLightMode,
    StyledMenu,
    StyledNavBar,
    StyledNavLink,
} from "../../styles/NavBar";
import { Box, Container, useTheme, Toolbar, Typography } from "@mui/material";
import Resume from "../resume-mercedes-sandu.pdf";

function NavBar() {
    const theme = useTheme();

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return (
      <StyledNavBar>
        <Container 
          maxWidth="xl"
          sx={{
            "&.MuiContainer-root": {
              paddingLeft: "2rem",
              paddingRight: "2rem",
            },
          }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: theme.palette.text.primary,
                textDecoration: "none",
              }}
            >
              Mercedes Sandu
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "row-reverse",
              }}
            >
              <StyledIconButton
                sx={{
                  marginRight: 0,
                }}
              >
                <StyledLightMode />
              </StyledIconButton>
              <Typography
                noWrap
                component="a"
                href={Resume}
                sx={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  alignSelf: "center",
                  marginLeft: "2rem",
                  "&:hover": {
                    color: theme.palette.secondary[2],
                  },
                }}
                target="_blank"
                rel="noopener"
              >
                Resume
              </Typography>
              <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
              <StyledNavLink to="/about">About</StyledNavLink>
              <StyledNavLink to="/">Home</StyledNavLink>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
              }}
            >
              <StyledIconButton>
                <StyledLightMode />
              </StyledIconButton>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                }}
              >
                Mercedes Sandu
              </Typography>
              <StyledIconButton>
                <StyledMenu />
              </StyledIconButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledNavBar>
    );
}

export default NavBar;
