import React from "react";
import { Box, Typography, Grid, Paper, Link, Button } from "@mui/material";

const Resume = () => {
  const paperStyle = {
    padding: 16,
  };

  const sectionTitleStyle = {
    fontWeight: "bold",
    marginBottom: 8,
  };

  const listItemStyle = {
    marginBottom: 8,
  };

  const subheadingStyle = {
    fontWeight: "bold",
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} container justifyContent="space-between">
          <Typography variant="h2" sx={{ mb: 3 }}>
            Resume
          </Typography>
          <Button
            sx={{ height: '50px'}}
            variant="contained"
            color="primary"
            href="https://docs.google.com/document/d/1r4CZk6mk-qboC5JwoEk5JWc-dtVrndc0/edit?usp=sharing&ouid=113553713616564316204&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </Grid>
        <Paper style={paperStyle}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            item
            xs={12}
          >
            <Typography variant="h4">Alex Howard</Typography>
            <Typography>Software Engineer – Blandon, PA</Typography>
            <Typography>
              +1-419-494-8934 alex-m-howard@pm.me alex-m-howard.com
            </Typography>
          </Grid>
          <br />


        <Typography variant="h5" style={sectionTitleStyle}>
          Summary
        </Typography>
        <Typography style={listItemStyle}>
          Detail-oriented CNC Manufacturing Programmer with 8 years of experience seeking to transition to a career in Software Engineering. Completion of a rigorous Software Engineering Bootcamp has provided a strong foundation in Python, JavaScript, and SQL, as well as experience with modern development tools and methodologies. Possess a passion for problem-solving and efficiency, with a track record of persistence and tenacity in tackling complex issues. Proven ability to learn new skills and adapt quickly to new technologies. A dedicated team player committed to producing high-quality work.
        </Typography>

          <br />

        <Typography variant="h5" style={sectionTitleStyle}>
          Skills
        </Typography>
        <Typography style={listItemStyle}>
          Python, JavaScript, HTML, CSS, Node.js, PostgreSQL, React, Next.js, Flask, Express, AWS S3
        </Typography>

          <br />
        <Typography variant="h5" style={sectionTitleStyle}>
          Software Engineer Projects
        </Typography>
          <Typography variant="h6" >
        Production Hub
        </Typography>
          <Typography style={listItemStyle}>
            Languages: Python, JavaScript
            Frameworks: Flask, SQLAlchemy, jQuery, Bootstrap, Axios
            Database: PostgreSQL, AWS S3

Originally created for a manufacturing environment to bring different value streams together. Different features include: Parts Request, Standard Work Documentation, Machining Nest Explorer, Inventory Control, and Prototype Tracking with a dashboard and using AWS S3 to create version control.

        </Typography>
<br />
          <Typography variant="h6" >
        Thyme2Eat
        </Typography>
          <Typography style={listItemStyle}>
            Languages: Python, JavaScript
Frameworks: Flask, SQLAlchemy, jQuery, Bulma, Axios
Database: PostgreSQL

Created as a random meal generator, you can log in to save meals or print them directly. Different features include: Get Random Meals, View Saved Recipes, Search For Recipes with filters for diet, meal type, and foods to avoid.

        </Typography>

<br />
        <Typography variant="h5" style={sectionTitleStyle}>
          Experience
        </Typography>
        <Typography variant="h6" style={subheadingStyle}> Software Engineer Career Track Fellow – Springboard 2022 to Current</Typography>
        <Typography style={listItemStyle}>
          An 800-hour course covers key aspects of full-stack web development, databases, and algorithms and data structures.
Includes multiple projects reviewed by current industry experts
Modules include learning resources, practice exercises, projects, and career-related coursework:
HTML, CSS, JavaScript, React, DOM manipulation, event driven programming, git/terminal/github, AJAX, jQuery, Redux, SQL, PostgreSQL, Flask, Node, Express, data structures and algorithms.
        </Typography>


        <Typography variant="h6" style={subheadingStyle}> CAM Programming Technician – Prizer-Painter Stoveworks Blandon, PA 2021 - Current</Typography>

        <Typography style={listItemStyle}>
Utilize CAM Programming for CNC Laser Cutting and CNC Punch Press.
Work on continuous improvement to bolster processes, which culminated with the creation of a production hub website with the aim to centralize focus and communication.
Created automated scripts to perform daily tasks which included maintaining backups, performing data scraping of all of our machining programs, and performing redundant data checks of programs to verify key processes were present.
        </Typography>

        <Typography variant="h6" style={subheadingStyle}>
CAM Programmer – Muncy Industries Turbotville, PA 2021
        </Typography>
        <Typography style={listItemStyle}>
Utilized CAM Programming for CNC milling machines. Set up of various jobs included reading blueprints, programming with MasterCAM, work holding setup, and quality verification.
        </Typography>

        <Typography variant="h6" style={subheadingStyle}>
Engineering Technician – GKN ePowertrain - Bowling Green, OH 2020-2021
        </Typography>
        <Typography style={listItemStyle}>

Worked with the production team on continuous improvement ideas and activities.
Assisted in creating and monitoring of throughput, scrap, and overall performance of machining cells. Assisted the product launch team and quality to perform capability studies and work on improving process capabilities and stability.
Worked with tooling vendors to implement and test new tooling to improve process cost and decrease processing time.
        </Typography>

        <Typography variant="h6" style={subheadingStyle}>
Machining Specialist – GKN ePowertrain - Bowling Green, OH 2018-2020
 </Typography>
        <Typography style={listItemStyle}>
Worked with the product launch team on ramping up production on an automated machining cell. Worked alongside manufacturing engineers, quality engineers, and value stream team members to improve and consolidate processes.
Reading and writing G-Code to make the machining process more efficient.
Performed corrective actions including bar changes, axial and radial alignments, spindle alignments, and troubleshoot automation failures.
Set up a machining process which included program creation, tool geometry setup, machine zero alignments, and gauging strategies.
        </Typography>
<br />
        <Typography variant="h5" style={sectionTitleStyle}>
          Education
        </Typography>
        <Typography variant="h6" style={subheadingStyle}>
Springboard –  2022-2023
 </Typography>
        <Typography style={listItemStyle}>
The comprehensive 800-hour course encompasses a broad spectrum of essential topics in the realm of software engineering, including intricate components of both front-end and back-end web development, databases, and data structures and algorithms. Within the course, students have access to a vast array of in-depth learning resources, rigorous practice exercises, innovative projects, and career-focused coursework, each aimed at developing an exhaustive understanding of web development, JavaScript, DOM Manipulation, Event Driven Programming, Git/Terminal/Github, Modern JavaScript and Testing, AJAX, jQuery, ReactJS, Redux, SQL, PostgresQL, Flask, Node, Express, Data Structures, and Algorithms. Beyond the materials covered, participants are partnered with an esteemed industry professional for weekly support and guidance, collaborate with accomplished career specialists to gain valuable insights into the tech industry, and join a vibrant community of like-minded aspiring software engineers, where collective problem-solving propels the cohort towards unparalleled growth and learning.
        </Typography>



        </Paper>

      </Grid>
    </Box>
  );
};

export default Resume;
