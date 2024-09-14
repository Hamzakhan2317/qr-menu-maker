"use client";

import { useRouter } from "@/navigation";
import { signOut, useSession } from "next-auth/react";
import QRCode from "react-qr-code";
import { Box, Grid } from "@mui/material";
import { qrcodeBox, qrcodeWrapper } from "@/styles/DashboarStyling";
import { formatDateTime } from "@/utils/formatDateTime";

const Dashboard = () => {
  // const { data: session } = useSession();
  // const router = useRouter();
  // const logout = async () => {
  //   await signOut({ redirect: false });
  //   router.push("/login");
  // };
  const currentDateTime = formatDateTime();

  return (
    <Box>
      <p>{currentDateTime}</p>
      <h3>Food , Welcome!</h3>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={12} md={4} sx={qrcodeWrapper}>
          <Box sx={qrcodeBox}>
            <QRCode
              size={150}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={"https://www.google.com/"}
              viewBox={`0 0 256 256`}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
