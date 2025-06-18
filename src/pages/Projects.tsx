import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
  Collapse,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
  Modal,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CoffeeIcon from "@mui/icons-material/LocalCafe";

const MotionBox = motion(Box);

const projects = [
  {
    title: "Shib Newsletter Cover V2",
    description:
      "Smart Contracts for managing newsletter cover NFTs with batch minting capabilities. Developed, implemented & deployed the contracts.",
    technologies: ["Solidity", "Hardhat", "Shibarium", "Ethers.js"],
    links: {
      github: "https://github.com/shibaone/shib-newsletter-contracts",
      live: "https://www.shibariumscan.io/address/0xa68e8083507688bCA90129102885F0775B5df706?tab=contract",
    },
    icon: <SecurityIcon />,
  },
  {
    title: "Staking Contract",
    description:
      "Implemented a comprehensive staking system with rigorous testing and security measures.",
    technologies: ["Solidity", "BSC", "Truffle"],
    links: {
      github: "https://github.com/balajipachai/bitdiamond-sc",
      live: "https://bscscan.com/address/0x34de06b7036db790e706f28a7ef9fcedb98971cc",
    },
    icon: <SecurityIcon />,
  },
  {
    title: "Treasury Smart Contract",
    description:
      "Developed a robust treasury smart contract for efficient fund management and financial transparency.",
    technologies: ["Solidity", "Ethereum", "OpenZeppelin"],
    links: {
      github:
        "https://github.com/b-cube-ai/b-cube-ico/tree/feat/new-sale-contracts",
      live: "https://etherscan.io/address/0x9741fcb37249584f52c7dc613e5f2bc6280d463e",
    },
    icon: <SecurityIcon />,
  },
  {
    title: "Solhub Token Ecosystem",
    description:
      "Spearheaded the design and implementation of the SolhubToken contract with industry-standard security measures.",
    technologies: ["Solidity", "Ethereum", "Web3.js"],
    links: {
      github: "https://github.com/solhub-finance/ico-contracts",
    },
    icon: <SecurityIcon />,
  },
  {
    title: "FAVE ERC-20 Token",
    description:
      "Developed the FAVECOIN ERC-20 token contract with an innovative fee mechanism for specific transfers.",
    technologies: ["Solidity", "BSC", "Hardhat"],
    links: {
      github: "https://github.com/balajipachai/favecoin-sc",
      live: "https://testnet.bscscan.com/token/0x51aC4626A5223305a22336483bFfE7862f5f0858",
    },
    icon: <SecurityIcon />,
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded((prev) => !prev);
  const [focusedProject, setFocusedProject] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Projects - Balaji Pachai</title>
        <meta
          name="description"
          content="Explore Balaji Pachai's portfolio of blockchain and smart contract projects, including token contracts, DeFi protocols, and DApps."
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
            My Projects
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            paragraph
            sx={{ mb: 8, maxWidth: 800, mx: "auto" }}
          >
            A collection of blockchain and smart contract projects I've worked
            on, showcasing my expertise in developing secure and efficient
            decentralized applications.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, idx) => (
              <Grid item xs={12} md={6} key={project.title}>
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
                  onClick={() => setFocusedProject(idx)}
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
                      {project.icon}
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ ml: 1, fontWeight: 600 }}
                      >
                        {project.title}
                      </Typography>
                    </Box>
                    <Typography
                      paragraph
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mt: 2,
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{
                            borderRadius: 2,
                            "& .MuiChip-label": {
                              px: 1,
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mr: 1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Code
                    </Button>
                    {project.links.live && (
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Live
                      </Button>
                    )}
                  </CardActions>
                </Card>
                <Modal
                  open={focusedProject === idx}
                  onClose={() => setFocusedProject(null)}
                  closeAfterTransition
                  BackdropProps={{
                    style: { background: "rgba(10,25,41,0.85)" },
                  }}
                >
                  <Fade in={focusedProject === idx}>
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
                        maxWidth: 500,
                        outline: "none",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                        }}
                      >
                        {project.icon}
                        <Typography
                          variant="h4"
                          sx={{ ml: 1, fontWeight: 700, color: "primary.main" }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 2,
                          justifyContent: "center",
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{
                              borderRadius: 2,
                              "& .MuiChip-label": { px: 1 },
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHubIcon />}
                        sx={{ borderRadius: 2, mr: 1 }}
                      >
                        View Code
                      </Button>
                      {project.links.live && (
                        <Button
                          variant="outlined"
                          color="secondary"
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<LaunchIcon />}
                          sx={{ borderRadius: 2, ml: 1 }}
                        >
                          View Live
                        </Button>
                      )}
                      <Box sx={{ mt: 3 }}>
                        <Button
                          variant="text"
                          color="primary"
                          onClick={() => setFocusedProject(null)}
                        >
                          Close
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                </Modal>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ my: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Smart Contract Refactoring & Audit Response Portfolio
                </Typography>
                <IconButton
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" paragraph>
                    Embarked on a comprehensive journey of refactoring and
                    enhancing the Garfield token contract, diligently addressing
                    all audit recommendations. The meticulous effort involved
                    not only refactoring the existing codebase but also
                    fortifying it with additional tests, aiming for near 100%
                    code coverage.
                  </Typography>
                  <ul>
                    <li>Refactoring for Enhanced Security</li>
                    <li>Audit Response Implementation</li>
                    <li>Testing Infrastructure Overhaul</li>
                    <li>Code Coverage Aimed at Perfection</li>
                    <li>Documentation and Transparency</li>
                  </ul>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/AndreaGarfield/GAR-SC-EDIT-"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderRadius: 2, mt: 2 }}
                  >
                    View GitHub Repository
                  </Button>
                </Box>
              </Collapse>
            </Paper>
          </Box>

          <Box sx={{ my: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
              Enterprise Projects
            </Typography>
            <Grid container spacing={4}>
              {/* OpenTherapoid Project */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "visible",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
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
                      <StorageIcon />
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ ml: 1, fontWeight: 600 }}
                      >
                        OpenTherapoid
                      </Typography>
                    </Box>
                    <Typography
                      paragraph
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      A comprehensive blockchain solution for healthcare data
                      management and tokenization, featuring cross-chain
                      functionality and advanced security measures.
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Smart Contracts
                      </Typography>
                      <Box sx={{ pl: 2 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          • OpenTherapoid Token (Ethereum Mainnet)
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          • ChildOpenTherapoid (Polygon Mainnet)
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          • IssueSCI (Polygon Mainnet)
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Key Features
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        <Chip
                          label="Anti-whale"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label="Batch Processing"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label="MultiSig Wallet"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label="Token Bridging"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label="Risk Mitigation"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href="https://etherscan.io/address/0x8282c4f8debbb1d0749e870697df688f65937cbb#code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Main Contract
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* EarnTV Project */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "visible",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
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
                      <SecurityIcon />
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ ml: 1, fontWeight: 600 }}
                      >
                        EarnTV
                      </Typography>
                    </Box>
                    <Typography
                      paragraph
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      A decentralized streaming platform with NFT-based
                      subscription system, featuring secure token economics and
                      innovative reward mechanisms.
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Smart Contracts
                      </Typography>
                      <Box sx={{ pl: 2 }}>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          • EarnTV Token (Polygon Mainnet)
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          • IssueETV (Polygon Mainnet)
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                          • BronzeNFT & SilverNFT
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Key Features
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        <Chip
                          label="NFT Subscriptions"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label="Anti-whale"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label="Batch Processing"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label="MultiSig Wallet"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          label="Risk Mitigation"
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      href="https://polygonscan.com/address/0xc77aea972f862df1f6a520be673df63a01255ff9#code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Main Contract
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ my: 8 }}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                background: "rgba(0,188,212,0.08)",
                borderLeft: "4px solid #00bcd4",
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Technical Excellence
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                These enterprise projects demonstrate advanced blockchain
                implementation capabilities, including:
              </Typography>
              <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Chip
                  label="Cross-chain Interoperability"
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 2 }}
                />
                <Chip
                  label="Advanced Security Measures"
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 2 }}
                />
                <Chip
                  label="Gas Optimization"
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 2 }}
                />
                <Chip
                  label="Scalable Architecture"
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 2 }}
                />
              </Box>
            </Paper>
          </Box>

          <Box sx={{ my: 8, textAlign: "center" }}>
            <Button
              variant="contained"
              color="warning"
              size="large"
              href="https://www.buymeacoffee.com/balajipachai"
              startIcon={<CoffeeIcon />}
              sx={{ borderRadius: 2 }}
            >
              Buy Me a Coffee
            </Button>
          </Box>
        </MotionBox>
      </Container>
    </>
  );
};

export default Projects;
