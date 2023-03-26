import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
        <Grid item xs={12} sm={6} md={4}>
          <Card>
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
          <Avatar alt="Flask" src="/5.svg" sx={{ width: 25, height: 25 }} />
          <Avatar alt="PostgreSQL" src="/6.png" sx={{ width: 25, height: 25 }}/>
          </Stack>
              <Typography variant="body1">
                A recipe app that allows users to search for recipes and save
                them to their profile.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Jobly */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
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
              <Typography variant="body1">
                A job search app that allows users to search for jobs and
                companies, and apply to jobs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Production Hub */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
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
          <Avatar alt="Flask" src="/5.svg" sx={{ width: 25, height: 25 }} />
          <Avatar alt="PostgreSQL" src="/6.png" sx={{ width: 25, height: 25 }} />
          </Stack>
              <Typography variant="body1">
                A manufacturing centric app that allows users to track prototype
                production, view SOPs, and machining programs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
