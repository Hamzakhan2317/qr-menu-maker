import { createCustomTheme } from "../theme";

const theme = createCustomTheme();

export const customerSectionWrapper = {
    height: "auto",
    [theme.breakpoints.up('xs')]: {
        height: "auto",
        padding: "50px 20px"
    },
    [theme.breakpoints.up('lg')]: {
        height: "auto",
        padding: "0px 20px"
    },
    [theme.breakpoints.up('xl')]: {
        height: "auto",
        padding: "50px 20px !important"
    },
    [theme.breakpoints.up('xxl')]: {
        height: "auto",
        padding: "70px 20px !important"
    },
    [theme.breakpoints.up('md')]: {

        padding: "90px 0px"
    },
    [theme.breakpoints.up('sm')]: {
        padding: "30px 0px 50px 0px"
    },

    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(200, 170, 230, 0.5), rgba(220, 190, 240, 0.9), rgba(255, 255, 255, 0))",
};
export const customerHeadingStyles = {
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    fontWeight: "900",
    color: "#111827",
    mb: "10px",
    [theme.breakpoints.up('xl')]: {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
    },
};
export const customerTextStyles = {
    fontSize: "1rem",
    lineHeight: "1.5rem",
};
export const customerImageStyles = {
    width: "100%",
    height: "100%"
};
