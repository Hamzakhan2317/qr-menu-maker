import ButtonComp from "@/components/ui/button";
import {
  displaySectionTextHeadingStyles,
  displaySectionTextStyles,
  displaySectionWrapper,
  tabSectionImageStyles,
} from "@/styles/TabSectionStyles/TabSectionStyles";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import orderImage from "../../../public/assets/images/orderImage.webp";

const OrderScreen = () => {
  return (
    <Box sx={displaySectionWrapper}>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            lg: "row",
          },
        }}>
        <Grid item lg={6} sm={12} xs={12}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}>
            <Box sx={{ width: "100%", mb: "20px" }}>
              <Typography sx={displaySectionTextHeadingStyles}>
                Seamless Ordering, Table Management, and Payments{" "}
              </Typography>
              <Typography sx={displaySectionTextStyles}>
                Simplify every aspect of your restaurant&apos;s workflow with a complete set of
                order and payment solutions designed to assist you in delivering a seamless and
                productive dining experience from the kitchen to the table.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                my: "20px",
              }}>
              <Box
                sx={{
                  marginRight: "10px",
                  marginBottom: {
                    xs: "10px",
                    lg: "10px",
                    md: "0px",
                    sx: "0px",
                  },
                }}>
                <ButtonComp marginTop={"0px"} variant="light" text={"Order & Pay →"} />
              </Box>
              <Box
                sx={{
                  marginRight: "10px",
                  marginBottom: {
                    xs: "10px",
                    lg: "0",
                    md: "0px",
                    sx: "0px",
                  },
                }}>
                <ButtonComp marginTop={"0px"} variant="light" text={"Fast Checkout →"} />
              </Box>
              <Box
                sx={{
                  marginRight: "10px",
                  marginBottom: {
                    xs: "10px",
                    lg: "0",
                    md: "0px",
                    sx: "0px",
                  },
                }}>
                {" "}
                <ButtonComp marginTop={"0px"} variant="light" text={"POS Lite →"} />
              </Box>
              <Box
                sx={{
                  marginRight: "10px",
                  marginBottom: {
                    xs: "10px",
                    lg: "0",
                    md: "0px",
                    sx: "0px",
                  },
                }}>
                <ButtonComp marginTop={"0px"} variant="light" text={"Delievery & Pickup Menu  →"} />
              </Box>
              <Box>
                <ButtonComp marginTop={"0px"} variant="light" text={"Dine-in Table Menu  →"} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} xs={12} sx={{ height: "100%" }}>
          <Box sx={tabSectionImageStyles}>
            <Image src={orderImage} alt="Display Image" style={{ width: "100%", height: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderScreen;
