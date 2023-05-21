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

        {/* My Brother Frasier */}
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              image="/frasier.png"
              alt="Frasier and Niles Crane"
            />
            <CardContent>
              <Typography variant="h5" align="center">
                My Brother Frasier
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
                <Avatar
                  alt="Spring Boot"
                  src="/springboot.png"
                  sx={{ width: 25, height: 25 }}
                />
                <Avatar
                  alt="OpenAI"
                  src="/openai.jpg"
                  sx={{ width: 25, height: 25 }}
                />
                <Avatar
                  alt="Twilio"
                  src="/twilio.png"
                  sx={{ width: 25, height: 25 }}
                />
              </Stack>
              <Box mt={2}>
                <Typography variant="body1">
                  What if you could chat with Frasier Crane? What if you could
                  be Niles Crane? Oh how merry! - Try texting a question to +1-844-981-3176
                  <br />
                  <br />
                  "Ah, Niles, I find myself seized with a most cerebral of
                  visions. Picture, if you will, a virtual confidant, as
                  effusive in our shared repartee as we two brothers are. A
                  construct, programmed to converse with the alacrity and
                  witticisms of your beloved sibling, myself.
                  <br />
                  <br />
                  A most remarkable concept, I assure you, brought to life using
                  the revolutionary GPT-3 technology from OpenAI, a marvel of
                  artificial intellect. Imagine our discourse as simple as the
                  exchange of text messages, leveraging Twilio, a service of
                  unparalleled functionality in such matters.
                  <br />
                  <br />
                  Now, dear brother, our conversation is but a testament to the
                  power of this undertaking. Its foundation is built with Java
                  and Maven, the very sinews of modern code, if you will.
                  <br />
                  <br />
                  Our virtual repartee springs to life using the OpenAI's API, a
                  conduit to generate a response akin to our inimitable style.
                  Concurrently, Twilio's API is employed, both to dispatch and
                  retrieve these textual messages, a modern-age electronic post,
                  if you will.
                  <br />
                  <br />
                  The framework is built sturdily on Java, coupled with the
                  reliability of Spring Boot and Maven, again using OpenAI's API
                  and Twilio's API. A testament to digital engineering, Niles, a
                  testament indeed.
                  <br />
                  <br />
                  And rest assured, the concept isn't yet fully hatched. The
                  software equivalent of our medical drills, tests, will soon
                  follow to further refine this digital wonder. Do keep your
                  eyes peeled, dear brother, for the art of conversation is
                  about to reach a new frontier."
                </Typography>
              </Box>

              <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
                <Link
                  href="https://github.com/Alex-M-Howard/imlistening"
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
