import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import imgData from "./TechStackImagesData";

function TechStack() {
  return (
    <section id="TechStack">
      <Box>
        <Typography
          variant="p"
          sx={{
            fontFamily: "Bebas Neue",
            letterSpacing: "2px",
            fontSize: "50px",
            padding: "15px",
            color: "white",
          }}
        >
          TechStack
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            display="flex"
            justifyItems="center"
            alignItems="center"
            alignSelf="center"
            sx={{
              background: "rgb(255,255,255)",
              borderRadius: "50px",
              margin: "30px",
              padding: "25px",
              width: "80%",
            }}
          >
            {imgData.map((item) => (
              <Grid item xs={6} sm={4} md={3}>
                <img
                  className="techStack"
                  src={require(`../tech-stack/${item}.png`)}
                  width={100}
                  height={100}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </section>
  );
}

export default TechStack;
