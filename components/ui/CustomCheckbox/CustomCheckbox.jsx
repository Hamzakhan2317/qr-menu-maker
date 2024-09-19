import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CustomCheckbox = ({ label }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            borderRadius: "8px !important",
            "&.Mui-checked": {
              color: "#8338EC",
            },
          }}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;
