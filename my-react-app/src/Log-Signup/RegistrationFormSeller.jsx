// MyForm.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import iqlas from '../image/iqlas.png';

function RegistrationFormSeller() {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    businessAddress: '',
    registrationNumber: '',
    productType: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

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

  return (
    <div className="ClientformContainer" style={{
      backgroundColor: '#9AC8CD',
      position: 'relative',
      width: '600px',
      height: '1050px',
      borderRadius: '20px',
      left: '500px',
      marginBottom: '50px'
    }}>
      <div className='clientForm' style={{ marginTop: '100px', marginBottom: '50px' }}>
        <div className='formImage' style={{ display: 'flex', justifyContent: 'center' }}>
          <img className='registrationPageLogo' src={iqlas} alt="product logo" style={{ height: '200px', top: '50px' }} />
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'grid', justifyContent: 'center' }}>
          <input
            placeholder="Business Name"
            name="businessName"
            type="text"
            value={formData.businessName}
            onChange={handleChange}
            style={{ display: 'block', margin: '20px 0', marginTop: '50px', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' }}
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', margin: '20px 0', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' }}
          />
          <input
            placeholder="Business Address"
            name="businessAddress"
            type="text"
            value={formData.businessAddress}
            onChange={handleChange}
            style={{ display: 'block', margin: '20px 0', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' }}
          />
          <input
            placeholder="Registration Number"
            name="registrationNumber"
            type="text"
            value={formData.registrationNumber}
            onChange={handleChange}
            style={{ display: 'block', margin: '20px 0', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' }}
          />
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            style={{ display: 'block', margin: '20px 0', padding: '20px', width: '400px', backgroundColor: '#E1F7F5' , borderRadius: '5px'}}
          >
            <option value="">Select Product Type</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Technology and Innovation">Technology and Innovation</option>
            <option value="Tourism and Hospitality">Tourism and Hospitality</option>
            <option value="Retail and Consumer Goods">Retail and Consumer Goods</option>
            <option value="Construction and Real Estate">Construction and Real Estate</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education and Training">Education and Training</option>
            <option value="Logistics and Transportation">Logistics and Transportation</option>
            <option value="Information Technology Skills">Information Technology Skills</option>
            <option value="Business and Financial Skills">Business and Financial Skills</option>
            <option value="Creative and Artistic Skills">Creative and Artistic Skills</option>
          </select>
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
          <Button type="submit" variant="contained" color="primary" style={{ margin: '20px 0', width: '300px', padding: '20px', position: 'relative', left: '50px', borderRadius: '30px' }}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationFormSeller;
