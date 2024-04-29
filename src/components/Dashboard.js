import React, { useState } from 'react';

const Dashboard = () => {
  const [names, setNames] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setNames(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  const handleClick2 = () => {
    if (names.trim() === "") {
      setError("Please enter a name");
    } 
    
     if (names.length < 8 || names.length >= 10){
      setError("Enter 8 numbers");
    }
  
  };


  

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      <input
        name='name'
        id='name'
        placeholder='Name'
        value={names}
        onChange={handleOnChange}
      />
      <button onClick={handleClick2} type='submit'>Show Error</button>

      {/* Display error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Dashboard;
