"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import {
  bgqrColorPicker,
  qrcodeBox,
  qrcodeBoxWrapper,
  qrCodeHeader,
  qrcodeWrapper,
  qrColorPicker,
  qrcopyLink,
  qrnote,
} from "@/styles/DashboarStyling";
import ButtonComp from "../ui/button";
import DownloadSvg from "@/public/assets/svg/DownloadSvg";
import ColorPicker from "../ui/ColorPicker/ColorPicker";

const QrCode = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [qrColor, setQrColor] = useState("#A874F2");
  const [bgQrColor, setBgQrColor] = useState("#FFFFFF");
  const qrCodeLink = "http://localhost:4000/en/garsonline-menu";
  const handleCopy = () => {
    navigator.clipboard.writeText(qrCodeLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };
  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Box sx={qrCodeHeader}>
        <Typography
          sx={{ fontSize: "20px", lineHeight: "32px", fontWeight: "600" }}
        >
          Qr Code
        </Typography>
      </Box>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={10} md={6} sx={qrcodeWrapper}>
          <Box sx={qrColorPicker}>
            <Box>
              <Typography
                fontSize={"14px"}
                color={"#000000d9"}
                marginBottom={"10px"}
              >
                QR Color
              </Typography>
              <ColorPicker selectedColor={qrColor} onColorChange={setQrColor} />
            </Box>
            <Box sx={bgqrColorPicker}>
              <Typography
                fontSize={"14px"}
                color={"#000000d9"}
                marginBottom={"10px"}
              >
                Background Color
              </Typography>
              <ColorPicker
                selectedColor={bgQrColor}
                onColorChange={setBgQrColor}
              />
            </Box>
          </Box>
          <Box>
            <Typography fontSize="16px" fontWeight={600} color="#000000d9">
              QR Code for Menu Display
            </Typography>
            <Box sx={qrcodeBoxWrapper}>
              <Box sx={qrcodeBox}>
                <QRCode
                  size={150}
                  bgColor={bgQrColor}
                  fgColor={qrColor}
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  value={"http://localhost:4000/en/garsonline-menu"}
                  viewBox={`0 0 256 256`}
                />
              </Box>
              <Box sx={qrnote}>
                <Typography fontSize="14px" color="#000000d9">
                  QR Code is very hard to read. Please increase the contrast by
                  changing the colors.
                </Typography>
              </Box>

              <Typography fontSize="14px" color="#000000d9" marginTop={"20px"}>
                You can use this QR Code to display your Dine-in View Only Menu.
              </Typography>
              <Box sx={qrcopyLink}>
                <ButtonComp
                  text={"Download"}
                  variant="purple"
                  padding="4px 15px"
                  startIcon={<DownloadSvg />}
                />
                <ButtonComp
                  variant="transparent"
                  onClick={handleCopy}
                  text={"Copy QR Link"}
                  marginLeft="10px"
                  fontSize="14px"
                  padding="4px 15px"
                  sx={{ textTransform: "none" }}
                >
                  Copy QR Link
                </ButtonComp>
                {isCopied && (
                  <Typography fontSize="12px" color="green" marginLeft="10px">
                    Copied!
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QrCode;
