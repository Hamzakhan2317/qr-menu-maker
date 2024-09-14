"use client";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiTabPanel-root": {
      padding: "0px !important",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
      textTransform: "capitalize !important",
    },
  },

  selectedTab: {
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
  tabContainer: {
    overflow: "auto !important",
    display: "block !important",
  },
  tabPanel: {
    "& .MuiBox-root": {
      padding: "0px",
    },
  },
  // Media query to make tabs concise on smaller screens
  "@media (max-width: 786px)": {
    tab: {
      minWidth: "400px !important",
      padding: "6px 12px !important",
      fontSize: "5px !important",
    },
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabPill = ({ childrenArray = [], defaultValue = 0 }) => {
  const [value, setValue] = useState(defaultValue);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value} className={classes.tabContainer}>
      <Box className={classes.root}>
        <TabList
          onChange={handleChange}
          orientation="horizontal"
          aria-label="Tabs"
          className={classes.tab_list}
        >
          {childrenArray.map(({ title }, index) => (
            <Tab
              key={index}
              label={title}
              disableIndicator
              {...a11yProps(value)}
              sx={{
                flexGrow: 1,
                backgroundColor: value === index ? "#842D72" : "#FFFFFF",
                color: value === index ? "#FFFFFF !important" : "#842D72",
                border: value === index ? "" : "1px solid #842D72",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                maxWidth: "fit-content",
              }}
            />
          ))}
        </TabList>
      </Box>
      {childrenArray.map(({ tab }, index) => (
        <CustomTabPanel
          key={index}
          value={value}
          index={index}
          className={classes.tabPanel}
        >
          {tab}
        </CustomTabPanel>
      ))}
    </TabContext>
  );
};

export default TabPill;
