import { Box, Grid, Link, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

export const StyledFooter = styled(Box)(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    height: "10vh",
}));

export const StyledHomePageContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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