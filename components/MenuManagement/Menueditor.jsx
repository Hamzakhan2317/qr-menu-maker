import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomizedSwitch from "../ui/CustomizeSwitch";
import ItemRightDrawer from "./ItemRightDrawer";
import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BallTriangle } from "react-loader-spinner";

const MenuEditor = ({ sections, isLoading }) => {
  const [openItemId, setOpenItemId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle item toggle for showing/hiding sub-div
  const handleClick = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  // Handle adding a new sub item to a section
  const handleAddSubItem = (sectionId) => {
    handleDrawerToggle();
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevOpen) => !prevOpen);
  };
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  if (isLoading)
    return (
      <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
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

  if (sections?.length === 0)
    return (
      <h3 style={{ textAlign: "center" }}>The menu is currently empty!</h3>
    );

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
          <h3>Add New Item</h3>
          <IconButton onClick={toggleDrawer(false)} marginRight="5px">
            <CloseIcon />
          </IconButton>
        </Box>

        <ItemRightDrawer sectionId={openItemId} onClose={handleDrawerToggle} />
      </Drawer>
      <div>
        {sections?.map((item, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                width: "100%",
                // height: "56px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                marginBottom: "10px",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f0f0f0",
                    marginRight: "10px",
                    borderRadius: "50%",
                  }}
                />
                {/* Status Icon */}
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#52c41a",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                {/* Name */}
                <div>{item.name}</div>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <CustomizedSwitch />
                <span
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(item._id)}
                >
                  {openItemId === item._id ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </span>
              </div>
            </div>

            {/* Sub-items or Add Item Button */}
            {openItemId === item._id && (
              <div style={{ marginLeft: "30px" }}>
                {item.items.length > 0 &&
                  item.items.map((subItem, subIndex) => (
                    <div
                      key={subItem._id}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        height: "60px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        width: "100%",
                        boxSizing: "border-box",
                        marginBottom: "10px",
                        border: "1px solid #ddd",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#f0f0f0",
                            marginRight: "10px",
                            borderRadius: "50%",
                          }}
                        />
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "red",
                            borderRadius: "50%",
                            marginRight: "10px",
                          }}
                        />
                        <div>{subItem.name}</div>
                      </div>

                      <CustomizedSwitch />
                    </div>
                  ))}

                {/* Add item button */}
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    width: "100%",
                    boxSizing: "border-box",
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={() => handleAddSubItem()}
                      style={{
                        padding: "10px",
                        backgroundColor: "#1890ff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      + Add New Item
                    </button>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </Box>
  );
};

export default MenuEditor;
