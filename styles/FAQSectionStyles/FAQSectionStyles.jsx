{ }
import { createCustomTheme } from "../theme";
const theme = createCustomTheme()
export const faqWrapper = {
    display: "flex",
    [theme.breakpoints.up('xs')]: {
        padding: "110px 0px",
    },
    [theme.breakpoints.up('sm')]: {
        padding: "100px 0px",
    },
    [theme.breakpoints.up('lg')]: {
        padding: "140px 0px",
    },
    [theme.breakpoints.up('xlg')]: {
        padding: "110px 0px",
    },
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
};
export const faqHeadingStyle = {
    lineHeight: "2.75rem",
    fontSize: "2.25rem",
    fontWeight: "900",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.5rem",
        lineHeight: "2.5rem",
        mb: "20px"
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
        fontWeight: "900",
        mb: "60px"
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
        fontWeight: "900",
        mb: "60px"
    },
    [theme.breakpoints.up('sm')]: {
        mb: "50px"
    },
    [theme.breakpoints.up('md')]: {
        mb: "50px",
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
    },
};