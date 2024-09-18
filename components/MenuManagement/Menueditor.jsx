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

const MenuEditor = () => {
  const [items, setItems] = useState([
    { id: "1", src: Salads, name: "Salads", available: true, children: [] },
    {
      id: "2",
      name: "Main Course",
      src: mainCourse,
      available: false,
      children: [
        { id: "2-1", name: "Sub Item 1", available: true },
        { id: "2-2", name: "Sub Item 2", available: false },
      ],
    },
    {
      id: "3",
      name: "Starters",
      src: starters,
      available: true,
      children: [
        { id: "3-1", name: "Sub Item 1", available: true },
        { id: "3-2", name: "Sub Item 2", available: false },
      ],
    },
    {
      id: "4",
      src: deserts,
      name: "Desserts",
      available: true,
      children: [
        { id: "3-1", name: "Sub Item 1", available: true },
        { id: "3-2", name: "Sub Item 2", available: false },
      ],
    },
  ]);

  const [openItemId, setOpenItemId] = useState(null);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setItems(reorderedItems);
  };

  const handleClick = (itemId) => {
    const clickedItem = items.find((item) => item.id === itemId);
    if (clickedItem && clickedItem.children.length > 0) {
      setOpenItemId(openItemId === itemId ? null : itemId);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="menu-items">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
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
                        boxSizing: "border-box",
                        height: "56px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        marginBottom: "10px",
                        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        transition: "transform 0.2s ease",
                        transform: "scale(1)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.003)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
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

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <CustomizedSwitch />
                        {item.children.length > 0 && (
                          <span
                            style={{ marginLeft: "10px", cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}
                          >
                            {openItemId === item.id ? (
                              <KeyboardArrowDownIcon />
                            ) : (
                              <KeyboardArrowUpIcon />
                            )}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </Draggable>

                {/* Sub-divs */}
                {openItemId === item.id && item.children.length > 0 && (
                  <div style={{ marginLeft: "30px" }}>
                    {item.children.map((subItem, subIndex) => (
                      <div
                        key={subItem.id}
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
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {/* Picture */}
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
                              backgroundColor: subItem.available
                                ? "green"
                                : "red",
                              borderRadius: "50%",
                              marginRight: "10px",
                            }}
                          />
                          {/* Name */}
                          <div>{subItem.name}</div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Switch defaultChecked={subItem.available} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default MenuEditor;
