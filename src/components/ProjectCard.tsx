import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

interface ProjectCardProps {
  title: string;
  dates: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

function ProjectCard({ title, dates, description, tags, onClick }: ProjectCardProps) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "40%",
        height: "auto",
        minHeight: "300px",
        borderRadius: "30px",
        mb: 4,
        backgroundColor: theme.palette.background.default,
        boxShadow: "none",
        border: `2px solid ${theme.palette.text.primary}`,
        transition: "background-color 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          cursor: "pointer",
        },
        // TODO: focus state
      }}
      onClick={onClick}
    >
      <CardActionArea
        sx={{
          width: "100%",
          height: "100%",
          "&:hover": { backgroundColor: "transparent" },
        }}
        disableRipple
      >
        <CardContent sx={{ width: "100%", height: "100%", padding: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Typography
            variant="cardSubheader"
            color={theme.palette.secondary.main}
          >
            {dates}
          </Typography>
          <Typography variant="cardHeader">{title}</Typography>
          <Typography variant="cardBody">{description}</Typography>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {tags.map((tag) => (
              <Box
                sx={{
                  height: "24px",
                  pl: "12px",
                  pr: "12px",
                  backgroundColor: "transparent",
                  border: `2px solid ${theme.palette.secondary.main}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 2,
                  mb: 2,
                }}
                key={tag}
              >
                <Typography variant="cardTag">{tag}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
