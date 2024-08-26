import { createCustomTheme } from "../theme";

const theme = createCustomTheme()
export const brandSectionContainer = {
    minHeight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    padding: "18px"
}
export const marqueeTextClass = {
    minHeight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#bd81f7 ",
    background: "#622ab1 ",
    padding: "10px",
    [theme.breakpoints.up('xs')]: {
        padding: "5px",

    },

}
export const branSectionImageStyle = {
    width: "130px",
    height: "70px",
    objectFit: "contain",
}
export const branSectionImageBoxStyle = {
    marginRight: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    [theme.breakpoints.up('xs')]: {
        width: "100%",
        height: "100%",
    },
    [theme.breakpoints.up('lg')]: {
        width: "130px",
        height: "70px",
    },
}