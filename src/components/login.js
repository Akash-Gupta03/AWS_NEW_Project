import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const Navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [datas, setDatas] = useState([])


    // function getData() {
    //     axios.get('http://localhost:8090/api/getdata').then((response) => {
    //         console.log(response.data)
    //         setDatas(response.data);
    //     });
    // }

    // useEffect(()=>{
    //     getData();
    // },[])

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    
  
    //     const userData = datas.find(data => data.name === username);
    
    //     if (userData && userData.password.toString() === password) {
           
    //         Navigate('/dashboard');
    //     } else {
    //         setError('Invalid username or password');
    //     }
    // };
    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (username === 'Akash' && password === '123') {
            Navigate('/dashboawewewerd');
        } else {
            setError('Invalid username or password');
        }
    };
    
    

    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit" style={{ marginTop: '15px' }}>
                    Click here
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
