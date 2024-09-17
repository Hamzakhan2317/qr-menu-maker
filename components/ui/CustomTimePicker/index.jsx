"use client";

import { datepickrInput } from "@/styles/common";
import { useState } from "react";

const CustomTimePicker = () => {
  const [selectedHour, setSelectedHour] = useState(null);

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  const handleOk = () => {
    console.log(`Selected hour: ${selectedHour}`);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "10px" }}>
        <input
          style={datepickrInput}
          type="time"
          value="00:00"
          onChange={(e) => handleHourChange(e.target.value)}
        />
      </div>
      <div>
        <input
          style={datepickrInput}
          type="time"
          value="23:59"
          onChange={(e) => handleHourChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomTimePicker;
