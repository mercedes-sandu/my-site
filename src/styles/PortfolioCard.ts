import { Box, Card, Grid, Typography, styled } from "@mui/material";

export const StyledCardGrid = styled(Grid)(({ theme }) => ({
    alignSelf: "center",
}));

export const StyledPortfolioCard = styled(Card)(({ theme }) => ({
    margin: "2rem 1rem 0 1rem",
    backgroundColor: theme.palette.primary[1],
    "&:hover": {
        backgroundColor: theme.palette.primary[2],
    },
    cursor: "pointer",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary[3],
    textAlign: "center",
}));

export const StyledDates = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary[2],
    textAlign: "center",
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textAlign: "justify",
}));

export const StyledTagsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
}));

export const StyledTag = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary[3],
    color: theme.palette.text.primary,
}));