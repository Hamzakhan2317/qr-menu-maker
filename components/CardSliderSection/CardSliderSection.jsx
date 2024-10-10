import { sliderCardDetails } from "@/public/assets/static";
import {
  cardSliderConatainerStyle,
  CardSliderSectionHeadingBoxStyles,
  CardSliderSectionHeadingStyles,
  sliderHeadingStyles,
  sliderTextStyles,
} from "@/styles/CardSliderStyles/CardSliderStyles";
import { Box, Card, Container, Typography } from "@mui/material";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CardSliderSection = () => {
  return (
    <Container maxWidth="xxxl" sx={cardSliderConatainerStyle}>
      <Box sx={CardSliderSectionHeadingBoxStyles}>
        <Typography
          sx={{
            textAlign: {
              xs: "center",
            },
            ...CardSliderSectionHeadingStyles,
          }}>
          Designed for Every Type of Business
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}>
          {sliderCardDetails.slice(0, 5).map(({ cardImage, cardData, cardText, href }, ind) => (
            <SwiperSlide
              key={ind}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Link href={href} style={{ width: "100%", textDecoration: "none" }}>
                <Card
                  sx={{
                    backgroundImage: `url(${cardImage.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "#fff",
                    borderRadius: "16px",
                    minHeight: "380px",
                    mb: "50px",
                    width: "85%",
                    border: "4px solid #fff",
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "column",
                    textAlign: "start",
                    padding: "20px",
                    "&:hover .overlay": {
                      opacity: 1,
                    },
                    position: "relative",
                  }}>
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background: "rgba(90, 34, 139, 0.25)",
                      top: "0",
                      left: "0",
                      opacity: 0,
                    }}></Box>
                  <Typography sx={sliderHeadingStyles}>{cardData}</Typography>
                  <Typography sx={sliderTextStyles}>{cardText}</Typography>
                </Card>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default CardSliderSection;
