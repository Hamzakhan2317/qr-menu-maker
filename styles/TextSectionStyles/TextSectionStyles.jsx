import { createCustomTheme } from "../theme";

const theme = createCustomTheme()
export const textSectionHeadingStyles = {
    color: "#bd81f7 ",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1.875rem",
        lineHeight: "2.25rem"
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        fontWeight: "800"
    }
}