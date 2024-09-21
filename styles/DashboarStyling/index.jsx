export const qrcodeWrapper = {
  width: "100%",
  backgroundColor: "#ffffff !important",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
  padding: "15px",
  paddingRight: {
    sm: "20px",
  },
  borderRadius: "8px",
  minHeight: "350px",
};
export const qrcodeBoxWrapper = {
  backgroundColor: "#FAFAFA",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #f0f0f0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
};
export const qrColorPicker = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: "40px",
  borderBottom: "1px solid #0000000f",
  paddingBottom: "40px",
};
export const bgqrColorPicker = {
  marginLeft: "15px",
  [`@media (min-width: 280px) and (max-width:517px)`]: {
    marginLeft: "0px",
    marginTop: "10px",
  },
};
export const qrCodeHeader = {
  backgroundColor: "#ffffff",
  padding: "10px 24px",
  display: "flex",
  alignItems: "center",
};
export const qrcodeBox = {
  width: "120px",
  height: "120px",
  marginTop: "10px",
};
export const qrnote = {
  backgroundColor: "#FFFBE6",
  padding: "10px",
  textAlign: "center",
  marginTop: "8px",
  borderRadius: "8px",
  border: "1px solid #ffe58f",
};
export const qrcopyLink = {
  width: "100%",
  display: "flex",
  justifyContent: {
    xl: "space-between",
    lg: "space-between",
    md: "space-between",
    sm: "center",
    xs: "center",
  },
  alignItems: "center",
  flexWrap: "wrap",
  marginTop: "10px",
};

// qr.garsonline menu

export const leftMobileViewGarsonline = {
  width: "100%",
  maxWidth: "480px",
  borderRight: "1px solid #ccc",
  boxSizing: "border-box",
};
export const leftViewHeader = {
  backgroundColor: "#A874F2",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "50px",
  color: "#ffffff",
};

export const leftViewGettingReady = {
  backgroundColor: "#111827",
  display: "flex",
  alignItems: "center",
  height: "55px",
  color: "#ffffff",
};
export const menuWrapper = {
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
export const leftViewHeaderMenu = {
  backgroundColor: "#A874F2",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "45px",
  color: "#ffffff",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};
export const copyOfSampleMenu = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
export const menuSearch = {
  marginTop: "20px",
};
export const menuFoodTypes = {
  overflow: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  paddingBottom: "10px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "& img": {
    borderRadius: "8px",
    marginLeft: "10px",
    marginRight: "10px",
  },
};
export const menuCardsWrapper = {
  padding: "10px",
  backgroundColor: "#F7F7F7",
};
export const menuFoodWrapper = {
  "& .mainImage": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "8px",
    marginBottom: "10px",
    marginTop: "20px",
  },
};
export const foodMenuCard = {
  padding: "10px 10px 10px 20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  display: "flex",
  marginTop: "15px",
  boxShadow:
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
  "&:last-child": {
    marginBottom: "15px",
  },
  "& .card-img": {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
    objectFit: "cover!important",
  },
};
export const cardLeftside = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flexGrow: 1,
  flexDirection: "column",
  paddingTop: "10px",
};

// Dropzone styling
export const doprzoneStyle = {
  width: "200px",
  minHeight: "155px",
  border: "1px dashed rgb(217, 217, 217)",
  background: "rgb(250, 250, 250)",
  borderRadius: "8px",
  padding: "10px 0px",
  textAlign: "center",
  cursor: "pointer",
  transition: "border-color 0.3s",
};
export const dropzoneText = {
  display: "block",
  color: "#8989AE !important",
  fontWeight: 300,
  marginTop: "5px",
};
