import { Link, styled } from "@mui/material";

export const StyledInlineLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "underline",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.secondary.main,
  },
  // TODO: focus state
}));
