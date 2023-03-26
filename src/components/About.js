import React from "react";
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <div className="about" >
      <Typography variant="h4" component="h1" gutterBottom>About Me</Typography>
      <Typography variant="body1" gutterBottom>
        I'm an aspiring full-stack software engineer with a background in CNC manufacturing and programming.
        I spent my time working up the ranks in the manufacturing industry, and I was always seeking
        more challenges and solving more problems. This has naturally led me to the world of programming,
        where everyday I'm presented with new challenges and problems to solve.
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
        With the help of online resources and the guidance of a software engineering bootcamp, I've
        been able to learn the fundamentals of programming and build a portfolio of projects that I'm
        proud of. I'm excited to continue learning and growing as a software engineer.
      </Typography>
    </div>
  );
}

export default About;
