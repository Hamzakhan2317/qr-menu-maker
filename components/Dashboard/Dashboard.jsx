"use client";
import { useRouter } from "@/navigation";
import { useGetAllRestaurentsQuery } from "@/redux/services/api/restaurentApis";
import {
  qrcodeBox,
  qrcodeBoxWrapper,
  qrcodeWrapper,
  qrcopyLink,
  qrnote,
} from "@/styles/DashboarStyling";
import { formatDateTime } from "@/utils/formatDateTime";
import { Box, Grid, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import ButtonComp from "../ui/button";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState();
  const [path, setPath] = useState("");
  const [currentRestaurant, setCurrentRestaurant] = useState({});
  const pathname = usePathname();

  // Use a regex to extract the ID from the pathname
  const match = pathname.match(/\/venues\/([^\/]+)/);
  const restaurantId = match ? match[1] : null; // Get the ID or null if not found

  const { data, isLoading } = useGetAllRestaurentsQuery(session?.user?._id, {
    skip: !session?.user?._id, // Skip the query until user data is available
  });

  useEffect(() => {
    const now = formatDateTime();
    setCurrentDateTime(now);
    currentRestaurant &&
      setPath(
        window.location.origin + `/garsonline-menu/${currentRestaurant?._id}`
      );
  }, [currentRestaurant]);

  useEffect(() => {
    if (!isLoading && data) {
      const currentRestaurant = data?.data?.filter(
        (item) => item._id === restaurantId
      );
      setCurrentRestaurant(currentRestaurant[0]);
    }
  }, [data, isLoading, restaurantId]);

  const handleCopy = () => {
    navigator.clipboard.writeText(path).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <Box sx={{ padding: "40px", height: "100vh" }}>
      <p>{currentDateTime}</p>
      <Typography color="#000000d9" mt={1} fontSize={18}>
        <b>{currentRestaurant?.name}, Welcome</b>
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
                  fgColor="#000"
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                  value={path}
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
                  onClick={() => router.push(path)}
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
