import React, { useState } from 'react';
import anmolbhai from '../assests/t-security_awareness_cleanup.jpg'

function YourComponent() {
  const handleSubmit = () => {
    // const checkPassword = () => {
    //   const pw = document.getElementById("pswd").value.trim();

    //   if (pw === "") {
    //     setMessage('**Fill the password please!');
    //     return false;
    //   }
    //   // Other logic you might have...
    // };

    // const setMessage = (message) => {
    //   document.getElementById("message").textContent = message;
    // };

    // return checkPassword();
  };

  return (


    <>
    <h2>image editor

    </h2>
    <div style={{ position: 'relative', maxWidth: '50%' }}>
      <img
        src={anmolbhai} // Assuming 'anmolbhai' is your image source
        alt="Anmolbhai"
        style={{ width: '100%', height: 'auto' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          // backgroundColor: 'rgba(255, 255, 255, 0.7)',
          padding: '10px',
          // borderRadius: '5px',
          textAlign: 'center'
        }}
      >
        <p style={{ margin: 0 ,color:"#774723",fontWeight:"bold"}}>ROMW Web Form</p>
      </div>
    </div>
    </>
    // <form onSubmit={handleSubmit}>
    //   <input type="password" id="pswd" />
    //   <div id="message"></div>
    //   <button type="submit">Submit</button>
    // </form>
  );
}

export default YourComponent;
