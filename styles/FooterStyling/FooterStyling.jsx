"use client";
import { createCustomTheme } from "../theme";

const theme = createCustomTheme()
export const footerContainer = {
    background: "#111827",
    padding: "30px 20px",
    height: "auto"
}
export const listStyles = {
    color: "#d1d5db",
    fontFamily: "Nunito Sans",
    paddingLeft: "0px",
    textDecoration: "none",
    fontSize: "0.9rem",
    lineHeight: "1.5rem",
}
export const footerSocialIconsStyles = {
    color: "#d1d5db",
    borderTop: "1px solid #d1d5db",
    borderBottom: "1px solid #d1d5db",
    borderWidth: "thin",
    padding: "20px 0px"

}
export const socialIconListStyles = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        my: "20px"
    },
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        my: "20px"
    },
    [theme.breakpoints.up('lg')]: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        my: "20px"
    },
    [theme.breakpoints.up('xl')]: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        my: "20px"
    },
    [theme.breakpoints.up('xxl')]: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        my: "20px"
    }
}
export const socailIconsLinkStyles = {
    color: "#9ca3af",
    marginRight: "10px"
}
export const copyRightTextStyle = {
    color: "#9ca3af",
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Nunito Sans"

}
export const privaryPolicyBoxStyle = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    paddingTop: "10px",
    [theme.breakpoints.up('sm')]: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    },
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    },
    [theme.breakpoints.up('lg')]: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
    },
    [theme.breakpoints.up('xl')]: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
    },
    [theme.breakpoints.up('xxl')]: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
    }

}
export const privaryPolicyLinkStyle = {
    color: "#9ca3af",
    fontSize: "0.88rem",
    fontWeight: "400",
    textDecoration: "none",
    [theme.breakpoints.up('sm')]: {
        fontWeight: "800",

    }
}