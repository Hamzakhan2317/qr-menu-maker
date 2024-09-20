// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Switch from "@mui/material/Switch";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import CustomizedSwitch from "../ui/CustomizeSwitch";
// import Image from "next/image";
// import Salads from "/public/assets/images/salads.webp";
// import deserts from "/public/assets/images/deserts.webp";
// import starters from "/public/assets/images/starters.webp";
// import mainCourse from "/public/assets/images/main-course.webp";

// const MenuEditor = ({sections, isLoading}) => {
//   console.log("sections>>>>>>", sections)
//   const [items, setItems] = useState([
//     { id: "1", src: Salads, name: "Salads", available: true, children: [] },
//     {
//       id: "2",
//       name: "Main Course",
//       src: mainCourse,
//       available: false,
//       children: [
//         { id: "2-1", name: "Sub Item 1", available: true },
//         { id: "2-2", name: "Sub Item 2", available: false },
//       ],
//     },
//     {
//       id: "3",
//       name: "Starters",
//       src: starters,
//       available: true,
//       children: [
//         { id: "3-1", name: "Sub Item 1", available: true },
//         { id: "3-2", name: "Sub Item 2", available: false },
//       ],
//     },
//     {
//       id: "4",
//       src: deserts,
//       name: "Desserts",
//       available: true,
//       children: [
//         { id: "3-1", name: "Sub Item 1", available: true },
//         { id: "3-2", name: "Sub Item 2", available: false },
//       ],
//     },
//   ]);

//   const [openItemId, setOpenItemId] = useState(null);

//   const handleOnDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedItems = Array.from(items);
//     const [movedItem] = reorderedItems.splice(result.source.index, 1);
//     reorderedItems.splice(result.destination.index, 0, movedItem);

//     setItems(reorderedItems);
//   };

//   const handleClick = (itemId) => {
//     const clickedItem = sections.find((section) => section._id === itemId);
//     if (clickedItem && clickedItem.items.length > 0) {
//       setOpenItemId(openItemId === itemId ? null : itemId);
//     }
//   };

//   return (
//     <>
//     {isLoading ? (
//       <h1>Loading......</h1>
//     ) : sections?.length === 0 ? (
//       <h1>No section found</h1>
//     ) : (
//     <DragDropContext onDragEnd={handleOnDragEnd}>
//       <Droppable droppableId="menu-items">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             {sections?.map((item, index) => (
//               <React.Fragment key={item.id}>
//                 <Draggable draggableId={item.id} index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={{
//                         ...provided.draggableProps.style,
//                         backgroundColor: "white",
//                         borderRadius: "10px",
//                         width: "100%",
//                         boxSizing: "border-box",
//                         height: "56px",
//                         display: "flex",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         padding: "10px",
//                         marginBottom: "10px",
//                         boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//                         transition: "transform 0.2s ease",
//                         transform: "scale(1)",
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = "scale(1.003)";
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = "scale(1)";
//                       }}
//                     >
//                       <div style={{ display: "flex", alignItems: "center" }}>
//                         <Image
//                           style={{
//                             width: "40px",
//                             height: "40px",
//                             marginRight: "10px",
//                             borderRadius: "8%",
//                           }}
//                           // src={item?.src}
//                           alt=""
//                         />
//                         {/* Status Icon */}
//                         <div
//                           style={{
//                             width: "8px",
//                             height: "8px",
//                             backgroundColor: "#52c41a",
//                             borderRadius: "50%",
//                             marginRight: "10px",
//                           }}
//                         />
//                         {/* Name */}
//                         <div>{item.name}</div>
//                       </div>

//                       <div style={{ display: "flex", alignItems: "center" }}>
//                         <CustomizedSwitch />
//                         {/* {item.items.length > 0 && ( */}
//                           <span
//                             style={{ marginLeft: "10px", cursor: "pointer" }}
//                             onClick={() => handleClick(item._id)}
//                           >
//                             {openItemId === item._id ? (
//                               <KeyboardArrowUpIcon />
//                             ) : (
//                               <  KeyboardArrowDownIcon />
//                             )}
//                           </span>
//                         {/* )} */}
//                       </div>
//                     </div>
//                   )}
//                 </Draggable>

//                 {/* Sub-divs */}
//                 {openItemId === item._id && item.items.length > 0 && (
//                   <div style={{ marginLeft: "30px" }}>
//                     {item.items.map((subItem, subIndex) => (
//                       <div
//                         key={subItem.id}
//                         style={{
//                           backgroundColor: "white",
//                           borderRadius: "8px",
//                           height: "60px",
//                           display: "flex",
//                           justifyContent: "space-between",
//                           alignItems: "center",
//                           padding: "10px",
//                           width: "100%",
//                           boxSizing: "border-box",
//                           marginBottom: "10px",
//                           border: "1px solid #ddd",
//                         }}
//                       >
//                         <div style={{ display: "flex", alignItems: "center" }}>
//                           {/* Picture */}
//                           <div
//                             style={{
//                               width: "40px",
//                               height: "40px",
//                               backgroundColor: "#f0f0f0",
//                               marginRight: "10px",
//                               borderRadius: "50%",
//                             }}
//                           />
//                           {/* Status Icon */}
//                           <div
//                             style={{
//                               width: "8px",
//                               height: "8px",
//                               backgroundColor: subItem.available
//                                 ? "green"
//                                 : "red",
//                               borderRadius: "50%",
//                               marginRight: "10px",
//                             }}
//                           />
//                           {/* Name */}
//                           <div>{subItem.name}</div>
//                         </div>

//                         <div style={{ display: "flex", alignItems: "center" }}>
//                           <Switch defaultChecked={subItem.available} />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </React.Fragment>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//  )}
//  </>
// );
// };

// export default MenuEditor;

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Switch from "@mui/material/Switch";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomizedSwitch from "../ui/CustomizeSwitch";
import Image from "next/image";
import Salads from "/public/assets/images/salads.webp";
import deserts from "/public/assets/images/deserts.webp";
import starters from "/public/assets/images/starters.webp";
import mainCourse from "/public/assets/images/main-course.webp";
import ItemRightDrawer from "./ItemRightDrawer";
import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const MenuEditor = ({ sections, isLoading }) => {
  const [openItemId, setOpenItemId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  console.log("openItemId>>>>>>>>", openItemId)
  // Handle drag end to reorder sections
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(sections);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
  };

  // Handle item toggle for showing/hiding sub-div
  const handleClick = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  // Handle adding a new sub item to a section
  const handleAddSubItem = (sectionId) => {
    // Logic to add a new sub item to a section
    // You might want to update the sections state by adding a new sub item.
    // console.log(`Add new item to section ${sectionId}`);
    handleDrawerToggle();
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevOpen) => !prevOpen);
  };
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : sections?.length === 0 ? (
        <h1>No section found</h1>
      ) : (
        <>
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
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="menu-items">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {sections?.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <Draggable draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
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
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Image
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  marginRight: "10px",
                                  borderRadius: "8%",
                                }}
                                src={item?.src}
                                alt=""
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

                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <CustomizedSwitch  />
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
                        )}
                      </Draggable>

                      {/* Sub-items or Add Item Button */}
                      {openItemId === item._id && (
                        <div style={{ marginLeft: "30px" }}>
                          {item.items.length > 0 && 
                            <>
                              {item.items.map((subItem, subIndex) => (
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
                                        // backgroundColor: subItem.available
                                        //   ? "green"
                                        //   : "red",
                                        backgroundColor: "red",
                                        borderRadius: "50%",
                                        marginRight: "10px",
                                      }}
                                    />
                                    <div>{subItem.name}</div>
                                  </div>

                                  <Switch defaultChecked={true} />
                                </div>
                              ))}
                            </>
                          }
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
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </>
      )}
    </>
  );
};

export default MenuEditor;
