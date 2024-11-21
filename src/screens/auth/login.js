import React from 'react';
import logo from '../../images/Logo de DSoundFree.png';
import { loginEndpoint } from '../../spotify';
import "./login.css";


export default function Login() {
  return (
    <div className="login-page">
      <img
        src={logo}
        alt="Logo"
        className="logo"  
      />
      <a href={loginEndpoint}>
        <div className='login-btn'>Iniciar sesión</div>
      </a>
    </div>
  );
}
