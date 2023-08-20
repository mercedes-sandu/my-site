import { Box, IconButton, styled } from "@mui/material";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled(Box)(({ theme }) => ({
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: "0 0.5rem 0",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    margin: "0 1rem 0 1rem",
    backgroundColor: theme.palette.primary[1],
    "&:hover": {
        backgroundColor: theme.palette.primary[2],
    },
    "&:focus": {
        border: `2px solid ${theme.palette.text.primary}`,
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

export const StyledLogo = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    marginLeft: "1rem",
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    marginLeft: "1rem",
    "&.active": {
        color: theme.palette.secondary.main,
    },
}));