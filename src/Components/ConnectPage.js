import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";

function ConnectPage() {
  return (
    <section id="Contact Me">
      <Box>
        <Grid container>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "Bebas Neue",
                letterSpacing: "2px",
                fontSize: "50px",
                padding: "25px",
                color: "white",
                margin: "20px",
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              sx={{
                color: "rgba(199, 199, 199, 1)",
                marginTop: "15px",
                padding: "25px",
              }}
            >
              Liked my work? Wanna hire me or work together? Contact Me here
            </Typography>
            <div className="card">
              <a href="https://github.com/Vinaykumar2226">
                <img
                  src={require("../images/github.webp")}
                  width={50}
                  className="icons"
                />
              </a>
              <a href="https://www.linkedin.com/in/vinay-kumar-7ba205244/">
                <img
                  src={require("../images/linkedin.png")}
                  width={50}
                  className="icons"
                />
              </a>
              <a href="https://www.instagram.com/__vinni__unofficial__/">
                <img
                  src={require("../images/insta.jpg")}
                  width={50}
                  className="icons"
                />
              </a>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <form method="POST" action="https://getform.io/f/Rb4l16bB">
              <Box display="flex" flexDirection="column" ml={10}>
                <Typography
                  variant="p"
                  sx={{ color: "rgba(199, 199, 199, 1)", marginTop: "15px" }}
                >
                  Name
                </Typography>
                <input className="inputtext" type="text" name="Name" />
                <Typography
                  variant="p"
                  sx={{ color: "rgba(199, 199, 199, 1)", marginTop: "15px" }}
                >
                  Email
                </Typography>
                <input className="inputtext" type="text" name="Email" />
                <Typography
                  variant="p"
                  sx={{ color: "rgba(199, 199, 199, 1)", marginTop: "15px" }}
                >
                  Subject
                </Typography>
                <input className="inputtext" type="text" name="Subject" />
                <Typography
                  variant="p"
                  sx={{ color: "rgba(199, 199, 199, 1)", marginTop: "15px" }}
                >
                  Message
                </Typography>
                <textarea
                  className="inputtextarea"
                  type="textarea"
                  rows={5}
                  cols={40}
                  name="Message"
                />
                <button type="submit" className="shadow__btn">
                  Submit
                </button>
              </Box>
            </form>
          </Grid>
        </Grid>
        <Box sx={{ margin: "10px" }} display="flex" justifyContent="center">
          <Typography
            variant="p"
            sx={{
              color: "orange",
              fontFamily: "Bebas Neue",
              letterSpacing: 3,
              margin: "20px",
            }}
          >
            Designed and Developed by <span>Vinay Kumar</span>
          </Typography>
        </Box>
      </Box>
    </section>
  );
}

export default ConnectPage;
