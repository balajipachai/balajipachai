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
  Button,
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
  { name: "ERC-20/721/1155", icon: <CodeIcon /> },
  { name: "TypeScript", icon: <CodeIcon /> },
  { name: "Node.js", icon: <CodeIcon /> },
  { name: "Express.js", icon: <CodeIcon /> },
  { name: "GraphQL", icon: <CodeIcon /> },
  { name: "Go", icon: <CodeIcon /> },
  { name: "React.js", icon: <CodeIcon /> },
  { name: "Hardhat", icon: <CodeIcon /> },
  { name: "Foundry", icon: <CodeIcon /> },
  { name: "Truffle", icon: <CodeIcon /> },
  { name: "Web3.js", icon: <CodeIcon /> },
  { name: "Ethers.js", icon: <CodeIcon /> },
  { name: "Subsquid", icon: <StorageIcon /> },
  { name: "The Graph", icon: <StorageIcon /> },
  { name: "PostgreSQL", icon: <StorageIcon /> },
  { name: "MongoDB", icon: <StorageIcon /> },
  { name: "MySQL", icon: <StorageIcon /> },
  { name: "Docker", icon: <StorageIcon /> },
  { name: "AWS", icon: <StorageIcon /> },
  { name: "IPFS", icon: <StorageIcon /> },
  { name: "Git", icon: <StorageIcon /> },
  { name: "Shell Scripting", icon: <StorageIcon /> },
  { name: "EVM Chains", icon: <SecurityIcon /> },
  { name: "OpenZeppelin", icon: <SecurityIcon /> },
  { name: "Chainlink CCIP", icon: <SecurityIcon /> },
  { name: "Infura", icon: <SecurityIcon /> },
  { name: "Alchemy", icon: <SecurityIcon /> },
  { name: "Solana", icon: <SecurityIcon /> },
  { name: "Hedera", icon: <SecurityIcon /> },
  { name: "AI-assisted dev (Claude, GPT)", icon: <CodeIcon /> },
];

const About = () => {

  return (
    <>
      <Helmet>
        <title>About Balaji Pachai - Senior Blockchain / Solidity Engineer</title>
        <meta
          name="description"
          content="Senior Blockchain Engineer with 10+ years in software and 7+ years specialising in EVM and multi-chain systems. Smart contracts, indexing, and backend APIs."
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
                  Senior Blockchain / Solidity Engineer
                </Typography>
                <Typography color="text.secondary" paragraph>
                  10+ years in software, 7+ years specialising in EVM and
                  multi-chain systems. I own the full Web3 lifecycle — smart
                  contracts, deterministic indexing, and high-performance backend
                  APIs. Visiting faculty for blockchain, smart contract
                  security, and Introduction to Solana, and founder of
                  thebasicsdotacademy.
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
                  I'm a Senior Blockchain Engineer with a strong focus on
                  building secure and gas-efficient decentralized applications.
                  My journey in blockchain development has led me to work on 10+
                  projects spanning DeFi, NFTs, DeSci, and enterprise domains —
                  from token contracts to complex L2 infrastructure.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  With a deep understanding of EVM chains, Solidity, and
                  blockchain architecture, I own the full Web3 lifecycle — smart
                  contracts, deterministic indexing (Subsquid/The Graph), and
                  high-performance backend APIs. Most recently built
                  production-grade L2 infrastructure at Shiba Inu (Shibarium),
                  Apr 2024 – Jun 2026.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  I also teach blockchain, smart contract security, and
                  Introduction to Solana at DES
                  Pune University and ACTS, C-DAC Patna, and use AI tools
                  like Claude and GPT to ship faster — with every change
                  human-reviewed and tested before it lands.
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
                  {/* Teaching & Education */}
                  <Grid item xs={12}>
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
                            Mentor, Project Guide & Visiting Faculty
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          Blockchain, Smart Contract Security &amp; Auditing, Introduction to Solana
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • DES Pune University — B.Sc. (Blockchain Technology): Smart Contract Security: Fundamentals &amp; Auditing, and Introduction to Solana
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • ACTS, C-DAC Patna — Instructor, PGCP-FBD (FinTech &amp; Blockchain Development): curriculum, lab exams, capstones, mock interviews
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Savitribai Phule Pune University (Dept. of Scientific Computing, Modelling &amp; Simulation) and Nowrosjee Wadia College (Dept. of Computer Science)
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Founder of thebasicsdotacademy — YouTube channel teaching Solidity, Solana, smart contract security, and LeetCode 75
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

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
                            Senior Smart Contract, Web3 Backend & Indexing Engineer
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          Shiba Inu | Apr 2024 – Jun 2026
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Own end-to-end data pipelines: smart contracts →
                            Subsquid indexers → Node.js/GraphQL APIs powering
                            Shibarium ecosystem tools
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Built Subsquid/PostgreSQL indexing services
                            syncing 100K+ L2 blocks with deterministic event
                            modelling
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Architected the SHIFU token distribution —
                            20,000+ claims for 10,000+ wallets across two rounds
                            via a merkle-proof service
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Built Central Authentication Service SDK and On
                            Chain Gaming Registry smart contracts
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Cross-chain swap &amp; bridging on Chainlink CCIP —
                            production between Ethereum and Shibarium
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Developed, implemented & deployed Shib Newsletter
                            Cover V2 NFT contracts
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
                            Senior Software Engineer (Blockchain)
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          V2Soft | May 2021 – Feb 2024
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Translated client requirements into production
                            Solidity smart contracts; architected comprehensive
                            blockchain solutions
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Designed, developed, and deployed the V2Soft 25th
                            Anniversary NFT system end-to-end — Solidity
                            contracts, Node.js APIs, MySQL, AWS
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Built the Vehicle NFT platform storing vehicle
                            lifecycle data on-chain via ERC-721 with IPFS
                            metadata
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Delivered the EarnTV Reward Engine and
                            OpenTherapeutics (DeSci) smart contracts
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Developed PoCs and actively contributed to the
                            Blockchain Innovation Team; trained newcomers on
                            Solidity and blockchain
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
                            Senior Blockchain & Backend Engineer
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          Self Employed / Freelance | Dec 2019 – Apr 2021
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Designed & deployed production smart contracts for
                            staking, rewards, vesting, ERC20/721, and full token
                            ecosystems
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Led backend & blockchain development at Humation
                            Limited — cross-chain interoperability across
                            Ethereum, TRON, Waves, and Stellar
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
                            Senior Software Engineer
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          Harbinger Systems | Jan 2017 – Dec 2019
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Specialised in Solidity and Truffle Framework;
                            created private blockchain networks with diverse
                            consensus algorithms
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Developed Certificate of Authenticity — ERC-721
                            NFT platform for artwork provenance with IPFS and
                            React.js
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Forked ARK blockchain to create Blockpool —
                            analysed architecture, proposed changes, and
                            implemented the fork
                          </Typography>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Created Loan Lending App and Land Records DApps;
                            achieved 100% smart contract test coverage via TDD
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Deployed contracts across Ganache, private
                            networks, testnets, and mainnet; established
                            blockchain nodes on AWS
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* AtoS Experience */}
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
                            Associate Software Engineer
                          </Typography>
                        </Box>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ mb: 2, fontWeight: 500 }}
                        >
                          AtoS India Pvt. Ltd | May 2014 – Jul 2015
                        </Typography>
                        <Box sx={{ pl: 2 }}>
                          <Typography
                            variant="body1"
                            paragraph
                            sx={{ lineHeight: 1.8 }}
                          >
                            • Monitored production servers, scheduled batch
                            jobs, tested endpoints, and conducted root-cause
                            analysis of incidents
                          </Typography>
                          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                            • Facilitated daily stand-ups and generated
                            comprehensive reports for tracking and data analysis
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

            {/* Certifications & Education */}
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
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                      Certifications
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        • Consensys Blockchain Developer Bootcamp — Scholar Recipient
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        • IAAA Certified Ethereum Blockchain Developer
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        • Arc Certified Remote Developer — Arc
                      </Typography>
                      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        • Intensive Certificate in German Language — Savitribai Phule Pune University
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                      Education
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        • M.Sc. in Scientific Computing — Savitribai Phule Pune University (CGPA: 8.6/10, Grade A+) | Jul 2015 – Apr 2017
                      </Typography>
                      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        • B.Sc. in Computer Science — Nowrosjee Wadia College (CGPA: 6.8/10, Grade A) | Jul 2011 – May 2014
                      </Typography>
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
