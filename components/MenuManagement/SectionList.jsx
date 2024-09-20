"use client";

import { useEffect } from "react";

import { sectionsList } from "@/styles/common";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PlusIconFine } from "@/public/assets/svg/ForkNknife";
import { useParams } from 'next/navigation';
import { useGetAllSectionQuery } from "@/redux/services/api/sectionApis";



const initialMenuData = [
  { id: "1", name: "Salads", subItems: [] },
  {
    id: "2",
    name: "Main Courses",
    subItems: ["Wraps", "Chicken", "Burgers", "Red Meats"],
  },
  { id: "3", name: "Starters", subItems: [] },
  { id: "4", name: "Desserts", subItems: [] },
  { id: "5", name: "Pasta", subItems: [] },
  { id: "6", name: "Lasagna", subItems: [] },
];

const CustomAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(-90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "#fff",
  }),
}));

const SectionList = ({ onAddClick }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [menuData, setMenuData] = useState(null);
  // const [menuData, setMenuData] = useState(sections);

  const params = useParams();
  const { menuId } = params;

  const {data:sections, isLoading } = useGetAllSectionQuery(menuId)


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedData = reorder(
      menuData,
      result.source.index,
      result.destination.index
    );
    setMenuData(reorderedData);
  };
  useEffect(()=>{
if(sections){
  setMenuData(sections?.data)
}
  },[sections])

  const renderListItem = (item, index, provided) => (
    <Box
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      key={item._id}
      sx={{
        padding: "8px 0",
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {item?.items?.length > 0 ? (
        <CustomAccordion
          expanded={expanded === item._id}
          onChange={handleAccordionChange(item._id)}
          sx={{
            width: "100%",
            boxShadow: "none",
            borderBottomLeftRadius: "0px !important",
            borderBottomRightRadius: "0px !important",
          }}
          className="list-accordion"
        >
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 0,
            }}
          >
            <Typography fontSize={"12px"} fontWeight={400}>
              {item.name}
            </Typography>
          </CustomAccordionSummary>
          <AccordionDetails sx={{ padding: "10px 0px" }}>
            {item?.items?.map((subItem, i) => (
              <Box
                key={i}
                sx={{
                  paddingLeft: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#52c41a",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
                <Typography fontSize={"12px"} fontWeight={400} flex={1}>
                  {subItem?.name}
                </Typography>
              </Box>
            ))}
          </AccordionDetails>
        </CustomAccordion>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#52c41a",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <Typography fontSize={"12px"} fontWeight={400}>
            {item.name}
          </Typography>
        </Box>
      )}
    </Box>
  );

  return (
    <Box sx={sectionsList}>
    
    {isLoading ?  <>Loading.......</>
  :
  <>
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "15px",
        }}
      >
        <Typography fontSize="14px">Section</Typography>
        <Box sx={{ cursor: "pointer" }} onClick={onAddClick}>
          <PlusIconFine sx={{ "&:hover": { color: "#8338ec" } }} />
        </Box>
      </Box>
      <Box>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            minHeight: "23px",
            "& .MuiTabs-flexContainer": {
              // border: "1px solid #d9d9d9",
              borderRadius: "30px",
              minHeight: "23px",
              "& .MuiButtonBase-root": {
                minHeight: "23px",
                height: "23px",
                fontSize: "12px",
                minWidth: "60px",
                flex: 1,
                "&.Mui-selected": {
                  color: "#8338ec",
                },
              },
            },
            "& .MuiTabs-indicator": {
              background: "transparent",
            },
          }}
          className="list-tabs"
        >
          <Tab
            label="All"
            sx={{
              border:
                activeTab === 0 ? "1px solid #8338ec" : "1px solid #d9d9d9",
              color: activeTab === 0 ? "#8338ec" : "black",
              borderRadius: "8px 0 0 8px",
              padding: "1px 5px",
              fontWeight: "400",
            }}
          />
          <Tab
            label="Active"
            sx={{
              border:
                activeTab === 1 ? "1px solid #8338ec" : "1px solid #d9d9d9",
              color: activeTab === 1 ? "#8338ec" : "black",
              borderRadius: "0",
              padding: "1px 5px",
              fontWeight: "400",
            }}
          />
          <Tab
            label="Inactive"
            sx={{
              border:
                activeTab === 2 ? "1px solid #8338ec" : "1px solid #d9d9d9",
              color: activeTab === 2 ? "#8338ec" : "black",
              borderRadius: "0 8px 8px 0",
              padding: "1px 5px",
              fontWeight: "400",
            }}
          />
        </Tabs>

        <Box
          sx={{
            marginTop: "5px",
            "& .MuiAccordionSummary-root": {
              minHeight: "auto",
              "& .MuiAccordionSummary-content ": {
                margin: "0px",
              },
            },
          }}
        >
          {activeTab === 0 && (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="menuItems">
                {(provided) => (
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    {menuData?.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item._id}
                        index={index}
                      >
                        {(provided) => renderListItem(item, index, provided)}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </Box>
      </Box>



     
    </>

  }
    
    </Box>
   
    
  );
};

export default SectionList;
