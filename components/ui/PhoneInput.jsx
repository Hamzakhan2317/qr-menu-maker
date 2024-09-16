import React, { useState } from "react";
import {
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import Flag from "react-world-flags";

const countryOptions = [
  { code: "US", name: "United States", flag: "US" },
  { code: "UK", name: "United Kingdom", flag: "UK" },
  { code: "PK", name: "Pakistan", flag: "PK" },
];

const PhoneInput = ({ cols = 6 }) => {
  const [selectedCountry, setSelectedCountry] = useState(
    countryOptions[0].code
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <Grid item xs={12} sm={cols} md={cols} lg={cols}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="phone-number">Phone Number</InputLabel>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          inputProps={{ "aria-label": "Country Select" }}
          sx={{ width: "120px", height: "37px" }}
        >
          {countryOptions.map((country) => (
            <MenuItem key={country.code} value={country.code}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Flag
                  code={country.flag}
                  style={{ width: "24px", height: "16px", marginRight: "8px" }}
                />
                {country.name} ({country.code})
              </div>
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="phone-number"
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span>
                  +
                  {
                    countryOptions.find(
                      (country) => country.code === selectedCountry
                    ).code
                  }
                </span>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Grid>
  );
};

export default PhoneInput;
