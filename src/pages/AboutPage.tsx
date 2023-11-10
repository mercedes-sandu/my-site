import {
  StyledContainer,
  StyledFooter,
  StyledHeader,
  StyledHeaderSpan,
  StyledInlineLink,
  StyledItalicizedSpan,
  StyledParagraph,
} from "../styles/StyledComponents";
import { useNavigate } from "react-router-dom";
import Resume from "../components/resume-mercedes-sandu.pdf";

function AboutPage() {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <StyledContainer sx={{ pt: 8, pl: 20, pr: 20 }}>
      <StyledHeader variant="h1">
        About <StyledHeaderSpan>Me</StyledHeaderSpan>
      </StyledHeader>
      <StyledParagraph variant="body1">
        Hello World! I'm a senior at Northwestern University pursuing a double
        major in mathematics and computer science, a minor in chemistry, and an
        M.S. in computer science. I'm an undergraduate mathematics researcher
        looking into discrete geometry and a graduate computer science
        researcher exploring the use of AI in narrative based games. I love
        developing games and was formerly the Lead Frontend Engineer at{" "}
        <StyledInlineLink
          href="https://www.overture.games/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Overture Games
        </StyledInlineLink>
        , a startup founded at{" "}
        <StyledInlineLink
          href="https://www.thegarage.northwestern.edu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          The Garage
        </StyledInlineLink>{" "}
        at Northwestern making games to help make learning and practice more fun
        for musicians.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        I've worked on a handful of projects, many of which are works in
        progress. My projects are a mix of experimenting with tutorials,
        creating games and apps for class, and developing games and software for
        Overture. At Overture, I worked on and shipped a game called{" "}
        <StyledItalicizedSpan>
          <StyledInlineLink
            href="https://store.steampowered.com/app/2270460/Intervallic/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Intervallic
          </StyledInlineLink>
        </StyledItalicizedSpan>
        , which currently allows players to control an adorable
        robot-alien-space cat with input from a midi instrument. By the end of
        each level, the player will have played through an entire song! I have
        been playing piano for over 14 years now, and I can definitely say that
        working on this project has helped me practice more!
      </StyledParagraph>
      <StyledParagraph variant="body1">
        I love working with Unity and programming in C#, but I also have some
        experience with Python, HTML, CSS, JavaScript/TypeScript, Java, and many
        more. I am also familiar with many languages and programs used for math,
        such as LaTeX, Mathematica, and MatLab.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        I'm proud to say that I've been doing research since my first year at
        Northwestern. I've worked with professors in the mathematics and
        computer science departments, namely{" "}
        <StyledInlineLink
          href="https://sites.google.com/view/shuyi-weng/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Dr. Shuyi Weng
        </StyledInlineLink>{" "}
        and{" "}
        <StyledInlineLink
          href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/horswill-ian.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          Dr. Ian Horswill
        </StyledInlineLink>
        , respectively. My{" "}
        <StyledInlineLink
          href=""
          onClick={() => {
            routeChange("/portfolio/polygonal-folding");
          }}
        >
          math research
        </StyledInlineLink>{" "}
        explores the construction of three-dimensional shapes from
        two-dimensional polygons, which has been presented in both oral
        presentation and paper formats. My computer science research (
        <StyledInlineLink
          href=""
          onClick={() => {
            routeChange("/portfolio/imaginarium");
          }}
        >
          here
        </StyledInlineLink>{" "}
        and{" "}
        <StyledInlineLink
          href=""
          onClick={() => {
            routeChange("/portfolio/catsat");
          }}
        >
          here
        </StyledInlineLink>
        ) is being done in tandem with my Master's degree, and I am currently
        working on expanding{" "}
        <StyledInlineLink
          href="https://github.com/ianhorswill/Imaginarium"
          rel="noopener noreferrer"
          target="_blank"
        >
          Imaginarium
        </StyledInlineLink>{" "}
        and{" "}
        <StyledInlineLink
          href="https://github.com/ianhorswill/CatSAT"
          rel="noopener noreferrer"
          target="_blank"
        >
          CatSAT
        </StyledInlineLink>
        .
      </StyledParagraph>
      <StyledParagraph variant="body1">
        Now that you've read plenty about the work that I do, I'm sure you'd be
        surprised to find out that I have plenty of free time! In this free
        time, I love to play video games (
        <StyledItalicizedSpan>NieR: Automata</StyledItalicizedSpan>,{" "}
        <StyledItalicizedSpan>Persona 5 Royal</StyledItalicizedSpan>, and{" "}
        <StyledItalicizedSpan>Final Fantasy XVI</StyledItalicizedSpan> are some
        of my current favorites), shop, play piano,{" "}
        <StyledInlineLink
          href="https://musescore.com/user/917141/sheetmusic"
          rel="noopener noreferrer"
          target="_blank"
        >
          arrange music
        </StyledInlineLink>
        , create art (digital, traditional, and 3D!), and read.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        If you have any questions or comments, feel free to{" "}
        <StyledInlineLink href={`mailto:mxrcedes@gmail.com`}>
          email me
        </StyledInlineLink>{" "}
        or check out my{" "}
        <StyledInlineLink
          href={Resume}
          rel="noopener noreferrer"
          target="_blank"
        >
          resume
        </StyledInlineLink>
        ! I'd love to hear from you!
      </StyledParagraph>
      <StyledFooter></StyledFooter>
    </StyledContainer>
  );
}

export default AboutPage;
