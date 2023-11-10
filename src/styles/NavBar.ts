import { 
    AppBar,
    IconButton,
    styled,
} from "@mui/material";
import { 
    DarkMode,
    LightMode,
    Menu,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled(AppBar)(({ theme }) => ({
    position: "static",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    padding: "1rem 0",
    "&.MuiPaper-root": {
        boxShadow: "none",
    },
    "&.MuiContainer-root": {
        margin: 0,
    },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    margin: "0 2rem 0 2rem",
    width: "40px",
    height: "40px",
    backgroundColor: theme.palette.primary[1],
    "&:hover": {
        backgroundColor: theme.palette.primary[2],
    },
    "&:focus": {
        outline: `2px solid ${theme.palette.text.primary}`,
    },
}));

export const StyledDarkMode = styled(DarkMode)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

export const StyledLightMode = styled(LightMode)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
    color: theme.palette.text.primary,
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    alignSelf: "center",
    marginLeft: "2rem",
    fontFamily: "Open Sans",
    fontSize: "1.3rem",
    fontWeight: 400,
    lineHeight: "2.8rem",
    backgroundImage: `linear-gradient(${theme.palette.secondary[2]}, ${theme.palette.secondary[2]})`,
    backgroundPosition: "0% 100%",
    backgroundSize: "0% 2px",
    backgroundRepeat: "no-repeat",
    transition: "color 0.2s ease-in-out, background-size 0.3s, background-position 0s 0.3s",
    "&:hover": {
        color: theme.palette.secondary[2],
        backgroundPosition: "100% 100%",
        backgroundSize: "100% 2px",
    },
    "&.active": {
        color: theme.palette.secondary[2],
        backgroundPosition: "100% 100%",
        backgroundSize: "100% 2px",
    },
}));