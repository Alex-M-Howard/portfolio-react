import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const Profile = () => {
  return (
    <Grid
      className="profile"
      container spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      style={{ height: "80vh", maxWidth: "100vw" }}
    >
      <Grid item>
        <Avatar alt="Alex Howard" src="/profile.jpeg" sx={{ width: 250, height: 250 }} />
      </Grid>

      <Grid
        item
        xs={12}
        container
        direction="column"
        alignItems="center"
      >
        <h1>Alex Howard</h1>
        <h2 style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'baseline', textAlign: 'center' }}>
          <span style={{ margin: '0 5px' }}>Full Stack</span>
          <span style={{ margin: '0 5px' }}>Software Engineer</span>
        </h2>

      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <Grid item xs={12}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Stack direction="row" spacing={2} justifyContent="center">
              <Avatar alt="HTML" src="/1.png" sx={{ width: 50, height: 50 }} />
              <Avatar alt="CSS" src="/2.png" sx={{ width: 50, height: 50 }} />
              <Avatar alt="JavaScript" src="/3.png" sx={{ width: 50, height: 50 }} />
              <Avatar alt="Python" src="/4.png" sx={{ width: 50, height: 50 }} />
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Avatar alt="Flask" src="/5.svg" sx={{ width: 50, height: 50, backgroundColor: "#FFF" }} />
              <Avatar alt="PostgreSQL" src="/6.png" sx={{ width: 50, height: 50 }} />
              <Avatar alt="Node.js" src="/7.png" sx={{ width: 50, height: 50 }} />
              <Avatar alt="React" src="/8.png" sx={{ width: 50, height: 50 }} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Profile;
