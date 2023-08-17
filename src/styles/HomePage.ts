import { Avatar, styled } from "@mui/material";

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: "80%",
    height: "80%",
    aspectRatio: 1/1,
    border: `2px solid ${theme.palette.text.primary}`,
}));