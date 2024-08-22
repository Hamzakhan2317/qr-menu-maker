import { createCustomTheme } from "../theme";
const theme = createCustomTheme()
export const videoSectionContainer = {
    background: "radial-gradient(ellipse at top, rgba(98, 42, 177, .8), #000 40%), radial-gradient(ellipse at center, #7dd3fc, #000 90%)",
    padding: "80px 20px",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"

};
export const videoContainer = {
    width: "100%",
    borderRadius: "26px", background: "#000",
    paddingTop: "30px"
};
export const videoTextContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    height: "100%"
};
export const videoTextStyles = {
    color: "#fff",
    fontSize: "1.25rem",
    lineHeight: "1.825rem",
    marginBottom: "20px",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.25rem !important",
        lineHeight: "1.75rem !important",
    },

};
export const videoCaptionStyles = {
    color: "#fff",
    fontSize: "1rem",
    lineHeight: "1.5rem"
};
export const videoSectionHeadingStyles = {
    color: "#F9FAFB",
    fontSize: "2.70rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
    textAlign: "center",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.5rem !important",
        lineHeight: "2rem !important",
        textAlign: "center",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "3rem !important",
        lineHeight: "3.5rem !important",
        fontWeight: "900 !important",
    },
};
export const videoHeadingBoxStyles = {
    maxWidth: "900px",
    [theme.breakpoints.up('lg')]: {
        maxWidth: "800px !important",
    },
    marginBottom: "80px"
};
export const marqueeCards = {
    background: "#111827",
    color: "#fff",
    border: "4px solid #1f2937 ",
    width: "300px",
    minHeight: "180px",
    borderRadius: "16px",
    padding: "20px",
    textWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
}