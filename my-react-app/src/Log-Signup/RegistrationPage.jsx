// MyForm.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
      />
      <input
        placeholder="Last Name"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
      />
      <input
        placeholder="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
      />
      <input
        placeholder="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
      />
      <input
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default MyForm;
