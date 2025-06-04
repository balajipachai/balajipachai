import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children || <></>}
    </Slide>
  );
}

const Navbar = (props: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Projects", path: "/projects" },
    { text: "Blog", path: "/blog" },
    { text: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            selected={location.pathname === item.path}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(0, 188, 212, 0.08)",
                "&:hover": {
                  backgroundColor: "rgba(0, 188, 212, 0.12)",
                },
              },
            }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          color="transparent"
          elevation={0}
          sx={{
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(10, 25, 41, 0.8)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <CodeIcon sx={{ mr: 1, color: "primary.main" }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    background:
                      "linear-gradient(45deg, #00bcd4 30%, #ff4081 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Balaji Pachai
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              {isMobile ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box sx={{ display: "flex", gap: 1 }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      component={RouterLink}
                      to={item.path}
                      color="inherit"
                      sx={{
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "2px",
                          bottom: 0,
                          left: 0,
                          backgroundColor: "primary.main",
                          transform:
                            location.pathname === item.path
                              ? "scaleX(1)"
                              : "scaleX(0)",
                          transformOrigin: "bottom right",
                          transition: "transform 0.3s ease-out",
                        },
                        "&:hover::after": {
                          transform: "scaleX(1)",
                          transformOrigin: "bottom left",
                        },
                      }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backgroundColor: "background.paper",
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* Spacer */}
    </>
  );
};

export default Navbar;
