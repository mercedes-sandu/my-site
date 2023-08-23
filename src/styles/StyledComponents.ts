import { Grid, Link, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    padding: "5rem 10rem 5rem 10rem",
    height: "100vh",
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

export const StyledHeaderSpan = styled("span")(({ theme }) => ({
    color: theme.palette.secondary[1],
}));

export const StyledInlineLink = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary[3],
}));

export const StyledDate = styled("span")(({ theme }) => ({
    color: theme.palette.text.secondary,
}));

export const StyledParagraph = styled(Typography)(({ theme }) => ({
    paddingTop: "2rem",
    textAlign: "justify",
    textIndent: "2rem",
}));