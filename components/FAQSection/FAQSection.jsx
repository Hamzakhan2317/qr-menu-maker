import { faqHeadingStyle, faqWrapper } from '@/styles/FAQSectionStyles/FAQSectionStyles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Faq from "react-faq-component";



const FeatureSection = () => {
    const t = useTranslations('Home.VideoSectionCardDetails');

    const data = {
        rows: [
            { title: "What is a QR code menu for restaurants?", content: `A QR code menu for restaurants is a digital menu accessible via a quick response (QR) code that patrons can scan with their smartphones to view the menu items.` },
            { title: "How do QR code menus work in restaurants?", content: `QR code menus work by allowing customers to scan a code with their smartphones, instantly accessing the restaurant's digital menu on their screens.` },
            { title: "Are QR code menus safe and secure?", content: `Yes, QR code menus are generally safe and secure as they provide contactless access to menus, reducing physical contact with printed materials.` },
            { title: "How can I create a QR code menu for my restaurant?", content: `You can create a QR code menu for your restaurant by using FineDine's All-in-one restaurant management platform.` },
            { title: "What are the benefits of using QR code menus in restaurants?", content: `The benefits of using QR code menus include contactless ordering, easy menu updates, and enhanced customer engagement through interactive features.` },
            { title: "Can I integrate a QR code menu with my existing POS system?", content: `Yes, FineDine offers integrations with existing POS systems, streamlining order processing.` },
            { title: "Do customers need special apps to access QR code menus?", content: `No, customers can access QR code menus using their smartphone cameras without the need for special apps, as most devices come equipped with built-in QR code scanning capabilities.` },
            { title: "Are QR code menus cost-effective for restaurants?", content: `Yes, QR code menus are cost-effective for restaurants as they eliminate printing costs, reduce paper waste, and provide an efficient digital alternative.` },
            { title: "What information should be included in a QR code menu?", content: `A QR code menu should include a comprehensive list of dishes, prices, dietary information, and any promotions, ensuring customers have all the necessary details for informed choices.` },
            { title: "How do QR code menus enhance the dining experience?", content: `QR code menus enhance the dining experience by offering a seamless, contactless way for customers to explore the menu, place orders, and access additional information, promoting a modern and efficient dining experience.` },
        ],
    };

    const styles = {
        bgColor: 'white',
        titleTextColor: "#111827",
        rowTitleColor: "#111827",
        rowContentColor: '#111827',
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
                <Grid container sx={{
                    display: "flex", justifyContent: "center", alignItems: "center", width: "100%",

                }}>
                    <Grid item lg={12} xs={12} md={12} sm={12}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography sx={faqHeadingStyle}>
                                Frequently Asked Questions (FAQ)
                            </Typography>
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
            </Box >
        </Container>
    );
}

export default FeatureSection;
