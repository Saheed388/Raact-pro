import React, {useState} from "react";
import iqlas from '../image/iqlas.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
// import '../Header.css'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import PositionedMenu from "./Menu";
import SearchRegPage from "./SearchRegPage";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Products from "./Products";





function Header() {
  return (
    <div>
    <header>
      <HomeOutlinedIcon style={{fontSize: '70px', color: '#1E0342', position: 'absolute', top: '25px' }}/>
      <SearchRegPage/>
      <Products/>
    </header>
    </div>

  );
}

export default Header;
