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

const Current = () => {
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
        {/* Tic-Tac-Toe */}
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              image="/tictactoe.png"
              alt="Tic-Tac-Toe"
            />
            <CardContent>
              <Typography variant="h5" align="center">
                Java - Tic-Tac-Toe
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Avatar
                  alt="Java"
                  src="/java.png"
                  sx={{ width: 25, height: 25 }}
                />
                <Avatar
                  alt="Maven"
                  src="/maven.png"
                  sx={{ width: 25, height: 25 }}
                />
              </Stack>
              <Box mt={2}>
                <Typography variant="body1">
                  Seeing how many jobs on the market today ask for Java, I felt
                  it would only enhance my skillset to learn it. Using Maven,
                  Java, and Java Swing, I created a Tic-Tac-Toe game that allows
                  two players to play against each other. I built unit tests
                  using JUnit to test the game logic and ensure the game is
                  working. I have moved on from this currently, but I'd like to
                  revisit and add an AI as an opponent. Another idea for the
                  future is to totally rework the UI to make it more visually
                  appealing.
                </Typography>
              </Box>

              <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
                <Link
                  href="https://github.com/Alex-M-Howard/Tic-Tac-Toe-Java"
                  color="inherit"
                  underline="hover">
                  <Stack direction="row" spacing={1} alignItems="center">
                    <GitHubIcon />
                    <Typography variant="body2">Source Code</Typography>
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

export default Current;
