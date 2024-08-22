import { createCustomTheme } from "../theme";

const theme = createCustomTheme()

export const sliderHeadingStyles = {
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    fontWeight: "600",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        fontWeight: "800",
    },
}
export const sliderTextStyles = {
    fontSize: "1.125rem",
    lineHeight: "1.55rem",
    fontWeight: "500",
    marginTop: "15px",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1rem",
        lineHeight: "1.25rem",
        marginTop: "5px",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        marginTop: "5px",
    },
}

export const CardSliderSectionHeadingStyles = {
    color: "#1f2937",
    fontSize: "2.70rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
    textAlign: "center",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        textAlign: "start",
        padding: "10px",
        textAlign: "center",
        maxWidth: "750px",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
        fontWeight: "900",
        textAlign: "center",
        marginBottom: "20px",
    },
};
export const CardSliderSectionHeadingBoxStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
export const cardSliderConatainerStyle = {
    width: "100%",
    minHeight: {
        xl: "80vh",
        lg: "120vh",
        md: "140vh",
        sm: "150vh",
        xs: "130vh"
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
};