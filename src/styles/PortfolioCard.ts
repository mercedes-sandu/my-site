import { Card, Typography, styled } from "@mui/material";

export const StyledPortfolioCard = styled(Card)(({ theme }) => ({
    margin: "2rem 1rem 0 1rem",
    backgroundColor: theme.palette.primary[1],
    "&:hover": {
        backgroundColor: theme.palette.primary[2],
    }
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary[3],
    textAlign: "center",
}));