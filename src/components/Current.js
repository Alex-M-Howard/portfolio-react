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

  const votewise = {
    imageUrl: "votewise.svg",
    altText: "VoteWise",
    title: "VoteWise",
    avatars: [
      { alt: "NextJS", url: "/9.svg" },
      { alt: "TailwindCSS", url: "/tailwind.svg" },
      { alt: "MongoDB", url: "/mongodb.svg" },
    ],
    shortDescription: "Volunteer work for Phildelphia based non-profit, VoteWise. VoteWise.org is a non-profit, non-partisan website that connects voters and politicians without advertising dollars getting in the way. We help make polictics about ideas, not dollars.",
    longDescription: "This project is being built with NextJS, TailwindCSS, and MongoDB. So far I have helped with the back end, working on db connection, file upload/excel parsing, and some sign-on logic. This project is being led by Spencer Snygg",
    sourceUrl: "",
    linkUrl: "http://www.votewise.org/"
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

        <Grid item xs={12} md={4}>
          <ProjectCard {...votewise} />
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Current;
