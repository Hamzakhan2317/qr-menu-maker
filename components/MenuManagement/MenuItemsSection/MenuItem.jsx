import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomizedSwitch from "../../ui/CustomizeSwitch";
import EditDeleteMenu from "./EditDeleteDropdown";

function MenuItem({ item, handleItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropDown = (type, subItem) => {
    if (type === "Edit") handleItem(item._id, type, subItem);
  };

  return (
    <React.Fragment>
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
        }}>
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
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </span>
        </div>
      </div>

      {/* Sub-items or Add Item Button */}
      {isOpen && (
        <div style={{ marginLeft: "30px" }}>
          {item.items.length > 0 &&
            item.items.map((subItem) => (
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
                }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CustomizedSwitch />
                  <EditDeleteMenu handleDropDown={(type) => handleDropDown(type, subItem)} />
                </div>
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
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}>
              <button
                onClick={() => handleItem(item._id, "add")}
                style={{
                  padding: "10px",
                  backgroundColor: "#1890ff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}>
                + Add New Item
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default MenuItem;
