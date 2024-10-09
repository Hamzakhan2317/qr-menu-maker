import {
  selectedTabStyles,
  tabIndicatorStyles,
  tabStyles,
} from "@/styles/CustomTabsStyles/CustomTabsStyles";
import { Box, Tab, Tabs } from "@mui/material";

const CustomTabs = ({ tabs = [], setTabValue, tabValue = 0 }) => {
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "auto",
          },
          padding: "10px 10px",
          background: "#fff",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          borderRadius: {
            xs: "10px",
            md: "100px",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Tabs
          centered
          value={tabValue}
          onChange={handleChange}
          TabIndicatorProps={{ style: tabIndicatorStyles }}
          sx={{
            width: "100%",
            display: "flex",
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            },
          }}>
          {tabs.map((tab, index) => (
            <Tab
              wrapped
              label={tab}
              key={index}
              sx={tabStyles}
              className="reservations-tabs"
              style={tabValue === index ? selectedTabStyles : {}}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default CustomTabs;
