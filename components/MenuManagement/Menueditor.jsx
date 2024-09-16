import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Switch,
  TextField,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

const MenuAccordion = () => {
  const [sections, setSections] = useState([
    { id: 1, name: "Salads", items: [] },
    { id: 2, name: "Main Courses", items: [] },
    { id: 3, name: "Starters", items: [] },
    { id: 4, name: "Desserts", items: [] },
  ]);

  const [expandedSection, setExpandedSection] = useState(false);
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleExpandSection = (panel) => (event, isExpanded) => {
    setExpandedSection(isExpanded ? panel : false);
  };

  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleAddSection = () => {
    setSections([
      ...sections,
      { id: sections.length + 1, name: `New Section`, items: [] },
    ]);
    handleCloseMenu();
  };

  const handleAddItem = (sectionId) => {
    const newItem = {
      id: Date.now(), // Unique ID
      name: `Item ${Date.now()}`,
    };

    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              items: [...section.items, newItem],
            }
          : section
      )
    );

    // Update itemsToDisplay to show newly added item
    setItemsToDisplay((prevItems) => [...prevItems, { ...newItem, sectionId }]);
    handleCloseMenu();
  };

  return (
    <div>
      {/* Search Bar */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search for a section or item"
            variant="outlined"
            size="small"
          />
        </Grid>

        {/* Add Button */}
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "#fff",
              textTransform: "none",
              color: "#000",
              borderRadius: 8,
            }}
            startIcon={<AddIcon />}
            onClick={handleAddClick}
          >
            + Add
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleAddSection}>Section</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Item</MenuItem>
          </Menu>
        </Grid>
      </Grid>

      {/* Accordions for Sections */}
      {sections.map((section) => (
        <Accordion
          key={section.id}
          expanded={expandedSection === `panel${section.id}`}
          onChange={handleExpandSection(`panel${section.id}`)}
          sx={{
            marginTop: "10px",
            marginBottom: "5px", // 5px gap between sections
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)", // Scale on hover
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${section.id}bh-content`}
            id={`panel${section.id}bh-header`}
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: "8px 8px 0 0",
            }}
          >
            <Typography>{section.name}</Typography>
            <IconButton
              aria-label="add-item"
              onClick={() => handleAddItem(section.id)}
              style={{ marginLeft: "auto" }}
            >
              <AddIcon />
            </IconButton>
            <Switch defaultChecked />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>No items added.</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Display Items Independently */}
      {itemsToDisplay.map((item) => (
        <Accordion
          key={item.id}
          sx={{
            marginLeft: "20px", // Indented by 20px
            borderRadius: "8px",
            border: "1px solid #e0e0e0",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)", // Scale on hover
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`item${item.id}bh-content`}
            id={`item${item.id}bh-header`}
            sx={{
              backgroundColor: "#f9f9f9",
              borderRadius: "8px 8px 0 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              label="Item name"
              defaultValue={item.name}
              sx={{ marginRight: "10px", width: "50%" }}
            />
            <Switch defaultChecked />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Item details go here.</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default MenuAccordion;
