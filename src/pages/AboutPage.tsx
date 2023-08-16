import { Grid, Link, Typography } from "@mui/material";
import "../styles/AboutPage.css";

function AboutPage() {
    return (
        <Grid container spacing={2}>
            <Grid item md={12}>
                <Typography variant="h2">
                    About Me
                </Typography>
                <Typography variant="body1">
                    Hello World! I'm a rising senior at Northwestern University pursuing a double major in 
                    mathematics and computer science, a minor in chemistry, and an M.S. in computer 
                    science. I'm an undergraduate mathematics researcher looking into discrete geometry 
                    and a graduate computer science researcher exploring the use of AI in narrative 
                    based games. I love developing games and am currently a gameplay engineer at <Link href="">Overture Games</Link>, 
                    a startup founded at <Link href="">The Garage</Link> at Northwestern making games to 
                    help make learning and practice more fun for musicians.
                </Typography>
                <Typography variant="body1">
                    I've worked on a handful of projects, many of which are works in progress. My 
                    projects are a mix of experimenting with tutorials, creating games and apps for class, 
                    and developing games and software for Overture. At Overture, I'm working on a 
                    game called <Link href="">Intervallic</Link>, which currently allows players to control 
                    an adorable robot-alien-space cat with input from a midi instrument. By the end of each 
                    level, the player will have played through an entire song! I have been playing piano 
                    for over 14 years now, and I can definitely say that working on this project has helped 
                    me practice more!
                </Typography>
                <Typography variant="body1">
                    I love working with Unity and programming in C#, but I also have some experience with 
                    Python, HTML, CSS, JavaScript/TypeScript, Java, and many more. I am also familiar with 
                    many languages and programs used for math, such as LaTeX, Mathematica, and MatLab.
                </Typography>
                <Typography variant="body1">
                    I'm proud to say that I've been doing research since my first year at Northwestern. 
                    I've worked iwth professors in the mathematics and computer science departments, 
                    namely <Link href="">Dr. Shuyi Weng</Link> and <Link href="">Dr. Ian Horswill</Link>, 
                    respectively. My <Link href="">math research</Link> explores the construction of 
                    three-dimensional shapes from two-dimensional polygons, which has been presented in both 
                    oral presentation and paper formats. My <Link href="">computer science research</Link> is 
                    being done in tandem with my Master's degree, and I am currently working on 
                    expanding <Link href="">Imaginarium</Link> and <Link href="">CatSAT</Link>.
                </Typography>
                <Typography variant="body1">
                    Now that you've read plenty about the work that I do, I'm sure you'd be surprised to 
                    find out that I have plenty of free time! In this free time, I love to play video games 
                    (NieR: Automata, Persona 5 Royal, and Final Fantasy XVI are some of my current favorites), 
                    shop, play piano, <Link href="">arrange music</Link>, create art, and read.
                </Typography>
                <Typography variant="body1">
                    If you have any questions or comments, feel free to <Link href="">email me</Link> or 
                    check out my <Link href="">resume</Link>! I'd love to hear from you!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default AboutPage;
