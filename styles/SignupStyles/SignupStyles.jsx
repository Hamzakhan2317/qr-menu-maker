import { createCustomTheme } from "../theme";
const theme = createCustomTheme();
export const containerFlexStyle = {
  display: "flex",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    padding: "0 6rem",
    flexDirection: "column-reverse",
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "start",
    padding: "0",
  },
};
export const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "8px",
  boxShadow:
    "0 9px 28px 8px rgba(0, 0, 0, 0.05), 0 6px 16px rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12)",
};
export const imageTextStyle = {
  display: "flex",
  alignItems: "start",
  textAlign: "start",
  justifyContent: "start",
  marginBottom: "3.5rem",
  zIndex: 1,
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
    marginTop: "2rem",
    gap: 2,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    textAlign: "start",
    justifyContent: "start",
  },
};
export const termsOfServiceBoxStyle = {
  paddingRight: "2rem",
  maxWidth: "19rem",
  [theme.breakpoints.up("xs")]: {
    paddingRight: "0",
    padding: "0 10%",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
};
export const termsOfServiceTextStyle = {
  fontSize: "10px",
  fontFamily: "Nunito Sans",
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    fontSize: "10px",
  },
};
export const imagesGridStyle = {
  marginBottom: "3rem",
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "100%",
  },
};

