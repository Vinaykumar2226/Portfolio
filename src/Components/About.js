import { Typography, Box, Grid } from "@mui/material";
import React from "react";

function About() {
  return (
    <section id="About">
      <Grid
        container
        sx={{ height: { sm: "700px", md: "650px", lg: "650px" } }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ display: "flex" }}>
          <Box
            display="flex"
            flex={1}
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "20px" }}
          >
            <Typography
              variant="p"
              sx={{
                fontFamily: "Bebas Neue",
                letterSpacing: "2px",
                fontSize: "50px",
                padding: "10px",
                color: "white",
              }}
            >
              About Me
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box p={7} display="flex" flex={1} flexDirection="column">
            <Typography variant="p" sx={{ color: "white", fontSize: "25px" }}>
              I am a FullStack web developer . Has Computer Engineering
              background.{" "}
            </Typography>
            <Typography
              sx={{ color: "rgba(199, 199, 199, 1)", marginTop: "15px" }}
            >
              I am from Hyderabad and looking for exciting and challenging tasks
              and opportunities across the nation to showcase my skills in web
              development. Has Computer Science Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring alot more deeper
              into the Web development. While I am not programming, I enjoy
              playing Cricket, photography and playing Games. Learning more to
              improve skill.
            </Typography>
            <Typography sx={{ color: "orange", marginTop: "30px" }}>
              Wanna Know more About me ? Here is my Resume
            </Typography>
            <Box>
              <button class="btn" type="button">
                <a href="https://drive.google.com/file/d/1pOM2HBFixCMHuL5MXejZ4Tpyavc-5J1Y/view?usp=drive_link">
                  <strong>Resume</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </a>
              </button>
            </Box>
          </Box>
        </Grid>
      </Grid>{" "}
    </section>
  );
}

export default About;
