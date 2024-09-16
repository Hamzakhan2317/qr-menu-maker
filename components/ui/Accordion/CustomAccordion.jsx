import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";

export default function CustomAccordion({ accordionArray = [] }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box>
      {accordionArray?.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 500 } }}
            sx={[
              expanded
                ? {
                    "& .MuiAccordion-region": {
                      height: "auto",
                    },
                    "& .MuiAccordionDetails-root": {
                      display: "block",
                    },
                  }
                : {
                    "& .MuiAccordion-region": {
                      height: 0,
                    },
                    "& .MuiAccordionDetails-root": {
                      display: "none",
                    },
                  },
            ]}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>{item?.accordionHeading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item?.bodyText}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
