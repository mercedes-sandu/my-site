import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

export interface Feature {
  description: string;
  id: number;
  subFeatures?: Feature[];
}

interface FeatureProps {
  features: Feature[];
  toImplement?: boolean;
}

function Features({ features, toImplement = false }: FeatureProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        mt: 4,
      }}
    >
      <Typography
        variant="projectSubheader"
        color={theme.palette.secondary.main}
      >
        features {toImplement && "to implement"}
      </Typography>
      <List
        sx={{
          listStyleType: "disc",
          pl: 6,
          "&.MuiList-root": {
            pt: 0,
            pb: 0,
          },
        }}
      >
        {features.map((feature) => (
          <Box key={feature.id}>
            <ListItem
              sx={{ display: "list-item", padding: "0px" }}
              key={feature.id}
            >
              <ListItemText
                primary={
                  <Typography variant="projectP" sx={{ textIndent: "0px" }}>
                    {feature.description}
                  </Typography>
                }
              />
            </ListItem>
            {feature.subFeatures && (
              <List
                sx={{
                  listStyleType: "circle",
                  pl: 6,
                  "&.MuiList-root": {
                    pt: 0,
                    pb: 0,
                  },
                }}
              >
                {feature.subFeatures.map((subFeature) => (
                  <ListItem
                    sx={{ display: "list-item", padding: "0px" }}
                    key={subFeature.id}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="projectP"
                          sx={{ textIndent: "0px" }}
                        >
                          {subFeature.description}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
}

export default Features;
