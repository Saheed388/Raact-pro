// MyForm.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import iqlas from '../image/iqlas.png';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './form.css';

function RegistrationFormClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // Handle form submission here, e.g., send data to server
      console.log(formData);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleClose = () => {
    setIsFormVisible(false);
  };

  if (!isFormVisible) {
    return null;
  }

  return (
    <div className="ClientformContainer" style={{
      backgroundColor: '#9AC8CD',
      position: 'relative',
      width: '600px',
      height: '900px',
      borderRadius: '20px',
      left: '500px',
      marginBottom: '50px'
    }}>
      <IconButton
        onClick={handleClose}
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          color: '#1E0342', 
          backgroundColor: 'transparent', 
          fontSize: '50px'
        }}
      >
          <a href="/" class="home-link">
      <CloseOutlinedIcon lin/>
      </a>
      </IconButton>
      <div className='clientForm' style={{ marginTop: '200px', marginBottom: '50px' }}>
        <div className='formImage' style={{ display: 'flex', justifyContent: 'center' }}>
          <img className='registrationPageLogo' src={iqlas} alt="product logo" style={{ height: '200px', top: '50px' }} />
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'grid', justifyContent: 'center' }}>
          <input
            placeholder="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            style={{ display: 'block', margin: '20px 0', marginTop: '50px', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' }}
          />
          <input
            placeholder="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            style={{ display: 'block', margin: '20px 0', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' }}
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', margin: '20px 0', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' }}
          />
          <div style={{ position: 'relative', margin: '20px 0', width: '400px' }}>
            <input
              placeholder="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              style={{ display: 'block', padding: '20px', width: '100%', backgroundColor: '#E1F7F5' }}
            />
            <IconButton
              onClick={toggleShowPassword}
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>
          <div style={{ position: 'relative', margin: '20px 0', width: '400px' }}>
            <input
              placeholder="Confirm Password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ display: 'block', padding: '20px', width: '100%', backgroundColor: '#E1F7F5' }}
            />
            <IconButton
              onClick={toggleShowPassword}
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#1E0342', margin: '20px 0', width: '300px', padding: '20px', position: 'relative', left: '50px', borderRadius: '30px' }}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationFormClient;
