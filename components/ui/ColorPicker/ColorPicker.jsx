"use client"; // Ensure this is a client-side component in Next.js

import { useState } from "react";
import { Box, TextField } from "@mui/material";

export default function ColorPicker({ selectedColor, onColorChange }) {
  const handleInputChange = (event) => {
    onColorChange(event.target.value);
  };

  const handleColorChange = (event) => {
    onColorChange(event.target.value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        height: "32px",
        width: "192px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Color Picker */}
      <Box
        component="input"
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        sx={{
          height: "40px",
          width: "40px",
          padding: 0,
          marginLeft: "-2px",
          border: "none",
          cursor: "pointer",
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
        }}
      />

      {/* Input Field */}
      <TextField
        value={selectedColor}
        onChange={handleInputChange}
        inputProps={{ maxLength: 7 }} // Hex color has 7 characters, e.g., #FFFFFF
        sx={{
          width: "160px",
          height: "100%",
          "& .MuiInputBase-root": {
            height: "100%",
            paddingLeft: "8px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
    </Box>
  );
}
