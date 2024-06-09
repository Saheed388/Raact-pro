import React, { useState } from 'react';
import iqlas from '../image/iqlas.png';
import './RegPage.css';
import LoginForm from '../Log-Signup/login';  // Import the LoginForm component
import RegistrationFormClient from '../Log-Signup/RegistrationFormClient';
import RegistrationFormSeller from '../Log-Signup/RegistrationFormSeller';

export default function Page() {
  const [view, setView] = useState('home');  // Manage the view state

  function handleClick(view) {
    setView(view);
  }

  return (
    <div className="page-container">
      {view === 'home' ? (
        <div className="homePage-container">
          <div className="homepage-box">
            <div className='homewhite-line'>
              <div className='firstPage-log'>
                <img className='registrationPageLogo' src={iqlas} alt="product logo" />
                <div className='homebutton-container'>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><button onClick={() => handleClick('signin')} className="RegPageButton signIn">Sign in</button></li>
                    <li><button onClick={() => handleClick('createBusiness')} className="RegPageButton business">Create Business Account</button></li>
                    <li><button onClick={() => handleClick('createClient')} className="RegPageButton client">Create Client Account</button></li>
                    <li><button onClick={() => handleClick('getApp')} className="RegPageButtonApp">Get IQLAS App</button></li>
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
      ) : view === 'signin' ? (
        <LoginForm />
      ) : view === 'createBusiness' ? (
        <RegistrationFormSeller />
      ) : view === 'createClient' ? (
        <RegistrationFormClient />
      ) : view === 'getApp' ? (
        alert('App in progress')
      ) : null}
    </div>
  );
}
