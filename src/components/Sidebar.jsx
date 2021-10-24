import React from 'react'
import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'

function Sidebar({ userProfile}) {

    let navItems = ''
    if (userProfile?.perfil == 1) {
        navItems = <li>
            <NavLink to='/users' exact className='text-dark rounded py-2 w-100 d-inline-block px-3'
                activeClassName='active'><FaIcons.FaUserFriends className='me-2' />Usuarios</NavLink>
        </li>
    }

    return (
        <div className='sidebar'>
            <ul>
                {navItems}
                <li>
                    <NavLink to='/products' exact className='text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName='active'><FaIcons.FaAppleAlt className='me-2' />Productos</NavLink>
                </li>
                <li>
                    <NavLink to='/sales' exact className='text-dark rounded py-2 w-100 d-inline-block px-3'
                        activeClassName='active'><FaIcons.FaRegChartBar className='me-2' />Ventas</NavLink>
                </li>
            </ul>
        </div>

    )
}

export default Sidebar
