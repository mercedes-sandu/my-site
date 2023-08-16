import { Grid, Link, List, ListItem, Typography } from "@mui/material";

function SonglyBot() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h2">
                        SonglyBot
                    </Typography>
                    <Typography variant="h5">
                        A Discord.py bot for the Overture Games Discord server.
                    </Typography>
                    <Typography variant="h6">
                        July 2022 to Present | Overture Games
                    </Typography>
                    {/* Image here lol */}
                    <Typography variant="body1">
                        SonglyBot is a small Discord API Python bot that I developed to help foster a community in 
                        the <Link href="">Overture Games Discord server</Link>. I had a really fun time learning to use Python and 
                        Discord API to create this bot, as well as Amazon Web Services to host it 24/7. 
                    </Typography>
                    <Typography variant="h4">
                        Features Implemented
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>Assigning yourself roles by reacting wiht specific emojis</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Restricting access to the server until new members have read the rules</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Multiplayer Wordle (written in collaboration with my friend, <Link href="">Rhys</Link>)</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A scoreboard for minigames</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Responding to certain keywords, for the sake of inside jokes</ListItem>
                    </List>
                    <Typography variant="body1">
                        I certainly plan on expanding the bot and adding more features as we release our first game and the community grows! 
                        If you have any ideas, I would love to hear and discuss them!
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default SonglyBot;
