import { ListItemButton, ListItemText, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface DrawerNavbarButtonProps {
  label: string;
  linkTo?: string | null;
  hasFile?: boolean;
  file?: any | null;
  isModeToggle?: boolean;
  darkMode?: boolean;
  setDarkMode?: any;
  isCloseButton?: boolean;
  handleClose?: any;
}

function DrawerNavbarButton({
  label,
  linkTo,
  hasFile = false,
  file,
  isModeToggle = false,
  darkMode,
  setDarkMode,
  isCloseButton = false,
  handleClose,
}: DrawerNavbarButtonProps) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleFileOpen = () => {
    window.open(file, "_blank");
    handleClose();
  };

  const handleNav = () => {
    navigate(linkTo!);
    handleClose();
  };

  const handleModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ListItemButton
      sx={{
        borderBottom: isCloseButton
          ? "none"
          : `2px solid ${theme.palette.text.primary}`,
        width: "200px",
        height: "60px",
        padding: 0,
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      onClick={
        isCloseButton
          ? handleClose
          : isModeToggle
          ? handleModeToggle
          : hasFile
          ? handleFileOpen
          : handleNav
      }
      disableRipple
    >
      <ListItemText primary={label} />
    </ListItemButton>
  );
}

export default DrawerNavbarButton;
