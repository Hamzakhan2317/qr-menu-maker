import { Box, Menu, MenuItem } from '@mui/material';
import React from 'react';

const PopUp = ({ anchorEl, handleMenuClose, menus = [] }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {
        menus?.map(({ name, icon, func }, index) => (
          <MenuItem sx={{ fontSize: "14px" }} key={index} onClick={func}>
            {icon && (
              <Box sx={{ display: 'inline', marginTop: 1, marginRight: 1 }}>
                {icon}
              </Box>
            )}
            {name}
          </MenuItem>
        ))
      }
    </Menu>
  );
};

export default PopUp;
