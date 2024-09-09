import { createCustomTheme } from "../theme";
const theme = createCustomTheme()
export const AppFeatureSectionContainer = {
    [theme.breakpoints.up('xs')]: {
        // minHeight: "120vh",
        height: "auto",
        padding: "110px 20px"
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "#fff"

};
export const appFeatureIconStyles = {
    display: "flex", justifyContent: "center", alignItems: "center",
    background: "#cb6fe5",
    borderRadius: "8px",
    width: "38px",
    height: "38px",
    minHeight: "38px",
    minWidth: "38px",
    mb: "15px"
};
export const aboutIconStyles = {
    display: "flex", justifyContent: "center", alignItems: "center",
    background: "#cb6fe5",
    borderRadius: "8px",
    width: "30px",
    height: "30px",
    minHeight: "30px",
    minWidth: "30px",
    mb: "15px"
};
export const bottomParagrphStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "650px",
    margin: "0 auto",
    padding:"0 10px 50px 10px"
};
export const bottomParagrphButtonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    paddingBottom:"50px"
};



export const appFeatureHeadingStyles = {
    color: "#111827",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "700",
    [theme.breakpoints.up('sm')]: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: "700",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
        fontWeight: "700",
    },
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: "700",
    },
}
export const appFeaturesTextStyles = {
    color: "#1f2937",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: "400",
    mt: "10px",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1rem",
        lineHeight: "1.45rem",
        opacity: 0.9,
        paddingRight: "20px"
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: "1rem",
        lineHeight: "1.75rem",
        opacity: 0.9,
        paddingRight: "20px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: "400",
    },
}
// export const videoContainer = {
//     width: "100%",
//     borderRadius: "26px", background: "#000",
//     paddingTop: "30px"
// };
// export const videoTextContainer = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "start",
//     flexDirection: "column",
//     height: "100%"
// };
// export const videoTextStyles = {
//     color: "#fff",
//     fontSize: "1.25rem",
//     lineHeight: "1.825rem",
//     marginBottom: "20px",
//     [theme.breakpoints.up('xs')]: {
//         fontSize: "1.25rem !important",
//         lineHeight: "1.75rem !important",
//     },

// };
// export const videoCaptionStyles = {
//     color: "#fff",
//     fontSize: "1rem",
//     lineHeight: "1.5rem"
// };
// export const videoSectionHeadingStyles = {
//     color: "#F9FAFB",
//     fontSize: "2.70rem",
//     lineHeight: "2.75rem",
//     fontWeight: "900",
//     textAlign: "center",
//     [theme.breakpoints.up('xs')]: {
//         fontSize: "1.5rem !important",
//         lineHeight: "2rem !important",
//         textAlign: "center",
//     },
//     [theme.breakpoints.up('lg')]: {
//         fontSize: "3rem !important",
//         lineHeight: "3.5rem !important",
//         fontWeight: "900 !important",
//     },
// };
// export const videoHeadingBoxStyles = {
//     maxWidth: "900px",
//     [theme.breakpoints.up('lg')]: {
//         maxWidth: "800px !important",
//     },
//     marginBottom: "80px"
// };
// export const marqueeCards = {
//     background: "#111827",
//     color: "#fff",
//     border: "4px solid #1f2937 ",
//     width: "300px",
//     minHeight: "180px",
//     borderRadius: "16px",
//     padding: "20px",
//     textWrap: "wrap",
//     display: "flex",
//     justifyContent: "space-between",
//     flexDirection: "column"
// }