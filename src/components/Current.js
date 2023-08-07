import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard";

const Current = () => {
  const trivia = {
    imageUrl: "https://media.istockphoto.com/id/1303554344/vector/trivia-word-made-with-colorful-hanging-letters.jpg?s=612x612&w=0&k=20&c=l-hmy7yOOzEn3iKkHzkGoU6CipO8-xhgQdp5ava7lzk=",
    altText: "Trivia",
    title: "Trivia Funtanyl ('Competing with Trivia Crack')",
    avatars: [
      { alt: "React", url: "/8.png" },
      { alt: "NextJS", url: "/9.svg" },
    ],
    shortDescription: "A trivia game built with React and NextJS.",
    longDescription: "I wanted to create something with the new NextJS App Router, and a quick trivia game was the perfect fit. I used the Open Trivia Database API to get the questions and answers. This project is forthcoming and will be availabe for all soon.",
    sourceUrl: "https://github.com/Alex-M-Howard/triviaFuntanyl",
    linkUrl: ""
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column">
      <Grid item>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Currently Learning & Working On
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>

        <Grid item xs={12} md={4}>
          <ProjectCard {...trivia} />
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Current;
