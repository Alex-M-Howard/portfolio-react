import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import CodeIcon from "@mui/icons-material/Code";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ListItemSecondaryAction } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

// const Projects = () => {
//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       direction="column"
//     >
//       <Grid item>
//         <Typography variant="h2" sx={{ mb: 3 }}>
//           Projects
//         </Typography>
//       </Grid>
//       <Grid container justifyContent="center" alignItems="center" spacing={4}>
//         {/* Thyme2Eat */}
//         <Grid item xs={12} md={4}>
//           <Card variant="outlined">
//             <CardMedia
//               component="img"
//               height="140"
//               image="/Thyme2Eat.png"
//               alt="Thyme2Eat"
//             />
//             <CardContent>
//               <Typography variant="h5" align="center">
//                 Thyme2Eat
//               </Typography>
//               <Stack direction="row" spacing={2} justifyContent="center">
//                 <Avatar
//                   alt="HTML"
//                   src="/1.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar alt="CSS" src="/2.png" sx={{ width: 25, height: 25 }} />
//                 <Avatar
//                   alt="JavaScript"
//                   src="/3.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="Python"
//                   src="/4.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="Flask"
//                   src="/5.svg"
//                   sx={{ width: 25, height: 25, backgroundColor: "#FFF" }}
//                 />
//                 <Avatar
//                   alt="PostgreSQL"
//                   src="/6.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//               </Stack>
//               <Box mt={2}>
//                 <Typography variant="body1">
//                   A recipe app that allows users to search for recipes and save
//                   them to their profile. This was my first 'big' project to show
//                   that I could combine my fundamentals with Python and Flask
//                   with a postgres database.
//                 </Typography>
//               </Box>

//               <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
//                 <Link
//                   href="https://github.com/Alex-M-Howard/Capstone-Thyme2Eat"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <GitHubIcon />
//                     <Typography variant="body2">Source Code</Typography>
//                   </Stack>
//                 </Link>
//                 <Link
//                   href="https://thyme2eat.up.railway.app"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <OpenInNewIcon />
//                     <Typography variant="body2">Live Example</Typography>
//                   </Stack>
//                 </Link>
//               </Stack>
//             </CardContent>
//           </Card>
//         </Grid>
//         {/* jobly */}
//         <Grid item xs={12} md={4}>
//           <Card variant="outlined">
//             <CardMedia
//               component="img"
//               height="140"
//               image="/jobly.jpg"
//               alt="Jobly"
//             />
//             <CardContent>
//               <Typography variant="h5" align="center">
//                 Jobly
//               </Typography>
//               <Stack direction="row" spacing={2} justifyContent="center">
//                 <Avatar alt="CSS" src="/2.png" sx={{ width: 25, height: 25 }} />
//                 <Avatar
//                   alt="JavaScript"
//                   src="/3.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="Node.js"
//                   src="/7.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="React"
//                   src="/8.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="PostgreSQL"
//                   src="/6.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//               </Stack>
//               <Box mt={2}>
//                 <Typography variant="body1">
//                   A job search app that allows users to search for jobs and
//                   companies, and apply to jobs. This was the first 'big' project
//                   that was done with React and Next.js for the front end. The
//                   backend was completed utilizing Node.js, Express, and
//                   PostgreSQL.
//                 </Typography>
//               </Box>

//               <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
//                 <Link
//                   href="https://github.com/Alex-M-Howard/jobly"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <GitHubIcon />
//                     <Typography variant="body2">Source Code</Typography>
//                   </Stack>
//                 </Link>
//                 <Link
//                   href="https://jobly-ebon.vercel.app/"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <OpenInNewIcon />
//                     <Typography variant="body2">Live Example</Typography>
//                   </Stack>
//                 </Link>
//               </Stack>
//             </CardContent>
//           </Card>
//         </Grid>
//         {/* habitual */}
//         <Grid item xs={12} md={4}>
//           <Card variant="outlined">
//             <CardMedia
//               component="img"
//               height="90"
//               image="/habitual.png"
//               alt="habitual"
//             />
//             <CardContent>
//               <Typography variant="h5" align="center">
//                 habitual
//               </Typography>
//               <Stack direction="row" spacing={2} justifyContent="center">
//                 <Avatar alt="CSS" src="/2.png" sx={{ width: 25, height: 25 }} />
//                 <Avatar
//                   alt="JavaScript"
//                   src="/3.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="Node.js"
//                   src="/7.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="React"
//                   src="/8.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="PostgreSQL"
//                   src="/6.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//               </Stack>
//               <Box mt={2}>
//                 <Typography variant="body1">
//                   A daily habit tracker that lets you track habits, journal about your experiences, and shows you data about your ongoing journey.
//                 </Typography>
//               </Box>

//               <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
//                 <Link
//                   href="https://github.com/Alex-M-Howard/habitual"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <GitHubIcon />
//                     <Typography variant="body2">Source Code</Typography>
//                   </Stack>
//                 </Link>
//                 <Link
//                   href="https://habitual-ten.vercel.app/"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <OpenInNewIcon />
//                     <Typography variant="body2">Live Example</Typography>
//                   </Stack>
//                 </Link>
//               </Stack>
//             </CardContent>
//           </Card>
//         </Grid>
//         {/* Production Hub */}
//         <Grid item xs={12} md={4}>
//           <Card variant="outlined">
//             <CardMedia
//               component="img"
//               height="140"
//               image="/productionhub.png"
//               alt="Production Hub"
//             />
//             <CardContent>
//               <Typography variant="h5" align="center">
//                 Production Hub
//               </Typography>
//               <Stack direction="row" spacing={2} justifyContent="center">
//                 <Avatar
//                   alt="HTML"
//                   src="/1.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar alt="CSS" src="/2.png" sx={{ width: 25, height: 25 }} />
//                 <Avatar
//                   alt="JavaScript"
//                   src="/3.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="Python"
//                   src="/4.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//                 <Avatar
//                   alt="Flask"
//                   src="/5.svg"
//                   sx={{ width: 25, height: 25, backgroundColor: "#FFF" }}
//                 />
//                 <Avatar
//                   alt="PostgreSQL"
//                   src="/6.png"
//                   sx={{ width: 25, height: 25 }}
//                 />
//               </Stack>
//               <Box mt={2}>
//                 <Typography variant="body1">
//                   A manufacturing centric app that allows users to track
//                   prototype production, view SOPs, and machining programs. This
//                   was born out of the need to have a centralized location for
//                   various manufacturing processes. Utilizing my prior knowledge
//                   of Python, Flask, and PostgreSQL, I was able to create a full
//                   stack application that could be used immediately in the real
//                   world.
//                 </Typography>
//               </Box>

//               <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
//                 <Link
//                   href="https://github.com/Alex-M-Howard/Production-Hub"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <GitHubIcon />
//                     <Typography variant="body2">Source Code</Typography>
//                   </Stack>
//                 </Link>
//                 <Link
//                   href="https://production-hub-production.up.railway.app/proto/"
//                   color="inherit"
//                   underline="hover"
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <OpenInNewIcon />
//                     <Typography variant="body2">Live Example</Typography>
//                   </Stack>
//                 </Link>
//               </Stack>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

const Projects = () => {
  const items = [
    {
      name: "Thyme2Eat",
      description: `My very first big project. Using Python, Flask, SQL Alchemy, and PostgreSQL, I created a full stack application that allows users to see randomly
      generated recipes, and save recipes to their favorites. This was a great learning experience, as I ran into a severly limiting API that has made me
      appreciate the researching process. 
      `,
      date: "October 2022",
      img: "/thyme2eat.png",
    },
    {
      name: "Jobly",
      description: `The first project I used React. The backend was created using Node and Express with a PostgreSQL database, while the frontend
      used React and Next.js. This app allows users to create an account, login, and simply click a button to apply to jobs. My first big project
      using React, I was excited to see how cool component based design is. While actual visual design isn't my strong suit, I also created the first project
      of mine with a toggleable dark mode, utilizing React context.`,
      date: "March 2023",
      img: "/jobly.png",
    },
    {
      name: "Habitual",
      description: `The last capstone I'd work on in my bootcamp. Further utilizing React, I created a habit tracking app that allows users to journal, create habits, and track their progress. I once again
      used React and Next.js for the frontend, Next.js API routes for the backend, and an AWS RDS PostgreSQL database. This was a great learning experience as I toyed with Material UI components, and chart.js to create
      a visually appealing representation of the user's progress. This is also where I started to realize just how hard dates and times are to work with.`,
      date: "April 2023",
      img: "/habitual.png",
    },
    {
      name: "Production Hub",
      description: `A manufacturing centric app that allows users to track prototype production, view SOPs, and machining programs. This 
      was born out of the need to have a centralized location for various manufacturing processes. Utilizing my prior knowledge of Python, Flask, and PostgreSQL, I was able to create a full 
      stack application that could be used immediately in the real world. The most up to date version allows viewing of interactive standard work documents, machine manuals,
      viewing of machining programs, an error log, a blanks inventory system, program request system, nesting and routing calculator, and prototype tracking hub. This project over the months has
      grown vastly and now uses: Python, Flask, PostgreSQL, SQLAlchemy, HTML in Jinja, CSS, JavaScript, Bootstrap 5, FontAwesome, chart.js, grid.js, and AWS S3.`,
      date: "January 2023 - Present",
      img: "/productionhub.png",
    },
    {
      name: "Tic-Tac-Toe",
      description: `After completing my programming bootcamp I realized how much I've learned, but also how much I still have the opportunity to learn. Working in Python and JavaScript mostly has been pretty easy to pick up, but don't
      think I didn't see all the comments in so many videos about how easy these were after coming from Java or C++. With that in mind, I've been learning Java and building simple projects along the way. This is my first project in Java, a simple
      Tic-Tac-Toe game with a GUI. I used the build tool Maven, Java Swing for the GUI, and jUnit for unit testing.`,
      date: "May 2023",
      img: "/tictactoe.png",
    },
    {
      name: "I'm Listening",
      description: `I asked Frasier to describe this project and he said: 'Ah, Niles, my dear brother! How delightful it is to see you so enthused about your latest project. "I'm Listening," you say? Well, the name itself exudes an air of compassion and understanding, much like our radio show.
      It's fascinating to witness the convergence of modern technology and our own timeless wisdom. Utilizing Maven, Java, Spring Boot, OpenAI's API, and Twilio, you have managed to create a chatbot that allows individuals to engage in a textual conversation with none other than yours truly, Frasier Crane. How marvelous!
      The concept of roleplaying with ChatGPT certainly adds a layer of intrigue to this endeavor. It presents an opportunity for users to embody the erudite and discerning persona of Niles Crane, the eminent psychiatrist himself. Such an immersive experience shall surely be appreciated by fans of our show.
      I understand that your current implementation allows for individual messages, but fear not, dear brother, for context chatting is on the horizon. Soon, users will be able to engage in more comprehensive and dynamic conversations, ensuring an even more authentic Frasier Crane experience.
      Oh, and the phone number to text, (844)-981-3176, serves as the portal for all those who wish to pose questions or share comments. It's as if the radio lines have been modernized for the digital age!
      Niles, I must say, your passion and ingenuity never cease to amaze me. I can only imagine the joy and intellectual stimulation this project will bring to all those who yearn for a taste of the Crane brothers' world. Kudos to you, dear brother, for turning an idea into a reality.'
      `,
      date: "May 2023",
      img: "/frasier.png",
    },
  ];

  return (
    <Grid container direction="column" sx={{ my: 3 }}>
      <Grid item xs={12} sm={6} md={4}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Projects
      </Typography>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Carousel>
          {items.map((item, key) => (
            <Item key={key} item={item} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}

const Item = ({ item }) => {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  )
}

export default Projects;
