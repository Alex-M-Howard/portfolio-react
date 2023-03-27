import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const About = () => {
  // Add a style object for the About component
  const aboutStyle = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid container item xs={12} sm={8} >
    <div className="about" style={aboutStyle}>
      <Typography variant="h2" sx={{mb: 3}}>
        About Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Hailing from a background in CNC manufacturing and programming,
        I am an ambitious full-stack software engineer with a passion for
        problem-solving and innovation. My journey through the manufacturing
        industry saw me climbing the ranks, always eager for greater challenges
        and the opportunity to flex my analytical skills. This insatiable curiosity
        ultimately led me to the dynamic world of programming, where I embrace
        the daily hurdles and puzzles that fuel my growth.
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
       Leveraging a combination of online resources and a comprehensive software
        engineering bootcamp, I have honed my programming fundamentals and proudly
        built a diverse portfolio of projects. As I continue to learn and evolve as
        a software engineer, I am thrilled to explore the endless possibilities
        within this field and make my mark as a forward-thinking, dedicated professional.
      </Typography>
    </div>
      </Grid>
      </Grid>
  );
};

export default About;
