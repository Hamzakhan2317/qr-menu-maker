import { createCustomTheme } from "../theme";

const theme = createCustomTheme()
export const discoverContainerStyles = {
    background: "#fff",
    [theme.breakpoints.up('xs')]: {
        padding: "20px 20px 120px 20px",
    },
    [theme.breakpoints.up('xs')]: {
        padding: "0px 20px 90px 20px",
    },
    [theme.breakpoints.up('sm')]: {
        padding: "40px 0px",
    },
    [theme.breakpoints.up('lg')]: {
        padding: "0px 0px 80px 20px",
    },
    [theme.breakpoints.up('md')]: {
        padding: "0px 0px 120px 20px",
    },
    [theme.breakpoints.up('xl')]: {
        padding: "0px 0px 60px 20px",
    },
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
export const discoverImageStyles = {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up('xs')]: {
        height: "100%",
        width: "100%",
        marginTop: "100px"
    },
    [theme.breakpoints.up('sm')]: {
        height: "100%",
        width: "550px",
        marginTop: "100px"
    },
    [theme.breakpoints.up('xl')]: {
        height: "100%",
        width: "95%",
        marginTop: "100px"
    },
    [theme.breakpoints.up('lg')]: {
        height: "100%",
        width: "100%",
        marginTop: "100px"
    },

};
export const DiscoverBtnStyles = {
    mt: "30px",
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "20px"
    },
    [theme.breakpoints.up('lg')]: {
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        width: "100%",
        marginTop: "20px"
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        width: "100%",
        marginTop: "20px"
    },

};
export const discoverTextStyles = {
    color: "#111827",
    fontWeight: "900",
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    [theme.breakpoints.up('xs')]: {
        fontSize: "2.1rem",
        lineHeight: "2.75rem",
        textAlign: "center",
    },
    [theme.breakpoints.up('lg')]: {
        textAlign: "start",
        fontWeight: "900",
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
    },
    [theme.breakpoints.up('md')]: {
        textAlign: "start",
        fontWeight: "900",
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
    },
    [theme.breakpoints.up('sm')]: {
        textAlign: "center",
        fontWeight: "900",
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
    },
};
export const discoverTextWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    height: "100%",
    padding: "0px 20px 0px 0px",
    [theme.breakpoints.up('xs')]: {
        padding: "0px ",
    },
    [theme.breakpoints.up('lg')]: {
        padding: "0px 20px 0px 0px !important",
    },
};