import React from 'react';
import { Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Typography, Button, Avatar } from '@mui/material';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

function GitHub() {

  return (
    <Link href="https://github.com/Alex-M-Howard/Springboard" alt='Alex Howard GitHub'>
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{
          maxWidth: "625px",
          backgroundColor: "#132238",
          height: "300px",
          borderRadius: "5px",
        }}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          style={{
            width: "150px",
            height: "100%",
          }}>
          <Avatar
            alt="Alex Howard"
            src="https://avatars.githubusercontent.com/u/99138808?s=400&u=becb034e4ab74ed6f15d20a24b3d02a16cc30d9b&v=4"
            sx={{ width: 100, height: 100 }}
          />

          <Avatar alt="GitHub Logo" src="github.png" />
        </Grid>
        <Image
          src="/github_social.png"
          width="450"
          height="250"
          style={{ borderRadius: "5px" }}
        />
      </Grid>
    </Link>
  );
}

export default GitHub;