import { Grid, List, ListItem, Typography } from "@mui/material";
import { StyledInlineLink, StyledDate } from "../../styles/StyledComponents";

function Intervallic() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h2">
                        Intervallic
                    </Typography>
                    <Typography variant="h5">
                        A companion tool for musicians to practice while playing a fun video game.
                    </Typography>
                    <Typography variant="h6">
                        June 2022 to Present | Overture Games
                    </Typography>
                    {/* Image here lol */}
                    <Typography variant="body1">
                        Intervallic is Overture Games' first title. The game itself is a 2D runner that allows users to play their 
                        instrument to control an alien-robot-space cat and navigate through a level, dodging obstacles and collecting 
                        notes and records. The notes that are played correspond to vertical movement of the cat. For example, playing 
                        up on a scale allows the cat to move vertically upward, and playing down on a scale moves the cat vertically 
                        downward. This way, by the end of the level, the user has played through an entire song. The game currently 
                        allows input from any midi device as well as computer keyboard and mouse. We aim to implement touch screen 
                        input as well as generic audio input, so anyone with any instrument could play the game. You play as Starburst, 
                        a nerdy yet charming music-lover working to explore strange planets with her companion robot cat. As you continue 
                        playing, you make new friends and play more fun songs.
                    </Typography>
                    <Typography variant="body1">
                        I am one of the four founding members of Overture and one of three software developers. Apart from good coding 
                        practices and video game development, I have learned so much about the other aspects of creating a game, such as 
                        art, music, design, marketing, leadership, and project management. As a gameplay engineer, I have been primarily 
                        in charge of designing and implementing the main game mechanics and features as well as majority of the frontend 
                        aspects (UI/UX). In particular, I've programmed features like player movement, various UI menus, collectibles, 
                        obstacles, and in-game UI. There are also many other systems and features I have been developing:
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>A key signature and note system to be used with player input and level management/building</ListItem>
                        <ListItem sx={{ display: "list-item" }}>An accuracy and statistics system to be used for live feedback during gameplay and musical practice reports</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Support for different input processing modes and game modes, such as rhythm mode</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A level selector that displays player data and a level preview, for every available level</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A level generator that takes a midi file as input and places necessary game objects (collectibles and other movement objects) in the correct places to create a level</ListItem>
                        <ListItem sx={{ display: "list-item" }}>An in-level UI VFX and SFX feedback system</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A revamped main menu</ListItem>
                    </List>
                    <Typography variant="body1">
                        Through Overture and working on Intervallic, I have discovered how much I like startup environments and agile 
                        software development. It has been such a great experience to work with a small team and undergo the fast-paced 
                        development process. I am continuing to work part-time during the academic year to fulfill whatever will be needed 
                        for our early release, come Fall 2023. Our team has had many exciting opportunities to grow, such as partnering  
                        with <StyledInlineLink href="">ASCAP</StyledInlineLink> to develop our pitch detection. Our demo is now out on <StyledInlineLink href="">itch.io</StyledInlineLink> and <StyledInlineLink href="">Steam</StyledInlineLink>!
                    </Typography>
                    <Typography variant="body1">
                        If you'd like to learn more about Overture Games and Intervallic, feel free to check out our <StyledInlineLink href="">website</StyledInlineLink> and 
                        join our <StyledInlineLink href="">Discord server</StyledInlineLink>.
                    </Typography>
                    <Typography variant="h4">
                        Media
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>A podcast in <StyledInlineLink href="">Crain's Chicago business</StyledInlineLink>, <StyledDate>5/24/2023</StyledDate></ListItem>
                        <ListItem sx={{ display: "list-item" }}>An audio story featured in <StyledInlineLink href="">The Daily NU</StyledInlineLink>, <StyledDate>5/15/2023</StyledDate></ListItem>
                        <ListItem sx={{ display: "list-item" }}>An article featured on <StyledInlineLink href="">Scene + Heard</StyledInlineLink>, <StyledDate>5/5/2023</StyledDate></ListItem>
                        <ListItem sx={{ display: "list-item" }}>Our <StyledInlineLink href="">Steam page</StyledInlineLink>, <StyledDate>uploaded originally on 4/17/2023</StyledDate></ListItem>
                        <ListItem sx={{ display: "list-item" }}>Our demo on <StyledInlineLink href="">itch.io</StyledInlineLink>, <StyledDate>uploaded originally on 2/5/2023</StyledDate></ListItem>
                        <ListItem sx={{ display: "list-item" }}>An article featured in <StyledInlineLink href="">The Daily NU</StyledInlineLink>, <StyledDate>11/21/2022</StyledDate></ListItem>
                        <ListItem sx={{ display: "list-item" }}>Our success with <StyledInlineLink href="">Demo Day</StyledInlineLink> at Jumpstart at The Garage, <StyledDate>8/24/2022</StyledDate></ListItem>
                        <ListItem sx={{ display: "list-item" }}>Our <StyledInlineLink href="">team interview</StyledInlineLink> from Jumpstart at The Garage, 8/15/2022</ListItem>
                    </List>
                </Grid>
            </Grid>
        </>
    );
}

export default Intervallic;
