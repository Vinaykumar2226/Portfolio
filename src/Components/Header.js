import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  MenuItem,
  Menu,
  MenuList,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link, animateScroll as scroll } from "react-scroll";
import menuicon from "../images/menuicon.png";
function ResponsiveBar({ scrollToAbout }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const list = ["Home", "About", "Projects", "TechStack", "Contact Me"];

  return (
    <AppBar position="fixed" sx={{ padding: "10px", backgroundColor: "black" }}>
      <Toolbar>
        <Typography
          variant="p"
          component="div"
          sx={{
            display: { xs: "none", md: "flex" },
            color: "rgba(199, 199, 199, 1)",
            flexGrow: 1,
            fontFamily: "Bebas Neue",
            letterSpacing: "2px",
            fontSize: "40px",
            padding: "10px",
          }}
        >
          Vinay Kumar
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {list.map((item) => (
            <Button
              sx={{
                color: "white",
                ":hover": {
                  padding: "10px",
                  fontSize: "20px",
                  color: "orange",
                  textDecoration: "underline",
                },
              }}
            >
              <Link
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
              >
                {item}
              </Link>
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleOpenNavMenu}
          >
            {/* <MenuIcon color="secondary" fontSize="large" /> */}
            <img width={30} src={menuicon} />
          </IconButton>
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            edge="start"
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
            }}
          >
            <MenuList
              edge="start"
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "200px",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {list.map((item) => (
                <Link
                  activeClass="active"
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={700}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    sx={{ padding: "10px", width: "150px" }}
                  >
                    {item}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: {
              xs: "flex",
              md: "none",
              color: "rgba(199, 199, 199, 1)",
              flexGrow: 1,
              fontFamily: "Bebas Neue",
              letterSpacing: "2px",
              fontSize: "40px",
              padding: "10px",
            },
          }}
        >
          Vinay Kumar
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveBar;
