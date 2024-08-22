import { createCustomTheme } from "../theme";

const theme = createCustomTheme()
export const discoverContainerStyles = {
    background: "#fff",
    padding: "80px 20px",
    minHeight: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
export const discoverImageStyles = {
    height: "430px",
    width: "100%",
    objectFit: "cover"

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