import { createCustomTheme } from "../theme";

const theme = createCustomTheme()

export const displaySectionStyles = {
    minHeight: "100vh",
    [theme.breakpoints.up('xs')]: {
        minHeight: "60vh",
        padding: "80px 0px"
    },
    width: "100%    ",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
    padding: "80px 0px"
};

export const displaySectionWrapper = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px"
};
export const displaySectionTextHeadingStyles = {
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    [theme.breakpoints.up('lg')]: {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        fontWeight: "900"
    },
    color: "#111827",
    fontWeight: "800", mb: "15px"
};
export const displaySectionTextStyles = {
    fontSize: "1.1rem",
    lineHeight: "1.825rem",
    color: "#111827",
    fontWeight: "400",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1rem",
        lineHeight: "1.625rem",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
    },
};
export const tabSectionImageStyles =
{

    width: "550px",
    height: "550px",
    [theme.breakpoints.up('xs')]: {
        width: "100%",
        height: "100%",
    },
    // [theme.breakpoints.up('sm')]: {
    //     width: "550px",
    //     height: "550px",
    // },
    // [theme.breakpoints.up('lg')]: {
    //     width: "550px",
    //     height: "550px",
    // },

}


export const TabSectionHeadingStyles = {
    color: "#1f2937",
    fontSize: "2.70rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
    textAlign: "center",
    maxWidth: "800px",
    marginBottom: "50px",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        textAlign: "start",
        padding: "10px",
        textAlign: "start",

    },
};