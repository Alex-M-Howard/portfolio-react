import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProjectCard from "./ProjectCard";

const thyme2eat = {
  imageUrl: "/Thyme2Eat.png",
  altText: "Thyme2Eat",
  title: "Thyme2Eat",
  avatars: [
    { alt: "HTML", url: "/1.png" },
    { alt: "CSS", url: "/2.png" },
    { alt: "JavaScript", url: "/3.png" },
    { alt: "Python", url: "/4.png" },
    { alt: "Flask", url: "/5.svg" },
    { alt: "PostgreSQL", url: "/6.png" },
  ],
  shortDescription:"A recipe app that allows users to search for recipes and save them to their profile.",
  longDescription: "This was my first 'big' project to show that I could combine my fundamentals with Python and Flask with a postgres database. I also wanted to try out a CSS framework and went away from Bootstrap to Bulma. The biggest thing this project taught me was to be better aware of the API chosen, as there were many limits that I had to end up working around.",
  sourceUrl: "https://github.com/Alex-M-Howard/Capstone-Thyme2Eat",
  linkUrl: "https://thyme2eat.up.railway.app",
};

// const jobly = {
//   imageUrl: "/jobly.jpg",
//   altText: "Jobly",
//   title: "Jobly",
//   avatars: [
//     { alt: "CSS", url: "/2.png" },
//     { alt: "JavaScript", url: "/3.png" },
//     { alt: "Node.js", url: "/7.png" },
//     { alt: "React", url: "/8.png" },
//     { alt: "PostgreSQL", url: "/6.png" },
//   ],
//   shortDescription:"A full stack job searching app that allows users to search for jobs and apply to them.",
//   longDescription: "A job search app that allows users to search for jobs and companies, and apply to jobs. This was the first 'big' project that was done with React and Next.js for the front end. The backend was completed utilizing Node.js, Express, and PostgreSQL. This is also where I got to play around with user context and authentication. I also spent a lot of time working on the theme and made a true toggle switch for light and dark mode.",
//   sourceUrl: "https://github.com/Alex-M-Howard/jobly",
//   linkUrl: "https://jobly-ebon.vercel.app/",
// }

const habitual = {
  imageUrl: "/habitual.png",
  altText: "habitual",
  title: "Habitual",
  avatars: [
    { alt: "CSS", url: "/2.png" },
    { alt: "JavaScript", url: "/3.png" },
    { alt: "Node.js", url: "/7.png" },
    { alt: "React", url: "/8.png" },
    { alt: "PostgreSQL", url: "/6.png" },
  ],
  shortDescription:"A daily habit tracker that lets you track habits, journal about your experiences, and shows you data about your ongoing journey.",
  longDescription: "This was the final project of my coding bootcamp. Everything I learned has now come to this. This was a full stack app that utilized React, Next.js, Node.js, Express, and PostgreSQL. This is the project that taught me to never underestimate time. Getting a working habit tracker was great, but dealing with user's time zones and making sure updates happened at the correct time was a challenge. I also got to play around with chart.js and make some pretty graphs.",
  sourceUrl: "https://github.com/Alex-M-Howard/habitual",
  linkUrl: "https://habitual-ten.vercel.app/",
};

// const productionHub = {
//   imageUrl: "/productionhub.png",
//   altText: "Production Hub",
//   title: "Production Hub",
//   avatars: [
//     { alt: "HTML", url: "/1.png" },
//     { alt: "CSS", url: "/2.png" },
//     { alt: "JavaScript", url: "/3.png" },
//     { alt: "Python", url: "/4.png" },
//     { alt: "Flask", url: "/5.svg" },
//     { alt: "PostgreSQL", url: "/6.png" },
//   ],
//   shortDescription:"An app that allows users to track various components of a production environment.",
//   longDescription: "This is the project that I've worked the most on. It started because we needed something better at work to track some of our completed CNC programs. It grew from there to now include: part requests, error logs, prototype project management, nesting calculator, standard operating procedures, and more. I have been fortunate enough to experiement thoroughly with the technologies used and have used: Python, Flask, PostgreSQL, JavaScript, Bootstrap, jQuery, AWS S3 buckets, FontAwesome, and more. This sample doesn't include everything the current version does, and also includes dummy data to try out.",
//   sourceUrl: "https://github.com/Alex-M-Howard/Production-Hub",
//   linkUrl: "https://production-hub-production.up.railway.app",
// };

const javaTicTacToe = {
  imageUrl: "/tictactoe.png",
  altText: "Tic Tac Toe",
  title: "Java Tic-Tac-Toe",
  avatars: [
    { alt: "Java", url: "/java.png" },
    { alt: "Maven", url: "/maven.png" }, 
  ],
  shortDescription:"A simple tic-tac-toe game made in Java.",
  longDescription: "After seeing so many job postings for Java developers, I was interested in learning more. I decided to make a simple tic-tac-toe game to get a feel for the language. I also wanted to try out Maven and see how it worked. I was able to get a working game, but I still have a lot to learn about Java.",
  sourceUrl: "https://github.com/Alex-M-Howard/Tic-Tac-Toe-Java",
  linkUrl: ""
}

const frasier = {
  imageUrl: "/frasier.png",
  altText: "Frasier",
  title: "My Brother Frasier",
  avatars: [
    { alt: "Java", url: "/java.png" },
    { alt: "Maven", url: "/maven.png" },
    { alt: "Spring Boot", url: "/springboot.png" },
    { alt: "OpenAI", url: "/openai.jpg" },
    { alt: "Twilio", url: "/twilio.png" },
  ],
  shortDescription:"Sherry, Niles? A chatbot that lets you talk to Frasier Crane while you roleplay as Niles Crane. Try it out! Text: +1-844-981-3176",
  longDescription: "This is everything I've ever wanted. To have a direct line to my favorite TV show psychiatrist. You don't have to look in the DSM-IV to see why I would make this. Continuing in Java, I wanted to make an API that would connect to Twilio that allows you to text a question that is then answered by OpenAI's ChatGPT. This was a fun project that I would love to build on in the future.",
  sourceUrl: "https://github.com/Alex-M-Howard/imlistening",
  linkUrl: ""
}

const Projects = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      wrap="wrap"
    >
      <Grid item>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Projects
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard {...thyme2eat} />
        </Grid>
 
        {/*
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard {...jobly} />
        </Grid> 
        */}

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard {...habitual} />
        </Grid>
        
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard {...productionHub} />
        </Grid> */}
        
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard {...javaTicTacToe} />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProjectCard {...frasier} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
