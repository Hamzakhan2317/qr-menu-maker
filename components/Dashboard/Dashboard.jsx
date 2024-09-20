"use client";

import { useRouter } from "@/navigation";
import { signOut, useSession } from "next-auth/react";
import QRCode from "react-qr-code";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import {
  qrcodeBox,
  qrcodeBoxWrapper,
  qrcodeWrapper,
  qrcopyLink,
  qrnote,
} from "@/styles/DashboarStyling";
import { formatDateTime } from "@/utils/formatDateTime";
import ButtonComp from "../ui/button";
import DownloadSvg from "@/public/assets/svg/DownloadSvg";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState();
  const qrCodeLink = "http://localhost:4000/en/garsonline-menu";
  const logout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };
  useEffect(() => {
    const now = formatDateTime();
    setCurrentDateTime(now);
  }, []);
  const handleCopy = () => {
    navigator.clipboard.writeText(qrCodeLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <Box sx={{ paddingLeft: "24px", marginTop: "20px", minHeight: "90vh" }}>
      <p>{currentDateTime}</p>
      <h3 color="#000000d9">Food , Welcome!</h3>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={12} md={4} sx={qrcodeWrapper}>
          <Box>
            <Typography fontSize="16px" fontWeight={600} color="#000000d9">
              QR Code for Menu Display
            </Typography>
            <Box sx={qrcodeBoxWrapper}>
              <Box sx={qrcodeBox}>
                <QRCode
                  size={150}
                  fgColor="#A874F2"
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  value={qrCodeLink}
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

export default Dashboard;
