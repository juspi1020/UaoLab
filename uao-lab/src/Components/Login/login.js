import React from 'react';
import './login.css';


const Login = () => (

<div className="o-body">
    <div className="o-main">
        <div className="o-logo">
            <div className="o-container">
            <h3 className="o-text">Usuario</h3> 
            <input className="o-imputbox"/>
            <h3 className="o-text">Contraseña</h3>
            <input className="o-imputbox" type="password"/>
            <a href="#">Olvidaste tu contraseña</a>
            <div className="o-jcenter">
            <button id="o-send" onclick=""> ACCEDER</button>
            </div>
            </div>
        </div>
    </div>
</div>
);

export default Login;
