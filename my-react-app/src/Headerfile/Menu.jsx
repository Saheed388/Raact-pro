import React, { useState } from "react";
import '../Header.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function PositionedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFormClose = () => {
    setIsFormVisible(false);
  };

  if (!isFormVisible) {
    return null;
  }

  return (
    <div>
      <Button
        style={{ marginTop: '50px'}}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ backgroundColor: '#E1F7F5' }}/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/" className="home-link">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default PositionedMenu;
