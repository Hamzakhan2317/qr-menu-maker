import Autocomplete from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import countries from "@/public/assets/countryCodeStatic";
import { Grid } from "@mui/material";
import { FormLabel } from "@mui/joy";

export default function CountrySelect({ cols = 6 }) {
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
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <AutocompleteOption {...props}>
            <ListItemDecorator>
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
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
