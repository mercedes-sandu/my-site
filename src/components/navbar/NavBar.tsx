import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
    StyledDarkMode,
    StyledIconButton,
    StyledLightMode,
    StyledMenu,
    StyledNavBar,
    StyledNavLink,
} from "../../styles/NavBar";
import { Box, Container, useTheme, Toolbar, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Resume from "../resume-mercedes-sandu.pdf";

const pages = ["Home", "About", "Portfolio", "Resume"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
    // const [isNavExpanded, setIsNavExpanded] = useState(false);
    // const [isLightMode, setIsLightMode] = useState(false);

    // const theme = useTheme();
    // const isMobile = theme.breakpoints.down("md");

    // function modeToggle(lightMode: boolean) {
    //     setIsLightMode(lightMode);
    //     console.log(`set mode to ${lightMode ? "light" : "dark"}`);
    // }

    // return (
    //     <StyledNavBar>
    //         <StyledLogo to="/" className="logo" aria-label="Mercedes Sandu">
    //             Mercedes Sandu
    //         </StyledLogo>
    //         <StyledIconButton 
    //             onClick={() => {
    //                 modeToggle(!isLightMode);
    //             }}
    //         >
    //             {isLightMode ? (
    //                 <StyledDarkMode />
    //             ) : (
    //                 <StyledLightMode />
    //             )}
    //         </StyledIconButton>
    //         {/* <StyledIconButton 
    //             aria-label="menu"
    //             onClick={() => {
    //                 setIsNavExpanded(!isNavExpanded);
    //             }}
    //         >
    //             <StyledMenu />
    //         </StyledIconButton> */}
    //         {/* <div 
    //             className={isNavExpanded 
    //                 ? "navigation-menu expanded"
    //                 : "navigation-menu"
    //             }
    //         >
    //             <ul>
    //                 <li>
    //                     <NavLink to="/">Home</NavLink>
    //                 </li>
    //                 <li>
    //                     <NavLink to="/about">About</NavLink>
    //                 </li>
    //                 <li>
    //                     <NavLink to="/portfolio">Portfolio</NavLink>
    //                 </li>
    //                 <li>
    //                     <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
    //                 </li>
    //             </ul>
    //         </div> */}
    //     </StyledNavBar>
    // )

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

  // return (
  //   <StyledNavBar>
  //     <Container maxWidth="xl">
  //       <Toolbar disableGutters>
  //         <Typography
  //           variant="h6"
  //           noWrap
  //           component="a"
  //           href="/"
  //           sx={{
  //             mr: 2,
  //             display: { xs: 'none', md: 'flex' },
  //             fontWeight: 700,
  //             color: theme.palette.text.primary,
  //             textDecoration: 'none',
  //           }}
  //         >
  //           Mercedes Sandu
  //         </Typography>

  //         {/* mobile */}
  //         <Box 
  //           sx={{
  //             flexGrow: 1,
  //             display: { xs: 'flex', md: 'none' },
  //           }}
  //         >
  //           <IconButton
  //             size="large"
  //             aria-label="account of current user"
  //             aria-controls="menu-appbar"
  //             aria-haspopup="true"
  //             onClick={handleOpenNavMenu}
  //             color="inherit"
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Menu
  //             id="menu-appbar"
  //             anchorEl={anchorElNav}
  //             anchorOrigin={{
  //               vertical: 'bottom',
  //               horizontal: 'left',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'left',
  //             }}
  //             open={Boolean(anchorElNav)}
  //             onClose={handleCloseNavMenu}
  //             sx={{
  //               display: { xs: 'block', md: 'none' },
  //             }}
  //           >
  //             {pages.map((page) => (
  //               <MenuItem key={page} onClick={handleCloseNavMenu}>
  //                 <Typography textAlign="center">{page}</Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //         <Typography
  //           variant="h5"
  //           noWrap
  //           component="a"
  //           href="/"
  //           sx={{
  //             mr: 2,
  //             display: { xs: 'flex', md: 'none' },
  //             flexGrow: 1,
  //             fontWeight: 700,
  //             color: 'inherit',
  //             textDecoration: 'none',
  //           }}
  //         >
  //           LOGO
  //         </Typography>
  //         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //           {pages.map((page) => (
  //             <Button
  //               key={page}
  //               onClick={handleCloseNavMenu}
  //               sx={{ my: 2, color: 'white', display: 'block' }}
  //             >
  //               {page}
  //             </Button>
  //           ))}
  //         </Box>

  //         <Box sx={{ flexGrow: 0 }}>
  //           <Tooltip title="Open settings">
  //             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
  //               <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
  //             </IconButton>
  //           </Tooltip>
  //           <Menu
  //             sx={{ mt: '45px' }}
  //             id="menu-appbar"
  //             anchorEl={anchorElUser}
  //             anchorOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'right',
  //             }}
  //             open={Boolean(anchorElUser)}
  //             onClose={handleCloseUserMenu}
  //           >
  //             {settings.map((setting) => (
  //               <MenuItem key={setting} onClick={handleCloseUserMenu}>
  //                 <Typography textAlign="center">{setting}</Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //       </Toolbar>
  //     </Container>
  //   </StyledNavBar>
  // );
}

export default NavBar;