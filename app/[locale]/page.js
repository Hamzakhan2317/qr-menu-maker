"use client";
import AppFeatureSection from "@/components/AppFeatures/AppFeatures.jsx";
import BrandSection from "@/components/BrandSection/BrandSection.jsx";
import FAQSection from "@/components/FAQSection/FAQSection.jsx";
import FeedBackSection from "@/components/FeedbackSection/FeedbackSection.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import ImagesSection from "@/components/ImagesSection/ImagesSection.jsx";
import QrSection from "@/components/QrSection/QrSection.jsx";
import VideoSection from "@/components/VideoSection/VideoSection.jsx";
import { createCustomTheme } from "@/styles/theme.jsx";
import { ThemeProvider } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar.jsx";

const Home = () => {
  const theme = createCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <QrSection />
      <BrandSection />
      {/* <CustomerSection /> */}
      <AppFeatureSection />
      <FeedBackSection />
      <ImagesSection />
      <VideoSection />
      <FAQSection />
      {/* <DiscoverSection /> */}
      {/* <TextSection /> */}
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
