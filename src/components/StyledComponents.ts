import { Link, styled } from "@mui/material";
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
