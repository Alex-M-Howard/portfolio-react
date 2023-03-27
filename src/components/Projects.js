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

const Projects = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h2" sx={{mb: 3}}>Projects</Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
        {/* Thyme2Eat */}
        <Grid item xs={12}  md={4}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              height="140"
              image="/Thyme2Eat.png"
              alt="Thyme2Eat"
            />
            <CardContent>
              <Typography variant="h5" align="center">
                Thyme2Eat
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Avatar alt="HTML" src="/1.png" sx={{ width: 25, height: 25 }} />
                <Avatar alt="CSS" src="/2.png" sx={{ width: 25, height: 25 }} />
                <Avatar alt="JavaScript" src="/3.png" sx={{ width: 25, height: 25 }} />
                <Avatar alt="Python" src="/4.png" sx={{ width: 25, height: 25 }} />
                <Avatar alt="Flask" src="/5.svg" sx={{ width: 25, height: 25, backgroundColor: "#FFF" }} />
                <Avatar alt="PostgreSQL" src="/6.png" sx={{ width: 25, height: 25 }}/>
              </Stack>
              <Box mt={2}>
                <Typography variant="body1">
                  A recipe app that allows users to search for recipes and save
                  them to their profile. This was my first 'big' project to show
                  that I could combine my fundamentals with Python and Flask with a postgres database.
                </Typography>
              </Box>

              <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
        <Link href="https://github.com/Alex-M-Howard/Capstone-Thyme2Eat" color="inherit" underline="hover">
          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon />
            <Typography variant="body2">Source Code</Typography>
          </Stack>
        </Link>
        <Link href="https://thyme2eat.up.railway.app" color="inherit" underline="hover">
          <Stack direction="row" spacing={1} alignItems="center">
            <OpenInNewIcon />
            <Typography variant="body2">Live Example</Typography>
          </Stack>
        </Link>
      </Stack>

            </CardContent>
          </Card>
        </Grid>
        {/* Jobly */}
        <Grid item xs={12}  md={4}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              height="140"
              image="/jobly.jpg"
              alt="Jobly"
            />
            <CardContent>
              <Typography variant="h5" align="center">
                Jobly
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
          <Avatar alt="CSS" src="/2.png" sx={{ width: 25, height: 25 }} />
          <Avatar alt="JavaScript" src="/3.png" sx={{ width: 25, height: 25 }} />
          <Avatar alt="Node.js" src="/7.png" sx={{ width: 25, height: 25 }} />
          <Avatar alt="React" src="/8.png" sx={{ width: 25, height: 25 }} />
          <Avatar alt="PostgreSQL" src="/6.png" sx={{ width: 25, height: 25 }} />
          </Stack>
              <Box mt={2}>
              <Typography variant="body1">
                A job search app that allows users to search for jobs and
                companies, and apply to jobs. This was the first 'big' project that
                was done with React and Next.js for the front end. The backend was completed
                utilizing Node.js, Express, and PostgreSQL.
              </Typography>
                </Box>

              <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
        <Link href="https://github.com/Alex-M-Howard/jobly" color="inherit" underline="hover">
          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon />
            <Typography variant="body2">Source Code</Typography>
          </Stack>
        </Link>
        <Link href="https://jobly-ebon.vercel.app/" color="inherit" underline="hover">
          <Stack direction="row" spacing={1} alignItems="center">
            <OpenInNewIcon />
            <Typography variant="body2">Live Example</Typography>
          </Stack>
        </Link>
      </Stack>

            </CardContent>
          </Card>
        </Grid>
        {/* Production Hub */}
        <Grid item xs={12}  md={4}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              height="140"
              image="/productionhub.png"
              alt="Production Hub"
            />
            <CardContent>
              <Typography variant="h5" align="center">
                Production Hub
              </Typography>
               <Stack direction="row" spacing={2} justifyContent="center">
          <Avatar alt="HTML" src="/1.png" sx={{ width: 25, height: 25 }} />
          <Avatar alt="CSS" src="/2.png" sx={{ width: 25, height: 25 }} />
          <Avatar alt="JavaScript" src="/3.png" sx={{ width: 25, height: 25 }} />
          <Avatar alt="Python" src="/4.png" sx={{ width: 25, height: 25 }} />
          <Avatar alt="Flask" src="/5.svg" sx={{ width: 25, height: 25, backgroundColor: "#FFF" }} />
          <Avatar alt="PostgreSQL" src="/6.png" sx={{ width: 25, height: 25 }} />
          </Stack>
              <Box mt={2}>
              <Typography variant="body1">
                A manufacturing centric app that allows users to track prototype
                production, view SOPs, and machining programs. This was born out of the
                need to have a centralized location for various manufacturing processes.
                Utilizing my prior knowledge of Python, Flask, and PostgreSQL, I was able to
                create a full stack application that could be used immediately in the real world.
              </Typography>
                </Box>

              <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
        <Link href="https://github.com/Alex-M-Howard/Production-Hub" color="inherit" underline="hover">
          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon />
            <Typography variant="body2">Source Code</Typography>
          </Stack>
        </Link>
        <Link href="https://production-hub-production.up.railway.app/proto/" color="inherit" underline="hover">
          <Stack direction="row" spacing={1} alignItems="center">
            <OpenInNewIcon />
            <Typography variant="body2">Live Example</Typography>
          </Stack>
        </Link>
      </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
