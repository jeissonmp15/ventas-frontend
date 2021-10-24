import axios from 'axios';
import { React, useEffect, useState } from 'react'
import Users from '../pages/Users';
import Navbar from './Navbar';
import Products from '../pages/Products';
import Sidebar from './Sidebar';
import Sales from '../pages/Sales';
import { Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function Dashboard() {

    const {
        user, isAuthenticated, logout
    } = useAuth0();

    const [userProfile, setUserProfile] = useState({});
    const initialUrl = 'https://ventas-note.herokuapp.com/usuarios/validar';

    const getUserProfile = (url) => {
        axios.get(url)
            .then(response => response.data)
            .then(data => setUserProfile(data))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        getUserProfile(`${initialUrl}/${user.email}`)
    }, [])

    return (
        <div>
            {}
            <Navbar />
            <div className='flex'>
                <Sidebar userProfile={userProfile} />
                <div className='content'>
                    <Route path='/users' exact={true} component={Users}></Route>
                    <Route path='/products' exact={true} component={Products}></Route>
                    <Route path='/sales' exact={true} component={Sales}></Route>
                </div>
            </div>

        </div>
        // <div className='d-flex'>
        //     <Sidenav />
        //     <Navbar />
        //     <div className="w-100">
        //         <Products products={products} />
        //     </div>

        // </div>
    )
}

export default Dashboard
