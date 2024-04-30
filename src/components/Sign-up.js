import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signuppage = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
   
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');
    const [submittedDetails, setSubmittedDetails] = useState([]);
   
    

    const handleSubmit = (e) => {
       
        Navigate('/login');
      
    };
    
    const showDetails = (e) => {
        e.preventDefault();
    
        const newUser = { name, age, email, username, password, gender };
        setSubmittedDetails([...submittedDetails, newUser]);
        
        // setName('');
        // setAge('');
        // setEmail('');
        // setUsername('');
        // setPassword('');
        // setGender('');
        // setError('');
    }
    

    return (
        <div style={{ textAlign: 'center', marginTop: '10%' }} >
            <form onSubmit={handleSubmit} >
                <input
                    name="name"
                    placeholder="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ marginTop: '15px' }}
                />
                  <br />
                <input
                    name="age"
                    placeholder="age"
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    style={{ marginTop: '15px' }}
                />
                  <br />
                <input
                    name="Email"
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ marginTop: '15px' }}
                />
                  <br />
                <input
                    name="username"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ marginTop: '15px' }}
                />
              
                <br />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ marginTop: '15px' }}
                />
                  <br />
                <input
                    name="gender"
                    placeholder="gender"
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    style={{ marginTop: '15px' }}
                />
                  <br />
             
                <button type="submit" style={{ marginTop: '15px',border:"2px solid blue" }}>
                    Click here
                </button>

                <button type="submit" style={{ marginTop: '15px',border:"2px solid black",marginLeft:"10px" }} onClick={showDetails} >
                  Show Details
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table style={{ marginTop: '30px', borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedDetails.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Signuppage;
