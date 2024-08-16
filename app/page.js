"use client";
import { createCustomTheme } from "@/styles/theme.jsx";
import { ThemeProvider } from "@mui/material";
import MainSection from "../components/MainSection/page.jsx";
import Navbar from "../components/Navbar/page.jsx";

const Home = () => {
  const theme = createCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <MainSection />
    </ThemeProvider>
  );
};

export default Home;
