// Header.js
import React, { useState } from "react";
import iqlas from '../image/iqlas.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../Header.css';
import MyForm from '../Log-Signup/Login';
import PositionedMenu from "./Menu";
import Search from "./Search";

function BasicButtons({ onRegisterClick }) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onRegisterClick} className="registration-button" variant="contained">Register</Button>
      <Button className="login-button" variant="outlined">Login</Button>
    </Stack>
  );
}

function Header() {
  const [showForm, setShowForm] = useState(false); // State variable to track form display

  const handleRegistrationClick = () => {
    setShowForm(true); // Show the form when registration button is clicked
  };

  return (
    <header>
      <img src={iqlas} alt="product logo" />
      <BasicButtons onRegisterClick={handleRegistrationClick} />
      {showForm && <MyForm />} {/* Render the form only when showForm is true */}
      <PositionedMenu /> {/* Correct usage of the PositionedMenu component */}
      <Search />
    </header>
  );
}

export default Header;
