import { styled } from "@mui/material";

export const StyledHomePage = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px",
    overflowX: "hidden",
    boxSizing: "border-box",
}));