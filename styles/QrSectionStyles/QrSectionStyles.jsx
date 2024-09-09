import { keyframes } from "@mui/system";
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
  width: "18rem",
  height: "auto",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "start", // Fixed typo from 'justofyContent' to 'justifyContent'
  alignItems: "center",
  border: "1px solid #ccc",
  background: "#fff",
  padding: "1.7px 2px 3px 4px",
  marginBottom: "25px",
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
};

export const QrSectionWrapper = {
  [theme.breakpoints.up("xs")]: {
    height: "auto",
    padding: "40px 20px",
  },
  [theme.breakpoints.up("lg")]: {
    minHeight: "auto",
    padding: "120px 0px",
  },
  [theme.breakpoints.up("md")]: {
    height: "auto",
    padding: "150px 0px",
  },
  [theme.breakpoints.up("sm")]: {
    minHeight: "80vh",
    padding: "50px 0px 240px 0px",
  },
  [theme.breakpoints.up("xl")]: {
    minHeight: "80vh",
    padding: "75px 0px",
  },
  [theme.breakpoints.up("xxl")]: {
    minHeight: "40vh",
    padding: "75px 0px",
  },
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgb(198,111,220)",
  background:
    "linear-gradient(281deg, rgba(198,111,220,0.37298669467787116) 0%, rgba(255,255,255,0) 100%)",
  // backgroundImage: "linear-gradient(to top, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
};

export const mainSectionTextStyle = {
  fontSize: "3.2rem",
  lineHeight: "3.875rem",
  fontWeight: "900",
  backgroundImage: "linear-gradient(90deg, #E35387, #9841A5, #DA508B, #7C8FDC)",
  backgroundSize: "400%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: `${animateGradient} 12s ease-in-out infinite`,
  [theme.breakpoints.up("xs")]: {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
    lineHeight: "3.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.5rem",
    lineHeight: "3.875rem",
  },
};

export const mainSectionParagraphStyle = {
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  opacity: 0.8,
  marginY: "20px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.225rem",
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
