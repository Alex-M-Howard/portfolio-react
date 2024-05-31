import React from "react";
import { Helmet } from "react-helmet";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Contact = () => {
  // Add a style object for the About component
  const contactStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
  };

  return (
    <Grid container justifyContent="center" alignItems="center" >
          <Typography variant="h2" style={{margin: '5px auto'}}>
            Contact
          </Typography>
          

        <Grid container item direction="row" justifyContent="space-evenly" alignItems="center">

          <Grid 
            item
            xs={12} sm={4} md={3} 
            >
            <Button
                sx={{ height: "40px", mb: '20px' }}
                variant="contained"
                color="primary"
                fullWidth
                href="mailto:alex-m-howard@pm.me"
                target="_blank"
                rel="noopener noreferrer">
                
                Email
            </Button>
            </Grid>

            <Grid 
            item
            xs={12} sm={4} md={3} 
            >
            <Button
            sx={{ height: "40px", mb: '20px' }}
            variant="contained"
            fullWidth
            color="primary"
            href="https://www.linkedin.com/in/alex-m-howard/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
            </Button>
            </Grid>

            <Grid 
            item
            xs={12} sm={4} md={3} 
            >
            <Button
            sx={{ height: "40px", mb: '20px' }}
            variant="contained"
            fullWidth
            color="primary"
            href="https://docs.google.com/uc?id=1ah7S6GIEzPNSML_u068FdVLhaJZaFSmZ&export=download"
            target="_blank"
            rel="noopener noreferrer">
            Resume
            </Button>
          </Grid>
        </Grid>

          <br />
          <br />

          <div className="calendly-inline-widget"
            data-url="https://calendly.com/alex-m-howard/30min?hide_gdpr_banner=1"
            style={{ minWidth: '320px',height: '900px', width: '100%'}}
          />
            <Helmet>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </Helmet>
            <br />
            <br />
          
    </Grid>
  );
};

export default Contact;
