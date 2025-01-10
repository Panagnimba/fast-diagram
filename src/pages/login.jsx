import React, { useState } from 'react';
import { auth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { signInWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20,height:"1000px"  }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} style={{width: 400,padding: 10, marginTop: 10}}>
        Login
      </Button>
    </div>
  );
};

export default Login;
