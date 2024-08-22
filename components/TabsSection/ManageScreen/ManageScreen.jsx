import ButtonComp from "@/components/ui/button";
import {
  displaySectionTextHeadingStyles,
  displaySectionTextStyles,
  displaySectionWrapper,
  tabSectionImageStyles,
} from "@/styles/TabSectionStyles/TabSectionStyles";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import manageImage from "../../../public/assets/images/manageImage.webp";

const ManageScreen = () => {
  return (
    <Box sx={displaySectionWrapper}>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item lg={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: "100%", mb: "20px" }}>
              <Typography sx={displaySectionTextHeadingStyles}>
                Introducing the FineDine Power Management Suite: Take Control of
                Your Restaurant's Success
              </Typography>
              <Typography sx={displaySectionTextStyles}>
                Give your restaurant a boost with an advanced suite of tools to
                manage all operations easily. Leverage online reservation
                management to assign tables and collect reservations, reports,
                and analytics to provide insights and drive data-backed
                decision-making, easy-to-use role management to streamline your
                team’s workflow, and feedback collection to improve customer
                satisfaction.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                my: "20px",
                paddingRight: "80px",
              }}
            >
              <Box
                sx={{
                  marginRight: "10px",
                  marginBottom: {
                    xs: "10px",
                    lg: "0",
                    md: "0px",
                    sx: "0px",
                  },
                }}
              >
                {" "}
                <ButtonComp
                  marginTop={"0px"}
                  borderRadius={"8px"}
                  border={"1px solid #e6034b"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  text={"Report & Analytics →"}
                  boxShadow={"none"}
                  color="#e6034b"
                  backgroundColor={"#fff"}
                  padding="25px 19px"
                />
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
                }}
              >
                {" "}
                <ButtonComp
                  marginTop={"0px"}
                  borderRadius={"8px"}
                  border={"1px solid #e6034b"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  text={"Feedback Collection →"}
                  boxShadow={"none"}
                  color="#e6034b"
                  backgroundColor={"#fff"}
                  padding="25px 19px"
                />
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
                }}
              >
                {" "}
                <ButtonComp
                  marginTop={"0px"}
                  borderRadius={"8px"}
                  border={"1px solid #e6034b"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                  text={"Reservation →"}
                  boxShadow={"none"}
                  color="#e6034b"
                  backgroundColor={"#fff"}
                  padding="25px 19px"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} sx={{ height: "100%" }}>
          <Box sx={tabSectionImageStyles}>
            <Image
              src={manageImage}
              alt="Display Image"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManageScreen;
