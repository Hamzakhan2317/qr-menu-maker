"use client";
import {
  OperatingHoursHeader,
  opetatingHours,
  opetatingHoursFlex,
  opetatingHoursWrapper,
} from "@/styles/common";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import CustomTimePicker from "../ui/CustomTimePicker";

const OperatingHours = () => {
  const daysTimeArray = [
    {
      days: "Monday",
    },
    {
      days: "Tuesday",
    },
    {
      days: "Wednesday",
    },
    {
      days: "Thursday",
    },
    {
      days: "Friday",
    },
    {
      days: "Saturday",
    },
    {
      days: "Sunday",
    },
  ];
  return (
    <Box>
      <Box sx={OperatingHoursHeader}>
        <Typography
          sx={{ fontSize: "20px", lineHeight: "32px", fontWeight: "600" }}
        >
          Operating Hours
        </Typography>
      </Box>
      <Box sx={opetatingHoursWrapper}>
        <Grid container>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={opetatingHours}>
              {daysTimeArray?.map((item, index) => {
                return (
                  <Box key={index} sx={opetatingHoursFlex}>
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
                      label={item?.days}
                    />
                    <CustomTimePicker />
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OperatingHours;
