import { useEffect, useState } from "react";
import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import {
  StyledContainer,
  StyledFooter,
  StyledInlineLink,
  StyledParagraph,
} from "../../styles/StyledComponents";
import { useParams } from "react-router-dom";
import { projects } from "../../jsons/projects";
// import { interpretMxrkdown } from "../../utility/mxrkdownInterpreter";

function ProjectPage() {
  const theme = useTheme();

  const [title, setTitle] = useState("");
  const [dates, setDates] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [paragraphs, setParagraphs] = useState<string[] | null>(null);
  const [coverImage, setCoverImage] = useState<any | null>(null);
  const [screenshots, setScreenshots] = useState<any[] | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[] | null>(null);
  const [media, setMedia] = useState<string[] | null>(null);
  const [repository, setRepository] = useState<string | null>(null);
  const [id, setId] = useState(useParams().id);

  useEffect(() => {
    for (const [key, project] of Object.entries(projects)) {
      if (key === id) {
        setId(key);
        setTitle(project.title);
        setDates(project.dates);
        setOrganization(project.organization);
        setDescription(project.description);
        setParagraphs(project.paragraphs);
        setCoverImage(project.coverImage);
        setScreenshots(project.screenshots);
        setReadme(project.readme);
        setFeatures(project.features);
        setMedia(project.media);
        setRepository(project.repository);
      }
    }
  });

  // interpretMxrkdown("../../mxrkdowns/polygonal-folding.mxr");

  return (
    <StyledContainer sx={{ pt: 8, pl: 20, pr: 20 }}>
      <Typography
        variant="h1"
        color={theme.palette.secondary.main}
        sx={{ mb: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="h2"
        color={theme.palette.text.secondary}
        sx={{ mb: 2 }}
      >
        {description}
      </Typography>
      <Typography variant="h3" color={theme.palette.text.primary}>
        {dates} | {organization}
      </Typography>
      <img src={coverImage} />
      <Box sx={{ mt: 8 }}>
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <StyledParagraph
              key={index}
              variant="body1"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
      </Box>
      {readme && (
        <StyledParagraph variant="body1">
          Read the README{" "}
          <StyledInlineLink href={readme}>here</StyledInlineLink>
        </StyledParagraph>
      )}
      {features && (
        <List>
          {features.map((feature, index) => (
            <ListItem key={index} sx={{ display: "list-item" }}>
              {feature}
            </ListItem>
          ))}
        </List>
      )}
      {media && (
        <List>
          {media.map((medium, index) => (
            <ListItem key={index} sx={{ display: "list-item" }}>
              {medium}
            </ListItem>
          ))}
        </List>
      )}
      {screenshots &&
        screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} />
        ))}
      {repository && (
        <StyledParagraph variant="body1">
          View the repository{" "}
          <StyledInlineLink href={repository}>here</StyledInlineLink>
        </StyledParagraph>
      )}
      <StyledFooter />
    </StyledContainer>
  );
}

export default ProjectPage;
