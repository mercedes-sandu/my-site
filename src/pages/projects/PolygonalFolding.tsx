import { Grid, Link, List, ListItem, Typography } from "@mui/material";

function PolygonalFolding() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h2">
                        Polygonal Folding
                    </Typography>
                    <Typography variant="h5">
                        Findings related to paper folding and computational geometry.
                    </Typography>
                    <Typography variant="h6">
                        January 2021 to June 2023 | Mathematics Research
                    </Typography>
                    {/* Image here lol */}
                    <Typography variant="body1">
                        I was first introduced to research in the field of mathematics under the Northwestern Undergraduate Research 
                        Assistant Program (URAP) during my first year. I saw a prompt to study geometry and paper-folding under the 
                        guidance of <Link href="">Dr. Shuyi Weng</Link>. After submitting my documents and participating in an interview, 
                        I heard back that I was accepted and I was going ot work on this project with another student, <Link href="">Jade Zhang</Link>. 
                        We started by learning the theory and background material with lectures, reading paper, and, of course, 
                        folding paper.
                    </Typography>
                    <Typography variant="body1">
                        The research topic studies the relationship between the starting two-dimensional shape and the final 
                        three-dimensional shape that it becomes, when glued to a companion shape. How is this companion shape generated? 
                        My mentory developed what is called the "cap construction algorithm" to take any polygon, distribute 
                        uniform curvature to each vertex, and generate a "polygonal cap curve" with the same number of sides and 
                        side lengths as the original shape. Thus, corresponding sides get glued together to create a three-dimensional 
                        polyhedron. We are particularly interested in which kinds of starting shapes allow this construction to create a 
                        valid, closed polyhedron. My mentor's previous work revealed, among many other things, that equilateral 
                        triangles are the only three-sided shapes which work, and that parallelograms are the only four-sided shapes 
                        which work. Thus, it was natural for us to start examining five-sided shapes: pentagons.
                    </Typography>
                    <Typography variant="body1">
                        While exploring test cases in software such as Mathematica, we eventually stumbled on quite an interesting 
                        phenomenon: it appeared as if, as one moved any of the vertices of the pentagon along a line, the endpoint of the 
                        cap curve would also appear to move along a different line. This raised suspicion as to whether there was a linear 
                        (or affine) relationship regarding dependencies of the points of these curves. For the next school year, Dr. Weng 
                        and I continued to explore this phenomenon and its implications. We found that the position of the endpoint of the 
                        polygonal cap curve indeed was affine dependent on the position of any of the vertices of the starting polygon. 
                        Furthermore, we were able to show that there is a clean linear relation which precisely defines when the closed cap 
                        condition is satisfied for a given number of vertices. We spent much of our time formalizing these conclusions in 
                        proofs and a paper which is currently waiting to be printed in <Link href="">Involve</Link>.
                    </Typography>
                    <Typography variant="body1">
                        In January of 2023, I had a wonderful time presenting these findings at the <Link href="">Joint Mathematics Meetings</Link>
                        in Boston. I am so grateful for all of the help I've received from Jade, my mentor, and my various math professors. It 
                        feels so rewarding to see my work for the past few years come to fruition.
                    </Typography>
                    <Typography variant="h4">
                        Awards & Presentations
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>AMS-PME Joint Mathematics Meetings, 10-minute oral presentation, 1/5/2023</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Summer Undergraduate Research Grant of $4000, 4/11/2022</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Northwestern Undergraduate Research Exposition, 10-minute oral presentation, 5/26/2021</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Northwestern Undergraduate Research Assistant Program of $1500, Winter 2021 to Spring 2021</ListItem>
                    </List>
                    <Typography variant="h4">
                        Media
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>My <Link href="">slide deck</Link> for my presentation at JMM, 1/5/2023</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Our <Link href="">research paper</Link> on arXiv, 10/1/2022</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Our <Link href="">presentation</Link> at the Northwestern Undergraduate Research Exposition, 5/27/2021</ListItem>
                    </List>
                </Grid>
            </Grid>
        </>
    );
}

export default PolygonalFolding;
