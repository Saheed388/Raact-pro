import React, {useState} from "react";
import iqlas from '../image/iqlas.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import '../Header.css'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PositionedMenu from "./Menu";
import Search from "./Search";




function BasicButtons() {

  const[click, setClick] = useState()

  function handleClick (){
    alert("clicked")
  }



  return (
    <Stack spacing={2} direction="row">
      <Button onClick={handleClick} className="registration-button" variant="contained">Register</Button>
      <Button onClick={handleClick}className="login-button" variant="outlined">Login</Button>
    </Stack>
  );
}

function Header() {
  return (
    <header>
      <img src={iqlas} alt="product logo" />
      <BasicButtons />
      <PositionedMenu /> {/* Correct usage of the PositionedMenu component */}
      <Search/>

    </header>
  );
}

export default Header;
