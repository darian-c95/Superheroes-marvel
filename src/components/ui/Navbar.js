import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import './navbarStyle.css';
import { startLogout } from '../../actions/auth'

export const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return ( 
        <nav className="navbar navbar-expand-sm navbar-dark col-lg-12">  

            <div className="navbar-text col-lg-8 home-search-style">  
                <div>
                    <img  className="logo-style" src="https://logos-download.com/wp-content/uploads/2018/07/Marvel_logo_red.png"  alt="logo-marvel" />
                </div> 
                <div className="navbar-collapse justify-content-end">
                    <Link
                        className="home-style" 
                        to="/home"
                    >
                        Home
                    </Link>
                    
                    <div className="navbar-nav">
    
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                            >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse order-3 dual-collapse2 navbar-nav justify-content-end logout-style"> 
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                        onClick={handleLogout}
                    >
                        Logout
                    </NavLink> 
                </div>
            </div>

        </nav> 
    )
}
