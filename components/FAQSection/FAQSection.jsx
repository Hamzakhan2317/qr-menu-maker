import {
  faqHeadingStyle,
  faqWrapper,
} from "@/styles/FAQSectionStyles/FAQSectionStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Faq from "react-faq-component";

const FeatureSection = () => {
  const t = useTranslations("Home.FAQSection");

  const data = {
    rows: [
      { title: t("Heading1.title"), content: t("Heading1.content") },
      { title: t("Heading2.title"), content: t("Heading2.content") },
      { title: t("Heading3.title"), content: t("Heading3.content") },
      { title: t("Heading4.title"), content: t("Heading4.content") },
      { title: t("Heading5.title"), content: t("Heading5.content") },
      { title: t("Heading6.title"), content: t("Heading6.content") },
      { title: t("Heading7.title"), content: t("Heading7.content") },
      { title: t("Heading8.title"), content: t("Heading8.content") },
      { title: t("Heading9.title"), content: t("Heading9.content") },
      { title: t("Heading10.title"), content: t("Heading10.content") },
    ],
  };

  const styles = {
    bgColor: "white",
    titleTextColor: "#111827",
    rowTitleColor: "#111827",
    rowContentColor: "#111827",
    arrowColor: "#111827",
  };

  const config = {
    animate: false,
    arrowIcon: <KeyboardArrowDownIcon />,
    tabFocus: true,
  };
  return (
    <Container maxWdth={"xl"}>
      <Box sx={faqWrapper}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Grid item lg={12} xs={12} md={12} sm={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={faqHeadingStyle}>{t("MainHeading")}</Typography>
            </Box>
          </Grid>
          <Grid item lg={10} xs={12} md={11} sm={12}>
            <Box>
              <Faq data={data} styles={styles} config={config} />
            </Box>
          </Grid>
        </Grid>

        {/* Inline styles for overriding FAQ styles */}
        <style jsx global>{`
             /* Icon wrapper styles */
                .icon-wrapper {
                    top:20px !important
                }
                .faq-row-wrapper .faq-body .faq-row {
                    border-bottom: none !important; /* Correct syntax to remove border */
                    border-top: 1px solid #ccc; /* Optional: Add top border */
                    font-family: "Nunito Sans"
                }
                
                .faq-row-wrapper .faq-body .faq-row .row-title {
                    font-size: 1.5rem; /* Default row title font size */
                    line-height: 2rem;
                    cursor: pointer;
                    color: #111827; /* Customize row title color */
                    padding: 15px 0px;
                    font-family: "Nunito Sans"
                }

                .faq-row-wrapper .faq-body .faq-row .row-content .row-content-text {
                    font-size: 1rem; /* Default content font size */
                    line-height: 1.75rem;
                    color: #4b5563; 
                    padding-bottom: 5px;
                                        font-family: "Nunito Sans"

                }

                /* Media queries */
                @media (min-width: 320px) and (max-width: 767px) {
                    .faq-row-wrapper .faq-body .faq-row .row-title {
                        font-size: 1.25rem !important;
                        line-height: 1.75rem !important;
                        font-weight:500 !important;
                        }
                    .faq-row-wrapper .faq-body .faq-row .row-content .row-content-text {
                        font-size: 1rem; /* Medium screen size content font size */
                    }
                        .icon-wrapper {
                    top:25px !important
                }
                }

                 @media (min-width: 768px) and (max-width: 991px) {
                    .faq-row-wrapper .faq-body .faq-row .row-title {
                        font-size: 1.25rem; /* Larger screen size row title font size */
                        line-height: 1.75rem !important;
                                                font-weight:500 !important;

                        }
                    .faq-row-wrapper .faq-body .faq-row .row-content .row-content-text {
                        font-size: 1rem; /* Larger screen size content font size */
                    }
                }
                }
                 @media (min-width: 992px) and (max-width: 1139px) {
                    .faq-row-wrapper .faq-body .faq-row .row-title {
                        font-size: 1.5rem; /* Larger screen size row title font size */
                        line-height: 2rem !important;
                        font-weight:500 !important;
                        }
                    .faq-row-wrapper .faq-body .faq-row .row-content .row-content-text {
                        font-size: 1rem; /* Larger screen size content font size */
                    }
                }
                }
            `}</style>
      </Box>
    </Container>
  );
};

export default FeatureSection;
