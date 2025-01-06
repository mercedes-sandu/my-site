import { Link, styled, ToggleButton } from "@mui/material";
import { NavLink } from "react-router-dom";

export const InlineLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "underline",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.secondary.main,
  },
  // TODO: focus state
}));

export const InlineNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "underline",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.secondary.main,
  },
  // TODO: focus state
}));

export const ItalicText = styled("span")(({ theme }) => ({
  fontStyle: "italic",
  color: theme.palette.text.primary,
}));

export const BoldText = styled("span")(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.secondary.main,
}));

export const StyledTagButton = styled(ToggleButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  outline: `2px solid ${theme.palette.secondary.main}`,
  borderRadius: 0,
  textTransform: "none",
  width: "136px",
  height: "30px",
  transition: "outline-color 0.2s ease-in-out",
  textDecoration: "none",
  marginLeft: 0,
  "&.MuiToggleButton-root": {
    outline: `2px solid ${theme.palette.secondary.main}`,
    marginLeft: 0,
  },
  "&:hover": {
    outline: `2px solid ${theme.palette.text.primary}`,
    backgroundColor: "transparent",
  },
  "&.Mui-selected": {
    outline: `2px solid ${theme.palette.secondary.main}`,
    textDecoration: "underline",
    backgroundColor: "transparent",
  },
  "&.Mui-selected:hover": {
    outline: `2px solid ${theme.palette.text.primary}`,
    backgroundColor: "transparent",
  },
  // TODO: focus state
}));
