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
    padding: "1rem 2rem 0 2rem",
    "&.MuiPaper-root": {
        boxShadow: "none",
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
    "&:hover": {
        color: theme.palette.secondary[2],
    },
    "&.active": {
        color: theme.palette.secondary[2],
    },
}));