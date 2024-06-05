import React from 'react';
import './RegPage.css'; // Import CSS file for styling (assuming you have one)

export default function Products() {
  return (
    <div className="select-container">
        <div>
            <button className='uploadDiecretToLogin'> UPLOAD  </button>
        </div>
      {/* <label htmlFor="Products">Select Products | Skills:</label> */}
      <select name="Products" id="Products">
      <option value="Products">Products</option>

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
    </div>
  );
}
