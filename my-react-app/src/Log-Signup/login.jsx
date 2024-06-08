import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import iqlas from '../image/iqlas.png';
import  './form.css'
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Form submitted', formData);
  };

  return (

    <div className='loginContainer'>
    <img className='registrationPageLogo' src={iqlas} alt="product logo" style={{ height: '200px', top: '50px' }} />
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: 'block', margin: '20px 0', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' }}
      />
      <div style={{ position: 'relative', marginBottom: '20px',width: '400px' }}>
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button className='loginbutton'  type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
    </div>
  );
}

export default LoginForm;
