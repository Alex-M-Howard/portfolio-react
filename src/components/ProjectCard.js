import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";

const ProjectCard = ({imageUrl, altText, title, avatars, shortDescription, longDescription, sourceUrl, linkUrl}) => {
  const [isTextShown, setIsTextShown] = useState(false);

  const renderAvatars = () => {
    return avatars.map((avatar) => {
        return <Avatar alt={avatar.alt} src={avatar.url} sx={{ width: 25, height: 25 }}/>
    })
    }

  return (
    <Card variant="outlined" style={{minHeight: "400px"}}>
    <CardMedia
      component="img"
      height="140"
      image={imageUrl}
      alt={altText}
    />
    <CardContent>
      <Typography variant="h5" align="center">
        {title}
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        {renderAvatars()}
      </Stack>
      <Box mt={2}>
        <Typography variant="body1">
            {   isTextShown
                ? longDescription
                : shortDescription
            }
        </Typography>
        <Button onClick={() => setIsTextShown(!isTextShown)}>
            {   isTextShown ? "Show Less" : "Show More" }
        </Button>
      </Box>

      <Stack direction="row" spacing={4} justifyContent="center" mt={2}>
        
      {sourceUrl === "" ? null :
        <Link
          href={sourceUrl}
          color="inherit"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon />
            <Typography variant="body2">Source Code</Typography>
          </Stack>
        </Link>
      }
        {linkUrl === "" ? null : 
        <Link
          href={linkUrl}
          color="inherit"
          underline="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <OpenInNewIcon />
            <Typography variant="body2">Live Example</Typography>
          </Stack>
        </Link>
        }
      </Stack>
    </CardContent>
  </Card>

  );
};

export default ProjectCard;
