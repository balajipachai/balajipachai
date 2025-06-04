import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  Divider,
  Avatar,
  useTheme,
  useMediaQuery,
  Button,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import CoffeeIcon from "@mui/icons-material/LocalCafe";

const MotionBox = motion(Box);

const skills = [
  { name: "Solidity", icon: <CodeIcon /> },
  { name: "TypeScript", icon: <CodeIcon /> },
  { name: "Node.js", icon: <CodeIcon /> },
  { name: "GraphQL", icon: <CodeIcon /> },
  { name: "DApps", icon: <CodeIcon /> },
  { name: "Hardhat", icon: <CodeIcon /> },
  { name: "Foundry", icon: <CodeIcon /> },
  { name: "Web3.js", icon: <CodeIcon /> },
  { name: "Ethers.js", icon: <CodeIcon /> },
  { name: "MySQL", icon: <StorageIcon /> },
  { name: "MongoDB", icon: <StorageIcon /> },
  { name: "Git", icon: <StorageIcon /> },
  { name: "Smart Contracts", icon: <StorageIcon /> },
  { name: "Blockchain", icon: <StorageIcon /> },
  { name: "EVM Chains", icon: <SecurityIcon /> },
  { name: "OpenZeppelin", icon: <SecurityIcon /> },
  { name: "Chainlink CCIP", icon: <SecurityIcon /> },
];

const toolIcons = [
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    alt: "React",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg",
    alt: "Solidity",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "Node.js",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    alt: "PostgreSQL",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    alt: "Docker",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg",
    alt: "Git",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ethereum/ethereum-original.svg",
    alt: "Ethereum",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "MongoDB",
  },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Helmet>
        <title>About Balaji Pachai - Blockchain Developer</title>
        <meta
          name="description"
          content="Learn more about Balaji Pachai, a blockchain developer and smart contract expert with extensive experience in Ethereum, Solidity, and decentralized applications."
        />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={6}>
            {/* Profile Section */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
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
                <Avatar
                  src="/profile-image.jpg"
                  alt="Balaji Pachai"
                  sx={{
                    width: 200,
                    height: 200,
                    mb: 3,
                    border: "4px solid",
                    borderColor: "primary.main",
                  }}
                />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  Balaji Pachai
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  sx={{ mb: 2 }}
                >
                  Blockchain Engineer
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Passionate about building secure and efficient decentralized
                  applications that push the boundaries of blockchain
                  technology. Skilled in Shell scripting and automation.
                  Enthusiastic about development, teaching, and public speaking.
                </Typography>
              </Paper>
            </Grid>

            {/* Bio Section */}
            <Grid item xs={12} md={8}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: "100%",
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
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  About Me
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  I'm a passionate blockchain, backend developer and smart
                  contract expert with a strong focus on building secure and
                  gas-efficient decentralized applications. My journey in
                  blockchain development has led me to work on various projects,
                  from token contracts to complex DeFi protocols.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  With a deep understanding of Ethereum (EVMs), Solidity, and
                  blockchain architecture, I strive to create innovative
                  solutions that push the boundaries of what's possible in the
                  decentralized world. My expertise extends to smart contract
                  development, backend development, code reviews and building
                  user-friendly DApps.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  I'm constantly learning and adapting to new technologies in
                  the technological space, ensuring that I can provide the best
                  solutions for any project I work on.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Skills & Expertise
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    mt: 2,
                  }}
                >
                  {skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      icon={skill.icon}
                      label={skill.name}
                      color="primary"
                      variant="outlined"
                      sx={{
                        borderRadius: 2,
                        "& .MuiChip-icon": {
                          color: "primary.main",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Experience Section */}
            <Grid item xs={12}>
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
                  Professional Experience
                </Typography>

                <Grid container spacing={4}>
                  {/* Shiba Inu Experience */}
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
                          <CodeIcon />
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{ ml: 1, fontWeight: 600 }}
                          >
                            Senior Blockchain Developer
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          Shiba Inu
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Led smart contract and API development for Shifu
                            Airdrop, managing deployment coordination and
                            pre-launch preparations
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Contributed to cross-chain token standard
                            development and ensured seamless integration using
                            Chainlink CCIP
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Built the Central Authentication Service SDK
                            within a week and integrated it into the SHIB
                            umbrella SDK
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Developed smart contracts for On Chain Gaming
                            Registry, including tournaments, sponsors, and
                            rewards system
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Rebranded OpenSea contracts to Shib Marketplace
                            and migrated from The Graph to Subsquid
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Developed cross-chain swap contracts using CCIP
                            and Li.Fi for Crosschain Shibaswap
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* V2Soft Experience */}
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
                          <CodeIcon />
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{ ml: 1, fontWeight: 600 }}
                          >
                            Blockchain Developer
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          V2Soft
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Translated client requirements into Solidity smart
                            contracts and architected comprehensive blockchain
                            solutions
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Developed APIs, deployed contracts, and set up
                            backend servers for various blockchain projects
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Created Proof of Concepts (PoCs) and contributed
                            to Blockchain Innovation Teams
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Conducted training sessions for newcomers and
                            explained blockchain concepts to team members
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Humation Limited Experience */}
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
                          <CodeIcon />
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{ ml: 1, fontWeight: 600 }}
                          >
                            Lead Backend and Blockchain Developer
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          Humation Limited
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Led Smart Contract Development using Solidity
                            across multiple blockchains (Ethereum, TRON, Waves,
                            Stellar)
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Designed and architected feature implementations
                            with focus on blockchain interoperability
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Managed smart contract deployment, API
                            development, and blockchain node setup
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Played a key role in implementing cross-chain
                            interoperability solutions
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Harbinger Systems Experience */}
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
                          <CodeIcon />
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{ ml: 1, fontWeight: 600 }}
                          >
                            Blockchain Developer
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          Harbinger Systems
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Developed smart contracts using Solidity and
                            Truffle Framework
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Created private blockchain networks with various
                            consensus algorithms
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Deployed contracts across multiple networks
                            (Ganache, Private Blockchain, Testnets, Mainnet)
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Developed REST APIs for blockchain system
                            integration
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Implemented Test-Driven Development (TDD)
                            practices and conducted thorough unit testing
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Freelance Experience */}
                  <Grid item xs={12}>
                    <Card
                      sx={{
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
                          <CodeIcon />
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{ ml: 1, fontWeight: 600 }}
                          >
                            Professional Freelancer
                          </Typography>
                        </Box>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Developed smart contracts for various blockchains
                            and architected DApp solutions
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Provided blockchain consulting services for
                            optimal technology integration
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Offered blockchain training and knowledge transfer
                            to clients
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Articles and NFT Section */}
            <Grid item xs={12}>
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
                <Grid container spacing={4}>
                  {/* Read My Articles Section */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                        Read My Articles
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 4 }}
                      >
                        Explore my insights on blockchain development, smart
                        contracts, and the latest in web3 technology.
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        href="https://medium.com/@balajishettypachai"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ borderRadius: 2 }}
                      >
                        Visit My Medium Blog
                      </Button>
                    </Box>
                  </Grid>

                  {/* CompetentBALA NFT Section */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                        CompetentBALA NFT
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 4 }}
                      >
                        Check out my NFT collection on OpenSea and explore the
                        smart contract implementation.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexWrap: "wrap",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          href="https://polygonscan.com/address/0xff48db6307e6590da0add253b3256100ec606618#code"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ borderRadius: 2 }}
                        >
                          View Contract Code
                        </Button>
                        <Button
                          variant="outlined"
                          color="secondary"
                          href="https://opensea.io/collection/competentbala"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ borderRadius: 2 }}
                        >
                          View Collection
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 8,
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                color="warning"
                size="large"
                href="https://www.buymeacoffee.com/balajipachai"
                startIcon={<CoffeeIcon />}
                sx={{
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                }}
              >
                Buy Me a Coffee
              </Button>
            </Box>
          </Grid>
        </MotionBox>
      </Container>
    </>
  );
};

export default About;
