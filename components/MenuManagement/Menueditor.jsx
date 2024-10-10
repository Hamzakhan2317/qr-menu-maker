import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import Loader from "../ui/Loader";
import ItemRightDrawer from "./ItemRightDrawer";
import MenuItem from "./MenuItemsSection/MenuItem";

const MenuEditor = ({ sections, isLoading }) => {
  const [openItemId, setOpenItemId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [itemData, setItemData] = useState({});

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevOpen) => !prevOpen);
  };

  const handleItem = (sectionId, type, item) => {
    setOpenItemId(sectionId);
    handleDrawerToggle();
    if (type === "Edit") {
      setItemData(item);
    }
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  if (isLoading) return <Loader />;

  if (sections?.length === 0)
    return <h3 style={{ textAlign: "center" }}>The menu is currently empty!</h3>;
  const isEdit = Object.keys(itemData).length !== 0;

  return (
    <Box minHeight="100vh">
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
          <h3>{`${isEdit ? "Edit" : "Add New"} Item`}</h3>
          <IconButton onClick={toggleDrawer(false)} marginRight="5px">
            <CloseIcon />
          </IconButton>
        </Box>

        <ItemRightDrawer sectionId={openItemId} onClose={handleDrawerToggle} itemData={itemData} />
      </Drawer>
      <div>
        {sections?.map((item, index) => (
          <MenuItem item={item} handleItem={handleItem} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default MenuEditor;
