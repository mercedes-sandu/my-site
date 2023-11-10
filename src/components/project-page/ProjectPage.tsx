import { useEffect, useState } from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { StyledInlineLink } from "../../styles/StyledComponents";
import { useParams } from "react-router-dom";
import { projects } from "../../jsons/projects";

function ProjectPage() {
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

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h5">{description}</Typography>
        <Typography variant="h6">
          {dates} | {organization}
        </Typography>
        <img src={coverImage} />
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              variant="body1"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        {readme && (
          <Typography variant="body1">
            <StyledInlineLink href={readme}>
              Read the README here
            </StyledInlineLink>
          </Typography>
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
          <Typography variant="body1">
            <StyledInlineLink href={repository}>
              View the repository here
            </StyledInlineLink>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default ProjectPage;
