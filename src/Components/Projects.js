import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import data from "./Projrctsdata";

function Projects() {
  return (
    <section id="Projects">
      <Box sx={{}}>
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
            textOverflow={"wrap"}
          >
            Featured Projects
          </Typography>
          <Typography
            sx={{
              color: "rgba(199, 199, 199, 1)",
              paddingLeft: "15px",
            }}
          >
            Here are some of the selected projects that showcase my passion for
            Web development.
          </Typography>
        </Box>
        <Grid
          container
          display="flex"
          sx={{ height: "100%", marginTop: "15px" }}
        >
          {data.map((item) => (
            <>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: "15px" }}
              >
                <Box
                  width="70%"
                  height="330px"
                  display="flex"
                  justifyItems="center"
                  alignItems="center"
                  sx={{
                    backgroundColor: "rgba(26, 26, 26, 1)",
                    borderRadius: "55px",
                  }}
                >
                  <Box
                    display="flex"
                    justifyItems="center"
                    alignItems="center"
                    sx={{ padding: "15px" }}
                  >
                    <img
                      src={require(`../images/${item.image}`)}
                      width="100%"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={12}
                xs={12}
                p={10}
                sx={{ paddingTop: "10px" }}
              >
                <Typography
                  variant="p"
                  sx={{ color: "orange", fontSize: "25px", fontWeight: "bold" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{ color: "rgba(199, 199, 199, 1)", marginTop: "15px" }}
                >
                  {item.description}
                </Typography>
                <Box marginTop={5}>
                  <Typography
                    variant="p"
                    sx={{
                      color: "white",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    Project Info
                  </Typography>
                  <hr />
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="p"
                      fontSize={15}
                      sx={{ color: "rgba(199, 199, 199, 1)" }}
                    >
                      Project type
                    </Typography>
                    <Typography
                      variant="p"
                      fontSize={15}
                      sx={{ color: "rgba(199, 199, 199, 1)" }}
                    >
                      {" "}
                      {item.type}
                    </Typography>
                  </Box>
                  <hr />
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="p"
                      fontSize={15}
                      sx={{ color: "rgba(199, 199, 199, 1)" }}
                    >
                      Tech Stack used
                    </Typography>
                    <Typography
                      variant="p"
                      fontSize={15}
                      sx={{ color: "yellow" }}
                    >
                      {" "}
                      {item.techStack}
                    </Typography>
                  </Box>
                  <hr />
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Typography
                      variant="p"
                      fontSize={15}
                      sx={{ color: "rgba(199, 199, 199, 1)" }}
                    >
                      Year
                    </Typography>
                    <Typography
                      variant="p"
                      fontSize={15}
                      sx={{ color: "rgba(199, 199, 199, 1)" }}
                    >
                      {" "}
                      {item.year}
                    </Typography>
                  </Box>
                  <hr />
                  <Box display="flex" justifyContent="space-around">
                    <Typography color="orange">
                      <a className="link" href={item.liveLink}>
                        Live Demo
                      </a>
                    </Typography>
                    <Typography color="orange">
                      <a className="link" href={item.github}>
                        See on github
                      </a>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </section>
  );
}

export default Projects;
