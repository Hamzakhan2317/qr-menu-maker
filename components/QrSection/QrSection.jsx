import {
  ButtonGroupStyles,
  mainSectionParagraphStyle,
  mainSectionTextStyle,
} from "@/styles/MainSectionStyles/MainSectionStyles";
import { QrSectionWrapper } from "@/styles/QrSectionStyles/QrSectionStyles";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ButtonComp from "../../components/ui/button";
import qrImage from "../../public/assets/images/qrimage.webp";
import { useRegisterRestaurentMutation } from "@/redux/services/api/restaurentApis";
import {toast} from "sonner"
import { useRegisterMenuMutation } from "@/redux/services/api/menuApis";
import { useRegisterItemMutation } from "@/redux/services/api/itemApis";
import { useRegisterSectionMutation } from "@/redux/services/api/sectionApis";

const QrSection = () => {
  const t = useTranslations("Home.Qr");

  const [ registerRestaurent ] = useRegisterRestaurentMutation();
  const [ registerMenu ] = useRegisterMenuMutation();
  const [ registerSection ] = useRegisterSectionMutation();
  const [ registerItem ] = useRegisterItemMutation();

  const handelregisterRestaurent = async (values) => {
    try {
      const resp = await registerRestaurent({
        userId:"66e99b463d977aa5b4bb3ef3",
        restaurantName:"new resturant"
      }).unwrap();

      console.log("resp>>>>>", resp)
      if (resp) {
        toast.success(resp?.message || "User register successfully");
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };

  const handelregisterMenu = async (values) => {
    try {
      const resp = await registerMenu({
        restaurantId:"66e96b49e1c80f4e6f4c1459",
        name:"new menu"
      }).unwrap();

      console.log("resp>>>>>", resp)
      if (resp) {
        toast.success(resp?.message || "Menu register successfully");
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };

  const handelregisterItem = async (values) => {
    try {
      const resp = await registerItem({
        menuId:"66e96fe9e1c80f4e6f4c1472",
        name:"new item",
        description:" new description",
        price:20
      }).unwrap();

      if (resp) {
        toast.success(resp?.message || "Menu register successfully");
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };

  const handelregisterSection = async (values) => {
    try {
      const resp = await registerSection({
        menuId:"66e96fe9e1c80f4e6f4c1472",
        name:"new Section",
      }).unwrap();

      if (resp) {
        toast.success(resp?.message || "Section register successfully");
      }
    } catch (error) {
      console.log("error>>>>>", error);
    }
  };


  

  return (
    <Box sx={QrSectionWrapper}>

      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ height: "100%" }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItemsCenter: "center",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box sx={ButtonGroupStyles}>
                <Box>
                  <ButtonComp text={"New Product"} variant="blue" />
                </Box>
                <Box sx={{ marginLeft: "10px" }}>
                  <ButtonComp variant="light" text={"See Reservations! >"} />
                </Box>
              </Box>
              <Box>
                <Typography sx={mainSectionTextStyle}>{t("Title")}</Typography>
              </Box>
              <Box>
                <Typography sx={mainSectionParagraphStyle}>
                  {t("Subtitle")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: { xs: "100%", lg: "auto", sm: "auto" },
                  }}
                >
                  <ButtonComp
                    sx={{
                      width: {
                        xs: "100%",
                      },
                      height: {
                        xs: "50px",
                      },
                      marginTop: {
                        sm: "0px",
                      },
                    }}
                    text={t("Button")}
                  />
                                          <ButtonComp text={"add resturent"} variant="blue" onClick={()=>handelregisterRestaurent()} />
                                          <ButtonComp text={"add Menu"} variant="blue" onClick={()=>handelregisterMenu()} />
                                          <ButtonComp text={"add section"} variant="blue" onClick={()=>handelregisterSection()} />
                                          <ButtonComp text={"add Item"} variant="blue" onClick={()=>handelregisterItem()} />
                                          

                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              sx={{
                width: {
                  lg: "500px",
                  xl: "500px",
                  sm: "500px",
                },
                height: {
                  lg: "500px",
                  xl: "500px",
                  sm: "500px",
                },
              }}
            >
              <Image
                alt="qrImage"
                src={qrImage}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default QrSection;
