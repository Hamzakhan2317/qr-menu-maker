"use client";
import { useRouter } from "@/navigation";
import { useSession } from "next-auth/react";
import QRCode from "react-qr-code";
import { Box, Grid, Typography } from "@mui/material";
import {
  qrcodeBox,
  qrcodeBoxWrapper,
  qrcodeWrapper,
  qrcopyLink,
  qrnote,
} from "@/styles/DashboarStyling";
import { formatDateTime } from "@/utils/formatDateTime";
import ButtonComp from "../ui/button";
import { useEffect, useState } from "react";
import { useGetAllRestaurentsQuery } from "@/redux/services/api/restaurentApis";
import { usePathname } from "next/navigation";
import { BallTriangle } from "react-loader-spinner";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState();
  const qrCodeLink = "https://qr-menu-maker.vercel.app/en/garsonline-menu";
  const pathname = usePathname();

  // Use a regex to extract the ID from the pathname
  const match = pathname.match(/\/venues\/([^\/]+)/);
  const restaurantId = match ? match[1] : null; // Get the ID or null if not found

  const { data, isLoading } = useGetAllRestaurentsQuery(session?.user?._id, {
    skip: !session?.user?._id, // Skip the query until user data is available
  });

  const currentRestaurant = data?.data?.filter(
    (item) => item._id === restaurantId
  );

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

  if (isLoading) {
    return (
      <Box
        height={"100vh"}
        width={"80vw"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
      >
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{
            height: "100vh",
          }}
          wrapperClass=""
          visible={true}
        />
      </Box>
    );
  }
  return (
    <Box sx={{ padding: "40px", height: "100vh" }}>
      <p>{currentDateTime}</p>
      <Typography color="#000000d9" mt={1} fontSize={18}>
        <b>{currentRestaurant?.[0]?.name}, Welcome</b>
      </Typography>
      <Grid container mt={2}>
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
                  text={"Preview Menu"}
                  variant="purple"
                  padding="4px 15px"
                  onClick={() =>
                    router.push(
                      "https://qr-menu-maker.vercel.app/en/garsonline-menu"
                    )
                  }
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
