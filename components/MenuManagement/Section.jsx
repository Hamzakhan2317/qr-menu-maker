"use client";
import { useState } from "react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RightDrawerContent from "./RightDrawerContent";
import MenuEditor from "./Menueditor";
import SectionList from "./SectionList";
import { useParams } from "next/navigation";
import { useGetAllSectionQuery } from "@/redux/services/api/sectionApis";
import { MenuManagementHeader } from "@/styles/MenuManagementStyling";
import ButtonComp from "../ui/button";
import { useRouter } from "@/navigation";

const Section = () => {
  const params = useParams();
  const router = useRouter();

  const { venueId, menuId } = params;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { data: sections, isLoading } = useGetAllSectionQuery(menuId);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <Box sx={{ ...MenuManagementHeader, padding: "10px 20px" }}>
        <Typography sx={{ fontSize: "20px", lineHeight: "32px", fontWeight: "600" }}>
          Menu
        </Typography>
        <ButtonComp
          text={"Preview Menu"}
          variant="purple"
          padding="4px 15px"
          onClick={() => router.push(`/garsonline-menu/${venueId}`)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          padding: "20px 40px 20px 0px",
        }}>
        <Box flex={1}>
          <SectionList onAddClick={handleDrawerToggle} />
        </Box>
        <Box flex={4}>
          <Box display="flex" justifyContent="center">
            <Box maxWidth="800px" width="100%">
              <MenuEditor sections={sections?.data} isLoading={isLoading} />
            </Box>
          </Box>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            sx={{
              width: 456,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 456,
                boxSizing: "border-box",
              },
            }}
            variant="persistent">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                borderBottom: "1px solid #ddd",
              }}>
              <h3>Add New Section</h3>
              <IconButton onClick={() => setIsDrawerOpen(false)} marginRight="5px">
                <CloseIcon />
              </IconButton>
            </Box>

            <RightDrawerContent menuId={menuId} onClose={() => setIsDrawerOpen(false)} />
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default Section;
