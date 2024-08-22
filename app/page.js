"use client";
import BlogSection from "@/components/BlogSection/BlogSection.jsx";
import BrandSection from "@/components/BrandSection/BrandSection.jsx";
import CardSliderSection from "@/components/CardSliderSection/CardSliderSection.jsx";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection.jsx";
import FeatureSection from "@/components/FeatureSection/FeatureSection.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ServciesSection from "@/components/ServciesSection/ServciesSection.jsx";
import TabSection from "@/components/TabsSection/TabsSection.jsx";
import TextSection from "@/components/TextSection/TextSection.jsx";
import VideoSection from "@/components/VideoSection/VideoSection.jsx";
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
      <BrandSection />
      <TabSection />
      <FeatureSection />
      <ServciesSection />
      <VideoSection />
      <CardSliderSection />
      <BlogSection />
      <DiscoverSection />
      <TextSection />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
