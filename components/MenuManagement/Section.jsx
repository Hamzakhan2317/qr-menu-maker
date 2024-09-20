"use client";

import { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RightDrawerContent from "./RightDrawerContent";
import MenuEditor from "./Menueditor";
import SectionList from "./SectionList";
import { useParams } from "next/navigation";
import { useGetAllSectionQuery } from "@/redux/services/api/sectionApis";

const Section = () => {
  const params = useParams();
  const { menuId } = params;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { data: sections, isLoading } = useGetAllSectionQuery(menuId)


  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevOpen) => !prevOpen);
  };
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };
  return (
    <div>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <SectionList onAddClick={handleDrawerToggle} />
        <Box sx={{ padding: "20px 40px", maxWidth: "850px", flex: 1 }}>
          <MenuEditor sections={sections?.data} isLoading={isLoading} />
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              width: 456,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 456,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                borderBottom: "1px solid #ddd",
              }}
            >
              <h3>Add New Section</h3>
              <IconButton onClick={toggleDrawer(false)} marginRight="5px">
                <CloseIcon />
              </IconButton>
            </Box>

            <RightDrawerContent menuId={menuId} onClose={toggleDrawer} />
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default Section;
