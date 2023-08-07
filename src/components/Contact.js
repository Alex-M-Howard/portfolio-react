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
    <Grid container justifyContent="center" alignItems="center">
      <Grid container item xs={12} md={4} >
        <div className="contact" style={contactStyle}>
          <Typography variant="h2" sx={{mb: 3}}>
            Contact
          </Typography>
          

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4} >
          <Button
              sx={{ height: "40px", ml: '40px' }}
              variant="contained"
              color="primary"
              href="mailto:alex-m-howard@pm.me"
              target="_blank"
              rel="noopener noreferrer">
              
              Email
          </Button>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Button
          sx={{ height: "40px", ml: '40px' }}
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/alex-m-howard/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
          </Button>
        </Grid>
          
        <Grid item xs={12} sm={4} >
          <Button
          sx={{ height: "40px", ml: '40px' }}
          variant="contained"
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
            style={{ minWidth: '320px', minHeight: '1000px', width: '100%' }}
          />
            <Helmet>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </Helmet>
            <br />
            <br />
          
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
