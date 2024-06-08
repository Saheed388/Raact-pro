import React, { useState } from 'react';
import iqlas from '../image/iqlas.png';
import './RegPage.css';
import LoginForm from '../Log-Signup/login';

export default function Page() {
  const [click, setClick] = useState('');

  function handleClick(event) {
    setClick(event.target.value);
  }

  return (
    <div className="homePage-container" style={{ display: 'grid', gridTemplateColumns: '444px', gridTemplateRows: '777px', position: 'fixed' }}>
      <div className="homepage-box" style={{ border: '1px solid #9AC8CD', backgroundColor: '#9AC8CD', borderRadius: '20px', marginTop: '20px' }}>
        <div className='homewhite-line'>
          <div className='firstPage-log'>
            <img className='registrationPageLogo' src={iqlas} alt="product logo" />
            <div className='homebutton-container'>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                  <button onClick={handleClick} className="RegPageButton signIn" value="signIn">Sign in</button>
                </li>
                <li>
                  <button onClick={handleClick} className="RegPageButton business" value="business">Create Business Account</button>
                </li>
                <li>
                  <button onClick={handleClick} className="RegPageButton client" value="client">Create Client Account</button>
                </li>
                <li>
                  <button onClick={handleClick} className="RegPageButtonApp" value="app">Get IQLAS App</button>
                </li>
              </ul>
            </div>
            <div className='termPolicy'>
              <h3>
                By Signing up, you agree to <br />
                <span>Terms of Service</span> and
                <span> Privacy Policy <br /> </span>
                including <span>Cookie Use</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
