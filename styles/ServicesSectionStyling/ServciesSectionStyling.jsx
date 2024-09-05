import servicesBgImage from "../../public/assets/images/bgImage.webp";
import { createCustomTheme } from "../theme";
const theme = createCustomTheme()
export const servicesBgContainer = {
    borderRadius: "20px",
    minHeight: "140vh",
    [theme.breakpoints.up('xs')]: {
        minHeight: '100vh',
        padding: "0px 10px"
    },
    [theme.breakpoints.up('xs')]: {
        minHeight: '100vh',
        padding: "90px 10px"
    },
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.20), rgba(220, 190, 240, 0.6), rgba(255, 255, 255, 0))",
};
export const servicesBgImageStyle = {
    backgroundImage: `url(${servicesBgImage.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    borderRadius: "15px",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 0px",
    [theme.breakpoints.up('xs')]: {
        width: '100%',
        height: '20vh',
    },
    [theme.breakpoints.up('lg')]: {
        width: '100%',
        height: '100vh',
    },
};
export const cardBoxStyles = {
    display: "flex", justifyContent: "end", alignItems: "center", height: "100%",
};
export const iconStyles = {
    display: "flex", justifyContent: "center", alignItems: "center",
    background: "#8346D8",
    borderRadius: "8px",
    width: "35px",
    height: "35px"
};
// FeedbackIconStyles
export const feedbackIconStyles = {
    display: "flex", justifyContent: "center", alignItems: "center",
    background: "#cb6fe5",
    borderRadius: "8px",
    width: "28px",
    height: "38px",
    minHeight: "43px",
    minWidth: "28px",
    [theme.breakpoints.up('xs')]: {
        width: "35px",
        height: "35px",
        minHeight: "35px",
        minWidth: "35px",
    },
    mb: "10px"
};

export const servicesCardStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // White with 80% opacity
    color: "#000",
    display: "flex", justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    maxWidth: "480px",
    padding: "40px 30px",
    display: {
        sm: "none", lg: "block",
        md: "block",
        xs: "none"
    },


}

// / export const footerTextStyles = {
// //     fontSize: "0.75rem !important",
// //     fontWeight: 'inherit',
// //     [theme.breakpoints.up('xl')]: {
// //         fontSize: "0.875rem !important",
// //     },
// //     [theme.breakpoints.up('lg')]: {
// //         fontSize: "0.875rem !important",
// //     },
// //     [theme.breakpoints.up('sm')]: {
// //         fontSize: "0.75rem !important",
// //     },
// // }