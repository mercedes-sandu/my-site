import { 
    Avatar,
    Grid,
    IconButton,
    styled 
} from "@mui/material";
import { 
    Email,
    GitHub,
    LinkedIn,
} from "@mui/icons-material";

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: "100%",
    height: "100%",
    aspectRatio: 1/1,
    border: `2px solid ${theme.palette.text.primary}`,
}));

export const StyledHalfContainer = styled(Grid)(({ theme }) => ({
    alignSelf: "center",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.secondary[4],
    boxShadow: `2px 2px 20px ${theme.palette.secondary[3]}`,
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        backgroundColor: theme.palette.secondary[4],
        transform: "scale(1.05)",
    },
    "&:focus": {
        backgroundColor: theme.palette.secondary[4],
        outline: `2px solid ${theme.palette.text.primary}`,
    }
}));

export const StyledEmail = styled(Email)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "3rem",
}));

export const StyledGitHub = styled(GitHub)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "3rem",
}));

export const StyledLinkedIn = styled(LinkedIn)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "3rem",
}));