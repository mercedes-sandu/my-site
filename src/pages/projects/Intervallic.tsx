import { Box, Container, Typography, useTheme } from "@mui/material";
import verticalBarLightLong from "../../assets/images/vertical bar light long.svg";
import verticalBarDarkLong from "../../assets/images/vertical bar dark long.svg";
import ErrorPage from "../ErrorPage";
import { projects } from "../Projects";
import Footer from "../../components/Footer";
import { InlineLink, ItalicText } from "../../components/StyledComponents";
import LargeImage from "../../components/LargeImage";
import Features from "../../components/Features";
import Media from "../../components/Media";
import RepositoryButton from "../../components/RepositoryButton";
import intervallicCoverImage from "../../assets/images/projects/intervallic-cover.webp";

interface ProjectPageProps {
  darkMode: boolean;
  projectKey: string;
}

function Intervallic({ darkMode, projectKey }: ProjectPageProps) {
  const project = projects[projectKey];

  if (!project) {
    return <ErrorPage />;
  }

  const theme = useTheme();

  const features = [
    {
      description:
        "a key signature and note system to be used with player input and level management/building",
      id: 0,
    },
    {
      description:
        "an accuracy and statistics system to be use dfor live feedback during gameplay and musical practice reports",
      id: 1,
    },
    {
      description:
        "support for different input processing modes and game modes, such as rhythm mode",
      id: 2,
    },
    {
      description:
        "a level selector that displays player data and a level preview, for every available level",
      id: 3,
    },
    {
      description:
        "a level generator that takes a midi file as input and places necessary game objects (collectibles and other movement objects) in the correct places to create a level",
      id: 4,
    },
    {
      description: "an in-level ui vfx and sfx feedback system",
      id: 5,
    },
    {
      description: "a new card-based main menu",
      id: 6,
    },
    {
      description:
        "a campaign system with linear progression and custom ui menus",
      id: 7,
    },
  ];

  const media = [
    {
      description: "an announcement about our partnership with techstars",
      date: "09/11/2023",
      url: "https://www.linkedin.com/posts/overture-games_techstars-accelerator-startup-activity-7107063944556511232-kasi?utm_source=share&utm_medium=member_desktop",
      id: 0,
    },
    {
      description: "an announcement about our partnership with ascap",
      date: "06/13/2023",
      url: "https://www.linkedin.com/posts/overture-games_music-ai-activity-7075157553386582017-HgEW?utm_source=share&utm_medium=member_desktop",
      id: 1,
    },
    {
      description: "a podcast in crain's chicago business",
      date: "05/24/2023",
      url: "https://www.chicagobusiness.com/crains-daily-gist/checking-startup-progress-northwesterns-garage",
      id: 2,
    },
    {
      description: "an audio story featured in the daily nu",
      date: "05/15/2023",
      url: "https://dailynorthwestern.com/2023/05/14/audio/nu-declassified-built-this-overture-games-aims-to-turn-practice-into-play/",
      id: 3,
    },
    {
      description: "an article featured on scene + heard",
      date: "05/05/2023",
      url: "https://www.sceneandheardnu.com/content/2023/5/5/the-next-generation-of-game-developers-talking-with-overture-games-about-inspiration-and-innovation",
      id: 4,
    },
    {
      description: "our steam page",
      date: "uploaded originally on 04/17/2023",
      url: "https://store.steampowered.com/app/2270460/Intervallic/",
      id: 5,
    },
    {
      description: "our demo on itch.io",
      date: "uploaded originally on 02/05/2023",
      url: "https://overturegames.itch.io/intervallic",
      id: 6,
    },
    {
      description: "an article featured in the daily nu",
      date: "11/21/2022",
      url: "https://dailynorthwestern.com/2022/11/21/photo/captured-glimpse-under-the-hood-the-garages-undergraduate-projects/#modal-photo",
      id: 7,
    },
    {
      description: "our success with demo day at jumpstart at the garage",
      date: "08/24/2022",
      url: "https://thegarage.northwestern.edu/news/jumpstart-2022-demo-day-wrap-up/",
      id: 8,
    },
    {
      description: "our team interview from jumpstart at the garage",
      date: "08/15/2022",
      url: "https://thegarage.northwestern.edu/news/overture-games-team-spotlight/",
      id: 9,
    },
  ];

  return (
    <Container
      sx={{
        position: "absolute",
        top: "150px",
        left: 0,
        width: "100%",
        height: "calc(100% - 150px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&.MuiContainer-root": {
          pl: "10vw",
          pr: "10vw",
        },
      }}
      maxWidth={false}
    >
      <Box
        component="img"
        src={darkMode ? verticalBarLightLong : verticalBarDarkLong}
        sx={{
          position: "fixed",
          left: "150px",
          top: "200px",
          width: "auto",
          maxHeight: "calc((100vh - 150px) * 0.9)",
        }}
      />
      <Box
        sx={{
          width: "calc(100% - 50px)",
          height: "75%",
          display: "flex",
          pl: 5,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="projectDates"
              color={theme.palette.secondary.main}
            >
              {project.dates}
            </Typography>
            <Typography variant="projectTitle" sx={{ mb: 6 }}>
              {project.title}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {project.tags.map((tag) => (
                <Box
                  sx={{
                    height: "30px",
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
                  <Typography variant="projectTag">{tag}</Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="projectDescription" sx={{ mb: 4 }}>
              {project.description}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LargeImage
              src={intervallicCoverImage}
              alt="intervallic cover art"
              description="intervallic cover art"
            />
            <Typography variant="projectP" sx={{ mb: 2 }}>
              <ItalicText>intervallic</ItalicText> is{" "}
              <InlineLink href="https://www.overture.games/" target="_blank">
                overture games'
              </InlineLink>{" "}
              first title. the game itself is a 2d runner that allows users to
              play their instrument to control an alien-robot-space cat and
              navigate through a level, dodging obstacles and collecting records
              and samples. the notes that are played correspond to vertical
              movement of the cat. for example, playing up on a scale allows the
              cat to move vertically upward, and playing down on a scale moves
              the cat vertically downward. this way, by the end of a level, the
              user has played through an entire song. the game currently allows
              input from any instrument, midi device, as well as computer
              keyboard and mouse. you play as starburst, a nerdy music-lover
              working to explore strange planets with her companion robot cat
              (who the player controls with their instrument). as you continue
              playing, you make new friends and play more fun songs, restoring
              the planet of audius.
            </Typography>
            <Typography variant="projectP" sx={{ mb: 2 }}>
              at overture, i worked as a gameplay software developer and got
              promoted to lead frontend engineer. during my time there, i
              learned extensively about many other aspects of game development,
              such as art, music, design, marketing, and funding. as a software
              developer, i was primarily in charge of designing and implementing
              the main game mechanics as well as majority of the frontend
              aspects (ui/ux). in particular, i programmed things like player
              movement, the main menu and pause menu, collectibles, obstacles,
              and in-game ui. i also developed the following systems:
            </Typography>
            <Features features={features} />
            <Typography variant="projectP" sx={{ mt: 4, mb: 2 }}>
              as frontend lead, i was responsible for doing all ui/ux design and
              communicating regularly with the art team to get both game assets
              and ui assets designed, scoped, and completed on time according to
              sprints and deadlines. i spent a lot of time understanding the
              digital art process, how long it takes, and how to coordinate
              better between the team's artists and designers.
            </Typography>
            <Typography variant="projectP">
              working on <ItalicText>intervallic</ItalicText> was a great
              experience where i learned to work with a small team and undergo a
              fast-paced development process. i worked there my junior and
              senior years of university, leading up to the release of{" "}
              <ItalicText>intervallic</ItalicText> in early access on october
              6th, 2023. you see the game's steam page{" "}
              <InlineLink
                href="https://store.steampowered.com/app/2270460/Intervallic"
                target="_blank"
              >
                here
              </InlineLink>
              !
            </Typography>
            <Media media={media} />
            <Box sx={{ mt: 4, width: "100%", height: "auto", display: "flex" }}>
              <RepositoryButton
                url="https://overture.games"
                name="overture games website"
                showIcon={false}
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
}

export default Intervallic;
