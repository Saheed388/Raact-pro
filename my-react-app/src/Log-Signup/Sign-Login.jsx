import React  from "react";
import "./form.css"
import user_icom from "../image/person.png"
import password_icom from "../image/password.png"
import email_icom from "../image/email.png"


const RegAcess = () =>{

    
    return (<div className="container">
            <div className="hearder">
                <div className="text">Sign Up</div>
                <div className="underline"></div>

            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icom} alt=""/>
                    <input type="text"/>
                </div>

                <div className="input">
                    <img src={email_icom} alt=""/>
                    <input type="email"/>
                </div>

                <div className="input">
                    <img src={password_icom} alt=""/>
                    <input type="password"/>
                </div>
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                <div className="submit-container">
                   <div className="submit">Sign Up</div> 
                   <div className="submit">Login</div> 

                
                </div>
            </div>



    </div>)
}

export default RagAcess;