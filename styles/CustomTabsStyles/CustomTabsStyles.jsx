import { createCustomTheme } from "../theme";

const theme = createCustomTheme()
export const tabStyles = {
    textTransform: 'capitalize',
    color: '#000',
    fontSize: "1.2rem",
    [theme.breakpoints.up('xs')]: {
        fontSize: "1rem",
        width: "100%",

    },
    [theme.breakpoints.up('lg')]: {
        fontSize: "1.125rem",
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: "1rem",
        width: "auto",
    },
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: '0.2px',
    background: "none",
    padding: "10px 50px",
    '&:hover': {
        color: '#2D3748',
    },
};

export const tabIndicatorStyles = {
    height: '3px',
    background: "none",
};

export const selectedTabStyles = {
    color: '#fff',
    background: "#E6034B",
    borderRadius: '100px',
    textAlign: "center",
    [theme.breakpoints.up('lg')]: {
        padding: "14px 50px",

    },
};