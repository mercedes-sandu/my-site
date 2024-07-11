import { Button, Typography, useTheme } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface RepositoryButtonProps {
  url: string;
  name: string;
  showIcon?: boolean;
}

function RepositoryButton({
  url,
  name,
  showIcon = true,
}: RepositoryButtonProps) {
  const theme = useTheme();

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
      {showIcon ?? (
        <GitHubIcon sx={{ color: theme.palette.text.primary, mr: 2 }} />
      )}
      <Typography variant="projectTag" color={theme.palette.text.primary}>
        {name}
      </Typography>
    </Button>
  );
}

export default RepositoryButton;
