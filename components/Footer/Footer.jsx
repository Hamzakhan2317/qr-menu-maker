"use client";
import { getFooterDetails } from "@/public/assets/static";
import FBSvg from "@/public/assets/svg/FacebookSvg";
import InstagramSvg from "@/public/assets/svg/InstagramSvg";
import LinkedInSvg from "@/public/assets/svg/LinkedInSvg";
import TwitterSvg from "@/public/assets/svg/TwitterSvg";
import YoutubeSvg from "@/public/assets/svg/YoutubeSvg";
import { copyRightTextStyle, footerContainer, footerSocialIconsStyles, listStyles, privaryPolicyBoxStyle, privaryPolicyLinkStyle, privaryPolicyStyle, socailIconsLinkStyles, socialIconListStyles } from "@/styles/FooterStyling/FooterStyling";
import { Box, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
    const t = useTranslations('Footer');
    const footerDetails = getFooterDetails(t);
    return (
        <Box sx={footerContainer}>
            <Grid container spacing={5}>
                {footerDetails?.map(({ title, listData }, ind) => (
                    <Grid item lg={2.4} md={3} sm={6} xs={12} key={ind} >
                        <Typography sx={{ color: "#9ca3af", fontWeight: "600", fontSize: "0.9rem", marginBottom: "8px" }}>
                            {title}
                        </Typography>
                        {listData?.map(({ name }, subInd) => (
                            <Box sx={{ mb: "16px" }} key={subInd}>
                                <Link href={""} style={listStyles}>
                                    <Box sx={{
                                        '&:hover': {
                                            color: '#fff',
                                        },
                                    }}>
                                        {name}
                                    </Box>
                                </Link>
                            </Box>
                        ))}
                    </Grid>
                ))}
            </Grid>
            <Box sx={footerSocialIconsStyles}>
                <Grid container sx={{
                    height: "100%", flexDirection: {
                        sm: "column-reverse",
                        lg: "row"
                    },
                }}>
                    <Grid item lg={6} xs={12} md={6} sm={6}>
                        <Box sx={copyRightTextStyle}>
                            {t("CopyRightText")}
                        </Box>
                    </Grid>
                    <Grid item lg={6} xs={12} md={6} sm={6}>
                        <Box sx={socialIconListStyles}>
                            <Link style={socailIconsLinkStyles} href="">
                                <Box sx={{
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                }}>
                                    <FBSvg />
                                </Box>
                            </Link>
                            <Link style={socailIconsLinkStyles} href="">
                                <Box sx={{
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                }}>
                                    <InstagramSvg />
                                </Box>
                            </Link>
                            <Link style={socailIconsLinkStyles} href="">
                                <Box sx={{
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                }}>
                                    <TwitterSvg />
                                </Box>
                            </Link>
                            <Link style={socailIconsLinkStyles} href="">
                                <Box sx={{
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                }}>
                                    <LinkedInSvg />
                                </Box>
                            </Link>
                            <Link style={socailIconsLinkStyles} href="">
                                <Box sx={{
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                }}>
                                    <YoutubeSvg />
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
            <Box sx={privaryPolicyBoxStyle}>
                <Link style={privaryPolicyLinkStyle} href="">
                    <Box sx={{
                        '&:hover': {
                            color: '#fff',
                        },
                    }}>
                        <Typography sx={privaryPolicyStyle}>
                            {t("PrivacyPolicyText")}
                        </Typography>
                    </Box>
                </Link>
            </Box>
        </Box >
    );
}

export default Footer;