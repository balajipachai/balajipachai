import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Paper,
  Link,
  CircularProgress,
  Chip,
  Modal,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import CoffeeIcon from "@mui/icons-material/LocalCafe";
import MediumIcon from "@mui/icons-material/Article";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import FolderIcon from "@mui/icons-material/Folder";
import TimelineIcon from "@mui/icons-material/Timeline";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import AchievementIcon from "@mui/icons-material/MilitaryTech";
import BugReportIcon from "@mui/icons-material/BugReport";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GistIcon from "@mui/icons-material/Description";
import RepoIcon from "@mui/icons-material/Book";

const MotionBox = motion(Box);

// Custom Stack Overflow SVG Icon
const StackOverflowSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="3" y="17" width="15" height="3" fill="#BCBBBB" />
    <rect x="5" y="15" width="11" height="1.5" fill="#BCBBBB" />
    <rect x="5" y="13" width="11" height="1.5" fill="#BCBBBB" />
    <rect x="5" y="11" width="11" height="1.5" fill="#BCBBBB" />
    <path d="M8 10L16 6" stroke="#F48024" strokeWidth="1.5" />
    <rect
      x="3"
      y="3"
      width="15"
      height="14"
      rx="2"
      stroke="#F48024"
      strokeWidth="2"
    />
    <rect x="7" y="19" width="7" height="1" fill="#F48024" />
  </svg>
);

const socialLinks = [
  {
    icon: <GitHubIcon />,
    url: "https://github.com/balajipachai",
    label: "GitHub",
  },
  {
    icon: <LinkedInIcon />,
    url: "https://linkedin.com/in/balaji-shetty-pachai",
    label: "LinkedIn",
  },
  {
    icon: <MediumIcon />,
    url: "https://medium.com/@balajishettypachai",
    label: "Medium",
  },
  {
    icon: <YouTubeIcon />,
    url: "https://www.youtube.com/@thebasics.academy",
    label: "YouTube",
  },
  {
    icon: <EmailIcon />,
    url: "mailto:iamthebatman.superjet886@passfwd.com",
    label: "Email",
  },
];

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [githubStats, setGithubStats] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
    forks: 0,
    openIssues: 0,
    watchers: 0,
    years: 0,
    gists: 0,
    topLanguages: [] as string[],
    mostStarredRepo: { name: "", stars: 0, url: "" },
  });
  const [loadingStats, setLoadingStats] = useState(true);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const [focusedSkill, setFocusedSkill] = useState<number | null>(null);

  const statCards = [
    {
      icon: <GroupIcon sx={{ fontSize: 40, color: "secondary.main", mb: 1 }} />,
      label: "Followers",
      value: githubStats.followers,
      description: "GitHub users following you.",
      link: "https://github.com/balajipachai?tab=followers",
    },
    {
      icon: (
        <AchievementIcon sx={{ fontSize: 40, color: "warning.main", mb: 1 }} />
      ),
      label: "GitHub Achievements",
      value: githubStats.stars,
      description: "Total stars received across all repositories.",
      link: "https://github.com/balajipachai?tab=achievements",
    },
    {
      icon: <CallSplitIcon sx={{ fontSize: 40, color: "info.main", mb: 1 }} />,
      label: "Forks",
      value: githubStats.forks,
      description: "Total forks of your repositories.",
      link: "https://github.com/balajipachai?tab=repositories",
    },

    {
      icon: (
        <TimelineIcon sx={{ fontSize: 40, color: "success.main", mb: 1 }} />
      ),
      label: "Years Active",
      value: githubStats.years,
      description: "Years since your first public repository.",
      link: "https://github.com/balajipachai",
    },
    {
      icon: <GistIcon sx={{ fontSize: 40, color: "secondary.main", mb: 1 }} />,
      label: "Public Gists",
      value: githubStats.gists,
      description: "Total public gists.",
      link: "https://gist.github.com/balajipachai",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />,
      label: "Top Languages",
      value: githubStats.topLanguages.join(", "),
      description: "Most used programming languages.",
      link: "https://github.com/balajipachai?tab=repositories",
    },
  ];

  const skillCards = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />,
      title: "Smart Contract Development",
      description:
        "Expert in developing secure and efficient smart contracts using Solidity, with a focus on gas optimization and security best practices.",
      details:
        "I have developed smart contracts for DeFi, NFT Marketplace, Cross-Chain Swaps, Airdrops, Tokens (ERC20, ERC721, ERC1155), Staking etc. ensuring robust security and optimal performance.",
    },
    {
      icon: (
        <StorageIcon sx={{ fontSize: 40, color: "secondary.main", mb: 1 }} />
      ),
      title: "Blockchain Solutions",
      description:
        "Be it EVM/Non-EVM Chains, Be it DeFi/NFT/Cross-Chain/Airdrops/Staking/PoS Tokens, I have provided solutions for all of them.",
      details:
        "Most of my projects involved working from the scratch, right from architecture to implementation to testing and deployment. I have worked on multiple EVM blockchains.",
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />,
      title: "Backend Development",
      description:
        "Building backend services for blockchain applications, with a focus on performance and security.",
      details:
        "I have experience building backend services for blockchain applications, including APIs, databases, graphql schemas and microservices.",
    },
  ];

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const userRes = await fetch(
          "https://api.github.com/users/balajipachai"
        );
        const userData = await userRes.json();
        const reposRes = await fetch(userData.repos_url + "?per_page=100");
        const reposData = await reposRes.json();
        let stars = 0,
          forks = 0,
          openIssues = 0,
          watchers = 0;
        const languageCount: Record<string, number> = {};
        let mostStarred = { name: "", stars: 0, url: "" };
        let firstYear = new Date().getFullYear();
        if (Array.isArray(reposData)) {
          reposData.forEach((repo: any) => {
            stars += repo.stargazers_count || 0;
            forks += repo.forks_count || 0;
            openIssues += repo.open_issues_count || 0;
            watchers += repo.watchers_count || 0;
            if (repo.language) {
              languageCount[repo.language] =
                (languageCount[repo.language] || 0) + 1;
            }
            if (repo.stargazers_count > mostStarred.stars) {
              mostStarred = {
                name: repo.name,
                stars: repo.stargazers_count,
                url: repo.html_url,
              };
            }
            const year = new Date(repo.created_at).getFullYear();
            if (year < firstYear) firstYear = year;
          });
        }
        const sortedLangs = (
          Object.entries(languageCount) as [string, number][]
        )
          .sort((a, b) => b[1] - a[1])
          .slice(0, 2)
          .map(([lang]) => lang);
        setGithubStats({
          repos: userData.public_repos,
          followers: userData.followers,
          stars,
          forks,
          openIssues,
          watchers,
          years: new Date().getFullYear() - firstYear + 1,
          gists: userData.public_gists,
          topLanguages: sortedLangs,
          mostStarredRepo: mostStarred,
        });
      } catch {
        // fallback to zeros
      }
      setLoadingStats(false);
    }
    fetchGitHubStats();
  }, []);

  const statCardSx = {
    bgcolor: "background.paper",
    textAlign: "center",
    p: 3,
    borderRadius: 3,
    boxShadow: 3,
    minHeight: 210,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <Helmet>
        <title>Balaji Pachai - Blockchain Developer</title>
        <meta
          name="description"
          content="Balaji Pachai is a blockchain developer and smart contract expert specializing in Ethereum, Solidity, and decentralized applications."
        />
      </Helmet>

      {/* <Box
        component="img"
        src="/header-image.png"
        alt="Hey! I am Balaji Shetty Pachai"
        sx={{
          width: "100%",
          maxHeight: 180,
          objectFit: "cover",
          mb: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      /> */}

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Blockchain Engineer
              </Typography>
              <Typography
                variant="subtitle1"
                align="left"
                sx={{ fontStyle: "italic", color: "text.secondary", mb: 2 }}
              >
                "I'm the type of person that if you ask me a question and I
                don't know the answer, I'm going to tell you that I don't know.
                But I bet you what, I know how to find the answer and I will
                find the answer."
                <br />— The Pursuit of Happyness
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                Building secure, gas-efficient and optimized decentralized
                applications.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="/projects"
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    px: 4,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="/contact"
                  sx={{
                    borderRadius: 2,
                    py: 1.5,
                    px: 4,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Contact Me
                </Button>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
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
                  href="https://medium.com/@balajishettypachai"
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
                  <MediumIcon />
                </IconButton>
                <IconButton
                  href="https://www.youtube.com/@thebasics.academy"
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
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  href="mailto:iamthebatman.superjet886@passfwd.com"
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
                  <EmailIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src="/blockchain-development.svg"
                  alt="Blockchain Development"
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    height: "auto",
                    filter: "drop-shadow(0 0 20px rgba(0, 188, 212, 0.3))",
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>

          {/* Featured Skills Section */}
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 2, fontWeight: 700 }}
          >
            Featured Skills
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            paragraph
            sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
          >
            Specializing in backend development, blockchain solutions, and smart
            contract development with a focus on security and gas-efficiency.
          </Typography>

          <Grid container spacing={4}>
            {skillCards.map((card, idx) => (
              <Grid item xs={12} md={4} key={card.title}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "visible",
                    cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                      borderColor: "primary.main",
                    },
                  }}
                  onClick={() => setFocusedSkill(idx)}
                >
                  <CardContent sx={{ flexGrow: 1, pt: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 2,
                        color: "primary.main",
                      }}
                    >
                      {card.icon}
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ ml: 1, fontWeight: 600 }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
                {/* Modal for focused skill card */}
                <Modal
                  open={focusedSkill === idx}
                  onClose={() => setFocusedSkill(null)}
                  closeAfterTransition
                  BackdropProps={{
                    style: { background: "rgba(10,25,41,0.85)" },
                  }}
                >
                  <Fade in={focusedSkill === idx}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        borderRadius: 4,
                        boxShadow: 24,
                        p: 6,
                        minWidth: 320,
                        maxWidth: 400,
                        outline: "none",
                        textAlign: "center",
                      }}
                    >
                      {card.icon}
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}
                      >
                        {card.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3 }}>
                        {card.details}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setFocusedSkill(null)}
                        sx={{ borderRadius: 2 }}
                      >
                        Close
                      </Button>
                    </Box>
                  </Fade>
                </Modal>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ my: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                background: "rgba(0,188,212,0.08)",
                borderLeft: "4px solid #00bcd4",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Fun Fact
              </Typography>
              <Typography variant="body1">
                All of ERC20's & ERC721's trivial learning is around the
                functions <b>transfer</b> & <b>transferFrom</b>.
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
            >
              Achievements & Stats
            </Typography>
            {loadingStats ? (
              <Box sx={{ display: "flex", justifyContent: "center", my: 6 }}>
                <CircularProgress color="primary" />
              </Box>
            ) : (
              <Grid container spacing={4} justifyContent="center">
                {statCards.map((card, idx) => (
                  <Grid item xs={12} sm={6} md={3} key={card.label}>
                    <Card sx={statCardSx} onClick={() => setFocusedCard(idx)}>
                      {card.icon}
                      <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, mb: 1, color: "primary.main" }}
                      >
                        {card.value}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 500, mb: 1 }}
                      >
                        {card.label}
                      </Typography>
                    </Card>
                    {/* Modal for focused card */}
                    <Modal
                      open={focusedCard === idx}
                      onClose={() => setFocusedCard(null)}
                      closeAfterTransition
                      BackdropProps={{
                        style: { background: "rgba(10,25,41,0.85)" },
                      }}
                    >
                      <Fade in={focusedCard === idx}>
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "background.paper",
                            borderRadius: 4,
                            boxShadow: 24,
                            p: 6,
                            minWidth: 320,
                            maxWidth: 400,
                            outline: "none",
                            textAlign: "center",
                          }}
                        >
                          {card.icon}
                          <Typography
                            variant="h3"
                            sx={{
                              fontWeight: 700,
                              mb: 2,
                              color: "primary.main",
                            }}
                          >
                            {card.value}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, mb: 2 }}
                          >
                            {card.label}
                          </Typography>
                          <Typography variant="body1" sx={{ mb: 3 }}>
                            {card.description}
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ borderRadius: 2 }}
                          >
                            View on GitHub
                          </Button>
                        </Box>
                      </Fade>
                    </Modal>
                  </Grid>
                ))}
              </Grid>
            )}
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="https://github.com/balajipachai"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                sx={{ borderRadius: 2 }}
              >
                View My GitHub
              </Button>
            </Box>
          </Box>
        </MotionBox>

        <Box sx={{ my: 8, textAlign: "center" }}>
          <Button
            variant="contained"
            color="warning"
            size="large"
            href="https://www.buymeacoffee.com/balajipachai"
            startIcon={<CoffeeIcon />}
            sx={{ borderRadius: 2, mb: 2 }}
          >
            Buy Me a Coffee
          </Button>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
            Connect with me
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {socialLinks.map((link) => (
              <IconButton
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                sx={{
                  "&:hover": {
                    transform: "translateY(-3px)",
                    transition: "transform 0.2s",
                  },
                }}
                aria-label={link.label}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
