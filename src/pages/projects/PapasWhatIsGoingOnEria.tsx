import { Grid, Link, List, ListItem, Typography } from "@mui/material";

function PapasWhatIsGoingOnEria() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h2">
                        Papa's What-Is-Going-On-Eria
                    </Typography>
                    <Typography variant="h5">
                        A short cooking flash game about fulfilling restaurant orders with a twist.
                    </Typography>
                    <Typography variant="h6">
                        October 2022 | COMP_SCI 376-0: Game Design and Development
                    </Typography>
                    {/* Image here lol */}
                    <Typography variant="body1">
                        Papa's What-Is-Going-On-Eria is a game I made in a week for one of the freestyle projects in COMP_SCI 376-0. 
                        It is largely inspired by <Link href="">Papa's Pizzeria</Link>. you control a character in a top-down 2D 
                        kitchen, receiving randomized orders for burgers and soda. You must go to each station in the kitchen to 
                        receive and then make the order. The basic game loop is as follows: (1) go to the order counter to receive 
                        the ticket with all the order details, (2) go to the grill to prepare the meat that goes on the burger, (3) 
                        go to the cutting board to assemble the burger with all of the proper add-ons and condiments, (4) go to the 
                        soda machine to pour the correct soda in the cup, and (5) go to the lunch tray in order to serve the order. 
                        This process repeats over and over until your time runs out, so the goal is to complete as many orders as 
                        possible and thus maximize your score.
                    </Typography>
                    <Typography variant="body1">
                        As you complete orders, you may notice something slightly odd happening. It seems that every time you complete 
                        an order, one of the ingredients randomly gets corrupted and you can no longer use it! the corrupted ingredients 
                        may still pop up on the ticket, just try to carry on and ignore them.
                    </Typography>
                    <Typography variant="body1">
                        The game was made using Unity and C#. For more details and specific instructions/controls, please see 
                        the <Link href="">README file</Link> for the game.
                    </Typography>
                    <Typography variant="h4">
                        Features Implemented
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>Hand-drawn art using Procreate</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Randomized generation of orders using dynamic loading of prefabs and assets from the Resources folder</ListItem>
                        <ListItem sx={{ display: "list-item" }}>An interaction system that allows UI interfaces to pop up when interacting with different kitchen stations</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A top-down 2D movement environment</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Four different UI overlays for each station with specialized functionality</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A click-move-and-drop system to assemble the burger by placing items exactly where you wish them to be</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A timer that calls the end condition</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A customzied scoring system</ListItem>
                    </List>
                    <Typography variant="h4">
                        Screenshots
                    </Typography>
                    {/* Screenshots */}
                    <Typography variant="body1">
                        If you'd like to browse the code, feel free to take a look at the <Link href="">Papa's What-Is-Going-On-Eria</Link> repository.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default PapasWhatIsGoingOnEria;
