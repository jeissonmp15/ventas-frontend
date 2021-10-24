import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function Login() {
    const {
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
    } = useAuth0();

    console.log('En el login', isAuthenticated)
    return (
        <div>
            <h1>Auth0 Authentication </h1>
            <ul>
                <li><button onClick={loginWithPopup}>Iniciar Sesión</button></li>
                <li><button onClick={logout}>Salir</button></li>
            </ul>
        </div>
    )
}

export default Login
