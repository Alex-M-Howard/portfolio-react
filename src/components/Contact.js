import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Contact = () => {
  // Add a style object for the About component
  const contactStyle = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid container item xs={12} sm={8} >
    <div className="contact" style={contactStyle}>
      <Typography variant="h2" sx={{mb: 3}}>
        Contact
      </Typography>

      <div class="calendly-inline-widget" data-url="https://calendly.com/alex-m-howard/30min?hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

      <Typography variant="body1" gutterBottom>
        If you'd like to get in touch with me by email: <br/>
          <a href="mailto:alex-m-howard@pm.me">
            alex-m-howard@pm.me
          </a>
      <br />
      <br />
         You can also find me on{" "}
          <a href="https://www.linkedin.com/in/alex-m-howard/" target="_blank">
            LinkedIn
          </a>
      </Typography>
    </div>
      </Grid>
      </Grid>
  );
};

export default Contact;
