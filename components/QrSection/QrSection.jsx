import {
  ButtonGroupStyles,
  mainSectionParagraphStyle,
  mainSectionTextStyle,
} from "@/styles/MainSectionStyles/MainSectionStyles";
import { QrSectionWrapper } from "@/styles/QrSectionStyles/QrSectionStyles";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ButtonComp from "../../components/ui/button";
import qrImage from "../../public/assets/images/qrimage.webp";
import {toast} from "sonner"


const QrSection = () => {
  const t = useTranslations("Home.Qr");

  

  return (
    <Box sx={QrSectionWrapper}>

      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ height: "100%" }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItemsCenter: "center",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box sx={ButtonGroupStyles}>
                <Box>
                  <ButtonComp text={"New Product"} variant="blue" />
                </Box>
                <Box sx={{ marginLeft: "10px" }}>
                  <ButtonComp variant="light" text={"See Reservations! >"} />
                </Box>
              </Box>
              <Box>
                <Typography sx={mainSectionTextStyle}>{t("Title")}</Typography>
              </Box>
              <Box>
                <Typography sx={mainSectionParagraphStyle}>
                  {t("Subtitle")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: { xs: "100%", lg: "auto", sm: "auto" },
                  }}
                >
                  <ButtonComp
                    sx={{
                      width: {
                        xs: "100%",
                      },
                      height: {
                        xs: "50px",
                      },
                      marginTop: {
                        sm: "0px",
                      },
                    }}
                    text={t("Button")}
                  />

                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                width: {
                  lg: "500px",
                  xl: "500px",
                  sm: "500px",
                },
                height: {
                  lg: "500px",
                  xl: "500px",
                  sm: "500px",
                },
              }}
            >
              <Image
                alt="qrImage"
                src={qrImage}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QrSection;
