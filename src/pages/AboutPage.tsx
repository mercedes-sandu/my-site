import { Grid } from "@mui/material";
import {
  StyledContainer,
  StyledFooter,
  StyledHeader,
  StyledHeaderSpan,
  StyledInlineLink,
  StyledParagraph,
} from "../styles/StyledComponents";

function AboutPage() {
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
        developing games and am currently a gameplay engineer at{" "}
        <StyledInlineLink href="">Overture Games</StyledInlineLink>, a startup
        founded at <StyledInlineLink href="">The Garage</StyledInlineLink> at
        Northwestern making games to help make learning and practice more fun
        for musicians.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        I've worked on a handful of projects, many of which are works in
        progress. My projects are a mix of experimenting with tutorials,
        creating games and apps for class, and developing games and software for
        Overture. At Overture, I'm working on a game called{" "}
        <StyledInlineLink href="">Intervallic</StyledInlineLink>, which
        currently allows players to control an adorable robot-alien-space cat
        with input from a midi instrument. By the end of each level, the player
        will have played through an entire song! I have been playing piano for
        over 14 years now, and I can definitely say that working on this project
        has helped me practice more!
      </StyledParagraph>
      <StyledParagraph variant="body1">
        I love working with Unity and programming in C#, but I also have some
        experience with Python, HTML, CSS, JavaScript/TypeScript, Java, and many
        more. I am also familiar with many languages and programs used for math,
        such as LaTeX, Mathematica, and MatLab.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        I'm proud to say that I've been doing research since my first year at
        Northwestern. I've worked iwth professors in the mathematics and
        computer science departments, namely{" "}
        <StyledInlineLink href="">Dr. Shuyi Weng</StyledInlineLink> and{" "}
        <StyledInlineLink href="">Dr. Ian Horswill</StyledInlineLink>,
        respectively. My{" "}
        <StyledInlineLink href="">math research</StyledInlineLink> explores the
        construction of three-dimensional shapes from two-dimensional polygons,
        which has been presented in both oral presentation and paper formats. My{" "}
        <StyledInlineLink href="">computer science research</StyledInlineLink>{" "}
        is being done in tandem with my Master's degree, and I am currently
        working on expanding{" "}
        <StyledInlineLink href="">Imaginarium</StyledInlineLink> and{" "}
        <StyledInlineLink href="">CatSAT</StyledInlineLink>.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        Now that you've read plenty about the work that I do, I'm sure you'd be
        surprised to find out that I have plenty of free time! In this free
        time, I love to play video games (NieR: Automata, Persona 5 Royal, and
        Final Fantasy XVI are some of my current favorites), shop, play piano,{" "}
        <StyledInlineLink href="">arrange music</StyledInlineLink>, create art,
        and read.
      </StyledParagraph>
      <StyledParagraph variant="body1">
        If you have any questions or comments, feel free to{" "}
        <StyledInlineLink href="">email me</StyledInlineLink> or check out my{" "}
        <StyledInlineLink href="">resume</StyledInlineLink>! I'd love to hear
        from you!
      </StyledParagraph>
      <StyledFooter></StyledFooter>
    </StyledContainer>
  );
}

export default AboutPage;
