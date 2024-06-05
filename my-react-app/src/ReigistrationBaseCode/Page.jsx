import React from 'react';
import iqlas from '../image/iqlas.png';
import './RegPage.css'

export default function Page() {
  return (
    <div className="page-container" style={{ display: 'grid',
     gridTemplateColumns: '444px ', 
     gridTemplateRows: '777px' }}>

      <div className="page-box" 
      style={{ border: '1px solid ##9AC8CD',
       backgroundColor: '#9AC8CD',
        borderRadius:'20px',
         marginTop: '20px' }}>

        <div className='white-line' 
        style={{ backgroundColor: '#E1F7F5',
            width: '444px', 
            height: '50px',
            position:'absolute',
            top: '300px'}}>

        <div className='firstPage-log' >
        <img className='registrationPageLogo' src={iqlas} alt="product logo"  />

        {/* <div className='product-decription'><h3>    Integrity at Every Step</h3></div> */}


        <div className='button-container'>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                
              <li><button className="RegPageButton signIn">Sign in</button></li>
              <li><button className="RegPageButton business">Create Business Account</button></li>
              <li><button className="RegPageButton client">Create Client Account</button></li>
              <li><button className="RegPageButtonApp">Get IQLAS App</button></li>
            </ul>
            
          </div>

        </div>

        </div>

    
            

         </div>
    </div>
  );
}

<div><h3>    Integrity at Every Step</h3></div>
