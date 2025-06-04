import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00bcd4", // Professional cyan
      light: "#33c9dc",
      dark: "#008394",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ff4081", // Modern pink
      light: "#ff6699",
      dark: "#b22c5a",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0a1929", // Deep blue background
      paper: "#132f4c", // Slightly lighter blue for cards
    },
    text: {
      primary: "#ffffff",
      secondary: "#b2bac2",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "2.75rem",
      fontWeight: 600,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: 600,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 600,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: "0.0075em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 24px",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
