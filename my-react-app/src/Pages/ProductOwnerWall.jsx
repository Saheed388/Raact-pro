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
import PositionedMenu from "../Headerfile/Menu";
import Search from "../Headerfile/Search";
import Header from "../Headerfile/Header";
import AutoGrid from "../Gridfiles/AutoGrid";



export default function ProductOwnerWall (){
    
    return (
        <diV>
        <Header/>
        <AutoGrid />

        </diV>
    )
  }