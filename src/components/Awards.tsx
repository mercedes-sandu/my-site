import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { BoldText } from "./StyledComponents";

export interface Award {
  description: string;
  date: string;
  id: number;
}

interface AwardProps {
  awards: Award[];
}

function Awards({ awards }: AwardProps) {
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
        awards
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
        {awards.map((award) => (
          <ListItem
            sx={{ display: "list-item", padding: "0px" }}
            key={award.id}
          >
            <ListItemText
              primary={
                <Typography variant="projectP" sx={{ textIndent: "0px" }}>
                  {award.description}, <BoldText>{award.date}</BoldText>
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Awards;
