import { Link, styled } from "@mui/material";

export const StyledInlineLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "underline",
  "&:hover": {
    cursor: "pointer",
  },
  // TODO: focus state
}));
