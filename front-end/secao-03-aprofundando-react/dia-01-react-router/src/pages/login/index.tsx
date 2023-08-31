import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/login-form';
import './login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
