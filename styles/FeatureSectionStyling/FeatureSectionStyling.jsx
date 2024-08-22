import { createCustomTheme } from "../theme";

const theme = createCustomTheme()
export const featureClassBg = {
    minHeight: '100vh',
    [theme.breakpoints.up('xs')]: {
        minHeight: '100vh',
        padding: '100px 0px',

    },
    [theme.breakpoints.up('xs')]: {
        padding: '140px 0px',
    },
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "column",
    alignItems: 'center',
    background: ' radial-gradient(ellipse at center, #ffffff -10%, rgba(35, 71, 106, 0.8) 0%, #182A41 120%)',
    backdropFilter: "blur(5px)",
    padding: '50px 0px',
};
export const headingStyles = {
    color: "#fff",
    fontSize: "2.70rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
    textAlign: "center",
    [theme.breakpoints.up('xs')]: {
        fontSize: "2.20rem",
        lineHeight: "2.75rem",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "3rem",
        lineHeight: "2.75rem",
        fontWeight: "900",
    },
};

export const featureSectionHeadingStyles = {
    color: "#fff",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "600",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.6rem",
        lineHeight: "2rem",
    },
};
export const blogSubHeadingStyles = {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: "600",
    textAlign: "center",
    [theme.breakpoints.up('xs')]: {
        fontWeight: "500",
        textAlign: "center",
        fontSize: "1.125rem",
        lineHeight: "1.75rem",

    },

};

export const featureSectionTextStyles = {
    color: "#fff",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        marginTop: "5px"
    },
};
export const featureCardImageStyles = {
    height: "250px",
    width: "100%",
    [theme.breakpoints.up('xs')]: {
        height: "250px",
        width: "100%"
    },
};


export const textWrapperStyles = {
    [theme.breakpoints.up('xs')]: {
        maxWidth: "100% !important"
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: "350px !important"
    },
};
export const headingWrapper = {
    marginBottom: "80px",
    maxWidth: "850px"
};
export const blogContainerStyles = {
    background: "#f9fafb",
    [theme.breakpoints.up('xs')]: {
        padding: "20px !important"
    },
    [theme.breakpoints.up('lg')]: {
        padding: "80px 20px !important",
    },
};

export const FeatureCard = {
    background: "#111827",
    color: "#fff",
    border: "4px solid #1f2937 ",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    minHeight: "450px",
    borderRadius: "16px",
    padding: "20px",
    position: "relative",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)"
    }
};
//Blogs Styling 
export const blogHeadingStyles = {
    color: "#1f2937",
    fontSize: "2.70rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
    textAlign: "center",
    mb: "20px",
    [theme.breakpoints.up('xs')]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
        fontWeight: "900",
    },
};
export const blogCardStyles = {
    height: "100%",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: "18px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
        transform: "scale(1.05)"
    },
};
export const cardTextStyling = {
    color: "#111827",
    fontSize: "1.6rem",
    lineHeight: "2rem",
    fontWeight: "600",
    mt: "5px",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
    },
};
export const cardContentStyles = {


};