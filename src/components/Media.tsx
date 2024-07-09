import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { BoldText, InlineLink } from "./StyledComponents";

export interface Medium {
  description: string;
  date: string;
  url: string;
  id: number;
}

interface MediaProps {
  media: Medium[];
}

function Media({ media }: MediaProps) {
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
        media
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
        {media.map((medium) => (
          <ListItem
            sx={{ display: "list-item", padding: "0px" }}
            key={medium.id}
          >
            <ListItemText
              primary={
                <Typography variant="projectP" sx={{ textIndent: "0px" }}>
                  {medium.description} found{" "}
                  <InlineLink href={medium.url} target="_blank">
                    here
                  </InlineLink>
                  , <BoldText>{medium.date}</BoldText>
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Media;
