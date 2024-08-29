import { getFeedbackCardDetails } from "@/public/assets/static";
import { feedbackIconStyles } from "@/styles/ServicesSectionStyling/ServciesSectionStyling";
import {
  FeedbackSectionHeadingStyle,
  videoHeadingBoxStyles,
  videoSectionContainer,
} from "@/styles/VidepSectionStyling/VidepSectionStyling";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Container, Grid, Typography } from "@mui/material";
import feedbackImage from "../../public/assets/images/feedbackImage.webp";

import { useTranslations } from "next-intl";
import Image from "next/image";
const FeedBackSection = () => {
  const t = useTranslations("Home.Feedback");
  const feedbackCardDetails = getFeedbackCardDetails(t);
  return (
    <Box sx={videoSectionContainer}>
      <Box sx={videoHeadingBoxStyles}>
        <Typography sx={FeedbackSectionHeadingStyle}>{t("Title")}</Typography>
      </Box>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              lg: "row",
              md: "row",
            },
          }}
        >
          <Grid item lg={6} md={6} sm={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <Box>
                {feedbackCardDetails?.map(({ heading, text }, ind) => (
                  <Box
                    key={ind}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      mt: "30px",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                        xxl: "row",
                      },
                    }}
                  >
                    <Box sx={feedbackIconStyles}>
                      <CheckIcon
                        sx={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: {
                            xs: "20px",
                            lg: "15px",
                          },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "0px",
                          sm: "0px",
                          md: "15px",
                          lg: "15px",
                          xl: "15px",
                          xxl: "15px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "1.15rem",
                          lineHeight: "1.75rem",
                          fontWeight: "600",
                        }}
                      >
                        {heading}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "1rem",
                          lineHeight: "1.725rem",
                          fontWeight: "400",
                          mt: "10px",
                        }}
                      >
                        {text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: {
                    xs: "100%",
                    lg: "100%",
                    sm: "100%",
                    md: "500px",
                  },
                  height: {
                    xs: "100%",
                    lg: "100%",
                    sm: "450px",
                    md: "100%",
                  },
                }}
              >
                <Image
                  src={feedbackImage}
                  alt="feedbackImage"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeedBackSection;
