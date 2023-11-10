import { Box, Card, Grid, Typography, styled } from "@mui/material";

export const StyledCardGrid = styled(Grid)(({ theme }) => ({
    alignSelf: "center",
    maxWidth: "650px",
}));

export const StyledPortfolioCard = styled(Card)(({ theme }) => ({
    margin: "2rem 1rem 1rem 1rem",
    maxWidth: "650px",
    height: "320px",
    padding: "1rem 2rem",
    backgroundColor: theme.palette.primary[1],
    boxShadow: `2px 2px 20px ${theme.palette.primary[1]}`,
    borderRadius: "8px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
        backgroundColor: theme.palette.primary[2],
    },
    cursor: "pointer",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary[4],
    textAlign: "center",
}));

export const StyledDates = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary[3],
    textAlign: "center",
}));

export const StyledDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textAlign: "justify",
    height: "130px",
    display: "flex",
    alignItems: "center",
}));

export const StyledTagsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "1rem",
}));

export const StyledTag = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary[2],
    color: theme.palette.text.primary,
    borderRadius: "8px",
    padding: "0 8px",
    marginRight: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
}));

export const StyledDot = styled("span")(({ theme }) => ({
    width: "9px",
    height: "9px",
    backgroundColor: theme.palette.text.primary,
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "0.5rem",
}));