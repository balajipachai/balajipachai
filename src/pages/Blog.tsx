import React, { useEffect, useState } from "react";
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
  CircularProgress,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import ArticleIcon from "@mui/icons-material/Article";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: "medium" | "linkedin";
}

const MEDIUM_RSS =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@balajishettypachai";
const LINKEDIN_ARTICLES = [
  {
    title: "How to estimate gas for a blockchain transaction?",
    link: "https://www.linkedin.com/pulse/how-estimate-gas-blockchain-transaction-balaji-shetty-pachai-lki0f",
    pubDate: "2024-06-24",
    description:
      "Ever wondered how does Metamask estimates gas for a transaction? Ever tried to estimate gas for a transaction, before sending it to the blockchain? If you send less gas no miner would pick up...",
    source: "linkedin",
  },
  {
    title: "I asked ChatGPT...",
    link: "https://www.linkedin.com/pulse/i-asked-chatgpt-balaji-shetty-pachai",
    pubDate: "2023-06-17",
    description:
      "Prompt: Geth repo has each and every functionality under different folder names, identify an issue and go the directory and that's how you contribute to open source, improve this statement.",
    source: "linkedin",
  },
  {
    title: "How OpensSea works with any ERC721 contract?",
    link: "https://www.linkedin.com/pulse/how-openssea-works-any-erc721-contract-balaji-shetty-pachai",
    pubDate: "2023-06-15",
    description:
      "Ever wondered how opensea works with any ERC721 contract that you mint?. It is one of the largest NFT marketplace in the world. As soon as you mint an NFT, head over to Opensea, and there you witness the magic of it, it displays right from the token id, to who owns it, to the metadata details to displaying the image etc. of each and every minted NFT from your contract, however, haven't you been intrigued as in how does this works?",
    source: "linkedin",
  },
  {
    title: "Get All ERC721 Tokens Owned By An Account",
    link: "https://www.linkedin.com/pulse/get-all-erc721-tokens-owned-account-balaji-shetty-pachai",
    pubDate: "2023-06-13",
    description:
      "I came across this issue on Openzeppelin-contracts which was to obtain a list of ERC721 tokenIds owned by an account.",
    source: "linkedin",
  },
  {
    title: "Scaffold-ETH: Debug Contracts Tab",
    link: "https://www.linkedin.com/pulse/scaffold-eth-debug-contracts-tab-balaji-shetty-pachai",
    pubDate: "2023-05-11",
    description:
      "How do you add an external contract to scaffold-eth's Debug Contract tab, provided, you haven't deployed the contract using scaffold-eth?",
    source: "linkedin",
  },
  {
    title: "Is a transaction mined? Ether.js",
    link: "https://www.linkedin.com/pulse/transaction-mined-etherjs-balaji-shetty-pachai",
    pubDate: "2023-05-05",
    description:
      "A simple script that checks whether a transaction is mined successfully and has indeed received the required number of confirmations for it to be considered valid.",
    source: "linkedin",
  },
];

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Fetch Medium articles
    fetch(MEDIUM_RSS)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          const mediumArticles = data.items.slice(0, 6).map((item: any) => ({
            ...item,
            source: "medium" as const,
          }));
          setArticles([...mediumArticles, ...LINKEDIN_ARTICLES]);
        } else {
          setError("Failed to fetch Medium articles.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch Medium articles.");
        setLoading(false);
      });
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const filteredArticles = articles.filter((article) =>
    activeTab === 0
      ? article.source === "medium"
      : article.source === "linkedin"
  );

  const renderArticles = () => (
    <Grid container spacing={4}>
      {filteredArticles.map((article) => (
        <Grid item xs={12} md={6} key={article.link}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 3,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {new Date(article.pubDate).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {article.description.replace(/<[^>]+>/g, "").slice(0, 180)}
                ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                endIcon={<LaunchIcon />}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      <Helmet>
        <title>Blog & Articles - Balaji Pachai</title>
        <meta
          name="description"
          content="Read the latest articles and blog posts by Balaji Pachai on blockchain development, smart contracts, and more."
        />
      </Helmet>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Blog & Articles
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Insights, tutorials, and thoughts on blockchain, smart contracts,
            and continuous learning.
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered
            sx={{
              "& .MuiTab-root": {
                fontSize: "1.1rem",
                fontWeight: 500,
              },
            }}
          >
            <Tab
              icon={<ArticleIcon />}
              label="Medium Articles"
              iconPosition="start"
            />
            <Tab
              icon={<ArticleIcon />}
              label="LinkedIn Articles"
              iconPosition="start"
            />
          </Tabs>
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center">
            {error}
          </Typography>
        ) : (
          renderArticles()
        )}

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={
              activeTab === 0
                ? "https://medium.com/@balajishettypachai"
                : "https://www.linkedin.com/in/balaji-shetty-pachai/"
            }
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderRadius: 2 }}
          >
            Visit My {activeTab === 0 ? "Medium" : "LinkedIn"} Profile
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Blog;
