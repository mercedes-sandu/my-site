import { Grid, Link, List, ListItem, Typography } from "@mui/material";

function ZenDog() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Typography variant="h2">
                        ZenDog
                    </Typography>
                    <Typography variant="h5">
                        A webapp for dog owners to engage with experts and explore curated content.
                    </Typography>
                    <Typography variant="h6">
                        February 2023 to March 2023 | COMP_SCI 394-0: Agile Software Development
                    </Typography>
                    {/* Image here lol */}
                    <Typography variant="body1">
                        ZenDog was the second project my team worked on in COMP_SCI 394-0. For this project, we were partnered up with 
                        a team of clients from Northwestern's MPD 405 class. The clients were a group of students who were interested 
                        in developing a webapp that would help dog owners receive and explore personalized content to aid them in 
                        improving their dog's behavior and training. We had five weeks to complete this project.
                    </Typography>
                    <Typography variant="body1">
                        The client team provided us with the app idea, a Figma mockup, and a list of user stories. We worked together to 
                        create a sprint plan week by week and had weekly meetings to discuss what needed to be done and the plan of 
                        action. My personal role in the project was to communicate with the clients about the development team's progress 
                        and to primarily implement the frontend aspects of the webapp. I entirely implemented the signup form and aided 
                        the other developers with the UI/UX for the other pages and components. I also worked on setting up the databases 
                        in Firebase, and set up the end-to-end and unit testing for the app before delivering it to the clients at the 
                        end of the quarter.
                    </Typography>
                    <Typography variant="body1">
                        The webapp was developed using React, Firebase, and MUI. Majority of the languages were JavaScript, CSS, and HTML. 
                    </Typography>
                    <Typography variant="h4">
                        Features Implemented
                    </Typography>
                    <List>
                        <ListItem sx={{ display: "list-item" }}>Signing in with a Google account</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A signup form where the user fills in personal information as well as their dog's information, issues, and training preferences</ListItem>
                        <ListItem sx={{ display: "list-item" }}>A home page where the user receives a daily tip and can explore the different registered experts, filtered by dog issue (i.e., barking, crying, etc.)</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Expert pages which display their information, contact points, and videos available to watch in the webapp</ListItem>
                        <ListItem sx={{ display: "list-item" }}>On the expert pages, users can view the expert's content (YouTube videos provided)</ListItem>
                        <ListItem sx={{ display: "list-item" }}>Storage and retrieval of both user and export information and content via Firebase databases</ListItem>
                    </List>
                    <Typography variant="h4">
                        Screenshots
                    </Typography>
                    {/* Screenshots */}
                    <Typography variant="body1">
                        If you'd like to browse the code, feel free to take a look at the <Link href="">ZenDog</Link> (previously named 
                        "DogSpace") repository.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default ZenDog;
