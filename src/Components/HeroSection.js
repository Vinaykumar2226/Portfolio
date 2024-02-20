import { Grid, Typography, Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import pic from "../images/mypic (2).jpg";
import github from "./github.png";
import linkedin from "./linkedin.png";

function HeroSection() {
  return (
    <section id="Home">
      <Box mt={10}>
        <Grid container>
          <Grid
            item
            md={6}
            lg={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              // height={800}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Bebas Neue",
                  fontSize: "102px",
                  padding: "15px",
                  color: "white",
                }}
              >
                HI,I AM
                <br />
                Vinay Kumar.
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "20px",
                  padding: "25px",
                  color: "rgba(199, 199, 199, 1)",
                }}
              >
                I’m a <span className="role">FullStack web developer</span>{" "}
                passionate about building accessible and user friendly and
                responsive websites.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box>
                  <a href="https://github.com/Vinaykumar2226">
                    <img src={github} width={40} className="icon" />
                  </a>
                </Box>

                <Box>
                  <a href="https://www.linkedin.com/in/vinay-kumar-7ba205244/">
                    <img src={linkedin} width={40} className="icon" />
                  </a>
                </Box>
              </Box>
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
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{}}>
              <img src={pic} height={600} className="myimg" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default HeroSection;
