import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

const MotionBox = motion(Box);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: "Thank you for your message! I'll get back to you soon.",
      severity: "success",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Helmet>
        <title>Contact - Balaji Pachai</title>
        <meta
          name="description"
          content="Get in touch with Balaji Pachai, a blockchain developer and smart contract expert. Let's discuss your project or collaboration opportunities."
        />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 2, fontWeight: 700 }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            paragraph
            sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's discuss how we can work together to bring your ideas to
            life.
          </Typography>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  position: "relative",
                  overflow: "visible",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #00bcd4 0%, #ff4081 100%)",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 4 }}
                >
                  Send a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{
                          borderRadius: 2,
                          py: 1.5,
                          px: 4,
                          textTransform: "none",
                          fontSize: "1.1rem",
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "visible",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #00bcd4 0%, #ff4081 100%)",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 4 }}
                >
                  Connect With Me
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ lineHeight: 1.8, mb: 4 }}
                >
                  Feel free to reach out through any of these platforms. I'm
                  always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Follow Me
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                    <IconButton
                      href="https://github.com/balajipachai"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      sx={{
                        "&:hover": {
                          transform: "translateY(-3px)",
                          transition: "transform 0.2s",
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      href="https://linkedin.com/in/balaji-shetty-pachai"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary"
                      sx={{
                        "&:hover": {
                          transform: "translateY(-3px)",
                          transition: "transform 0.2s",
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      href="mailto:iamthebatman.superjet886@passfwd.com"
                      color="primary"
                      sx={{
                        "&:hover": {
                          transform: "translateY(-3px)",
                          transition: "transform 0.2s",
                        },
                      }}
                    >
                      <EmailIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
