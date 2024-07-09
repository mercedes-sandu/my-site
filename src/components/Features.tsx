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
          ))}
        </List>
      </Box>
    );
  }
  
  export default Features;
  