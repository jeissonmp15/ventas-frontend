import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    logout,
  } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sistema de ventas</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" onClick={logout} >Cerrar Sesión</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
