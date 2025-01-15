import { Button, Icon, Typography, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import figma from "../assets/images/figma.svg";
import { ReactNode } from "react";

type IconType = "github" | "figma";

interface RepositoryButtonProps {
  url: string;
  name: string;
  showIcon?: boolean;
  type?: IconType;
}

function RepositoryButton({
  url,
  name,
  showIcon = true,
  type = "github",
}: RepositoryButtonProps) {
  const theme = useTheme();
  const icons: Record<IconType, ReactNode> = {
    github: <GitHubIcon sx={{ color: theme.palette.text.primary, mr: 2 }} />,
    figma: (
      <Icon sx={{ color: theme.palette.text.primary, mr: 2 }}>
        <img src={figma} alt="figma icon" height="24px" style={{ display: "flex", height: "inherit", width: "inherit" }} />
      </Icon>
    ),
  };

  return (
    <Button
      sx={{
        backgroundColor: "transparent",
        border: `2px solid ${theme.palette.secondary.main}`,
        mr: 2,
        borderRadius: 0,
        pl: 2,
        pr: 2,
        textTransform: "none",
        transition: "border-color 0.2s ease-in-out",
        "&:hover": {
          border: `2px solid ${theme.palette.text.primary}`,
          backgroundColor: "transparent",
        },
        // TODO: focus state
      }}
      href={url}
      target="_blank"
    >
      {showIcon ? icons[type] : null}
      <Typography variant="projectTag" color={theme.palette.text.primary}>
        {name}
      </Typography>
    </Button>
  );
}

export default RepositoryButton;
