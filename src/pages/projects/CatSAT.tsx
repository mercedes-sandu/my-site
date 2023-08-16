import { Grid, Link, List, ListItem, Typography } from "@mui/material";

function CatSAT() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h2">
                        CatSAT
                    </Typography>
                    <Typography variant="h5">
                        A SAT solver used for narrative and games.
                    </Typography>
                    <Typography variant="h6">
                        March 2023 to Present | Computer Science Research
                    </Typography>
                    <Typography variant="body1">
                        CatSAT is a program created by <Link href="">Dr. Ian Horswill</Link> designed to solve constraint satisfaction 
                        problems, particularly in the context of procedural content generation for games. It is a declarative language, 
                        which means that the user specifies the state space of the problem and the constraints that must be satisfied, 
                        and the program will generate one or more models/solutions. I have primarily encountered CatSAT by working on 
                        Imaginarium, which does use CatSAT to generate models.
                    </Typography>
                    <Typography variant="body1">
                        After working with Imaginarium for a few months during my graduate research for my M.S. in Computer Science with 
                        Dr. Horswill, we had some discussions about what additional types of constraints one would want to impose when 
                        using a program such as Imaginarium. In particular, Dr. Horswill was interested in imposing relationship/graph 
                        constraints. This means that, when generating multiple entities and relationships between them, the user could 
                        specify constraints such as "these two people must have some sort of relationship," "there must be a love triangle,"
                        or "these two people cannot be connected by any relationship." Imposing constraints like this involves the 
                        transitive closure, which due to being a binary relation, cannot be expressed using first-order logic (like the 
                        rest of boolean-based SAT solving).
                    </Typography>
                    <Typography variant="body1">
                        I am currently working on creating new types of graph constraint classes to accomplish this. So far, I have 
                        programmed some basic classes for a graph and a union find data structure. During the summer, I have worked on 
                        developing a graph connected constraint class, whcih would be used to handle situations in which all generated 
                        entities must be connected. It must handle situations in which the SAT solver is attempting to flip a variable 
                        (which, in this case, means either adding an edge to or removing an edge from the graph). The entire structure 
                        requires the maintenance of a spanning tree, and since rebuilding a spanning tree after an edge removal is 
                        very expensive, we factor in a cost/risk function to avoid this situation as much as possible. I have recently 
                        completed this class and written tests for a variety of different scenarios. 
                    </Typography>
                    <Typography>
                        Next, I want to work on a constraint that requires two specific nodes of the graph to be connected via some 
                        path, which can be further restricted by path length. Furthermore, I intend to apply all of the graph constraints 
                        I develop to a small video game that I will design and develop as a part of my project.
                    </Typography>
                    <Typography variant="body1">
                        If you'd like to browse the code, feel free to take a look at the <Link href="">CatSAT</Link> repository, to which 
                        I will be contributing,
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default CatSAT;
