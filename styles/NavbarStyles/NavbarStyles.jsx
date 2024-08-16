import { createCustomTheme } from "../theme";

const theme = createCustomTheme()
export const NavbarStyles = {
    width: '200px',
    height: '60',
    background: "red"
}
export const footerTextStyles = {
    fontSize: "0.75rem !important",
    fontWeight: 'inherit',
    [theme.breakpoints.up('xl')]: {
        fontSize: "0.875rem !important",
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "0.875rem !important",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: "0.75rem !important",
    },
}



