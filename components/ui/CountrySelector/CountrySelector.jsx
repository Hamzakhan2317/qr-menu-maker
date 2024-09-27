import countries from "@/public/assets/countryCodeStatic";
import { FormLabel } from "@mui/joy";
import Autocomplete from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { Grid } from "@mui/material";

export default function CountrySelect({ cols = 6, formik }) {
  return (
    <Grid item xs={12} sm={cols} md={cols} lg={cols}>
      <FormLabel sx={{ marginBottom: "5px" }}>Country</FormLabel>
      <Autocomplete
        placeholder="Choose a country"
        slotProps={{
          input: {
            autoComplete: "new-password", // disable autocomplete and autofill
          },
        }}
        sx={{
          width: "100%",
          borderRadius: "8px",
          height: "32px",
          "--Input-focusedHighlight": "none !important",
          "&.Mui-focused fieldset": {
            border: "1px solid #E5E5E5",
          },
        }}
        options={countries}
        value={countries.find(
          (option) => option.label === formik.values?.country
        )} // Bind the value to Formik's current value
        onChange={(event, newValue) => {
          if (newValue) {
            formik.setFieldValue("country", newValue.label);
          }
        }} // Update Formik's value on selection
        autoHighlight
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.label === value.label} // Properly compare options and values
        renderOption={(props, option) => (
          <AutocompleteOption {...props}>
            <ListItemDecorator>
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt={`${option.label} flag`}
              />
            </ListItemDecorator>
            <ListItemContent sx={{ fontSize: "sm" }}>
              {option.label}
              <Typography level="body-xs">
                ({option.code}) +{option.phone}
              </Typography>
            </ListItemContent>
          </AutocompleteOption>
        )}
      />
    </Grid>
  );
}
