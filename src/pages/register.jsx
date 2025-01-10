import React, { useState } from 'react';
import { auth } from '../services/firebaseConfig';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { createUserWithEmailAndPassword  } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = () => {
    const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20, height:"1000px" }}>
      <h2>Sign Up</h2>
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
      <Button variant="contained" color="primary" onClick={handleSignup} style={{width: 400,padding: 10, marginTop: 10}}>
        Sign Up
      </Button>
    </div>
  );
};

export default Register;
