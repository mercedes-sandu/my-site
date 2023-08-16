import { Grid, Link, List, ListItem, Typography } from "@mui/material";

function Imaginarium() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h2">
                        Imaginarium
                    </Typography>
                    <Typography variant="h5">
                        An AI tool to generate entities for narrative and games.
                    </Typography>
                    <Typography variant="h6">
                        March 2022 to Present | Computer Science Research
                    </Typography>
                    {/* Image here lol */}
                    <Typography variant="body1">
                        Imaginarium is a program created by <Link href="">Dr. Ian Horswill</Link> designed to generate any fictional 
                        entity one could imagine for purposes such as (but not limited to) story creation, narrative development, and 
                        tabletop roleplaying games. I stumbled upon this project when taking a special topics in computer science 
                        class with him that focused on the role of AI in narrative-based games.
                    </Typography>
                    <Typography variant="body1">
                        We were asked to use Imaginarium to generate some characters and write a quick story. I was immediately hooked 
                        and intrigued by the fact that the "code" one writes in Imaginarium is structured English. There is no fancy 
                        notation or syntax to learn, which is what makes such a tool so powerful; it is accessible to anyone who knows 
                        English, regardless of coding experience. For reference, here is what an example of my code looks like:
                    </Typography>
                    {/* Image here lol */}
                    <Typography variant="body1">
                        In addition to creating entities, Imaginarium can also be used to generate relationships between said entities. 
                        If you were to generate characters, you could write something like "characters can love each other," and then 
                        generating at least two characters would result in a graph of characters as nodes and edges between them 
                        representing the relationships. Here is an example of such a relationship graph:
                    </Typography>
                    {/* Image here lol */}
                    <Typography variant="body1">
                        It happened to be the case that I was also starting to take interest in pursuing a combined degree (B.A. and M.S. 
                        in Computer Science) at Northwestern University, and reached out to Dr. Horswill to see if I could take a 
                        graduate-level research projects class with him as my advisor. Eventually, I decided that I would work on expanding 
                        Imaginarium's capabilities, in particular looking at the core of the code and the <Link href="">SAT solver</Link> 
                        that is used to generate constraint-based models.
                    </Typography>
                    <Typography variant="h4">
                        Features Implemented
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>Better gerund support (e.g., being able to say something like "happily being married is a way of knowing") for relationships</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Expanded domain and codomain cardinality for verbs in relationships to allow entities to relate to more than one other kind of entity</ListItem>
                    </List>
                    <Typography variant="h4">
                        Media
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>An "exists" predicate</ListItem>
                        <ListItem sx={{ display: "list-item" }}>An easier way to generate multiple kinds of entities at the same time</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Negation of verbs (e.g., "cannot," "must not," etc.)</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Improved UI of the Unity implementation</ListItem>
                        <ListItem sx={{ display: "list-item" }}>More robust documentation</ListItem>
                    </List>
                    <Typography variant="body1">
                        If you'd like to browse the code, feel free to take a look at the <Link href="">ImaginariumCore</Link> 
                        and <Link href="">Imaginarium</Link> repositories, to which I am slowly but surely contributing.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default Imaginarium;
