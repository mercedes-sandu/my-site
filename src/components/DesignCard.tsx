import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { getTypographyVariant } from "../utility/responsive";

interface DesignCardProps {
  title: string;
  description: string;
  tags: string[];
  onClick?: () => void;
  isMobile: boolean;
  thumbnail: string;
  alt: string;
}

function DesignCard({
  title,
  description,
  tags,
  onClick,
  isMobile,
  thumbnail,
  alt,
}: DesignCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: isMobile ? "85%" : "40%",
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
        <Box
          width="100%"
          height="350px"
          sx={{ overflow: "hidden", padding: "30px" }}
        >
          <Box
            className="thumbnail"
            component="img"
            width="100%"
            height="100%"
            sx={{
              borderRadius: "15px",
              objectFit: "cover",
              objectPosition: "top center",
              transition: "all 2s ease-in-out",
              "&:hover": {
                objectPosition: "bottom center",
              },
            }}
            src={thumbnail}
            alt={alt}
          />
        </Box>
        <CardContent
          sx={{
            width: "100%",
            height: "100%",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant={getTypographyVariant("cardHeader")}
            sx={{ mb: 2 }}
          >
            {title}
          </Typography>
          <Typography
            variant={getTypographyVariant("cardBody")}
            sx={{ mb: 2 }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexWrap: "wrap",
              mt: 2,
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
                }}
                key={tag}
              >
                <Typography variant={getTypographyVariant("cardTag")}>
                  {tag}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DesignCard;
