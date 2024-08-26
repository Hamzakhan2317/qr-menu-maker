import { keyframes } from '@mui/system';
import { createCustomTheme } from "../theme";

// Define keyframes for gradient animation
const animateGradient = keyframes`
  0% { background-position: 0%; }
  50% { background-position: 100%; }
  100% { background-position: 0%; }
`;

// Create the theme
const theme = createCustomTheme();

export const ButtonGroupStyles = {
    width: '18rem',
    height: "auto",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "start", // Fixed typo from 'justofyContent' to 'justifyContent'
    alignItems: "center",
    border: "1px solid #ccc",
    background: "#fff",
    padding: "1.7px 2px 3px 4px",
    marginBottom: "25px",
    [theme.breakpoints.up('xs')]: {
        display: "none"
    },
};

export const ImagesSectionWrapper = {
    [theme.breakpoints.up('xs')]: {
        height: "auto",
        padding: "120px 20px"
    },
    [theme.breakpoints.up('lg')]: {
        height: "auto",
        padding: "90px 0px"
    },
    [theme.breakpoints.up('sm')]: {
        minHeight: "80vh",
        padding: "50px 0px"
    },
    [theme.breakpoints.up('xl')]: {
        padding: "80px 0px",
        minHeight: "auto",
    },
    [theme.breakpoints.up('xxl')]: {
        padding: "100px 0px",
        minHeight: "auto",
    },
    [theme.breakpoints.up('md')]: {
        minHeight: "auto",
        padding: "120px 0px"
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
};
export const imageTextStyles = {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
    color: "#111827",
    mb: "40px",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        mt: "40px"
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
        fontWeight: "900",
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
        fontWeight: "900",
    },
    [theme.breakpoints.up('xxl')]: {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
        fontWeight: "900",
    },
};
export const numberTextStyles = {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
    color: "#7632d4",
};
export const imageSectionImageStyling = {
    width: "100%", height: "100%",
    [theme.breakpoints.up('sm')]: {
        width: "500px", height: "500px",
    },
};
export const imagesHeadingTextStyles = {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: "#1f2937",
    mt: "5px",
    [theme.breakpoints.up('xs')]: {
        padding: "0px 0px",
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
    },
    [theme.breakpoints.up('lg')]: {
        padding: "0px 0px",
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
    },
    [theme.breakpoints.up('xl')]: {
        padding: "0px 0px",
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
    },
    [theme.breakpoints.up('xxl')]: {
        padding: "0px 0px",
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
    },
};

// Uncommented and updated footerTextStyles if needed
// export const footerTextStyles = {
//     fontSize: "0.75rem !important",
//     fontWeight: 'inherit',
//     [theme.breakpoints.up('xl')]: {
//         fontSize: "0.875rem !important",
//     },
//     [theme.breakpoints.up('lg')]: {
//         fontSize: "0.875rem !important",
//     },
//     [theme.breakpoints.up('sm')]: {
//         fontSize: "0.75rem !important",
//     },
// };