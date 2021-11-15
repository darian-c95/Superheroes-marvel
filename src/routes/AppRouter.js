import React, { useEffect, useState } from 'react'
import { DashboardRoutes } from './DashboardRoutes'; 
import { useDispatch } from 'react-redux';
import { firebase } from "../firebase/firebase-config";

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import { RegisterScreen } from '../auth/RegisterScreen';
import { LoginScreen } from '../auth/LoginScreen';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

      
    useEffect(() => {
          
        firebase.auth().onAuthStateChanged((user) => {
        
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            } 

            setChecking(false);
    
        });
          
    }, [dispatch, setChecking, setIsLoggedIn])


    useEffect(() => {
        
        if (checking) {
            return (
                <h1>Espere...</h1>
            )
        }

    }, [checking])

 
    

    return ( 
        <Router>
            <div>
                 
                <Switch> 
                    <PublicRoute  
                        path="/login" 
                        component={LoginScreen} 
                        isAuthenticated={isLoggedIn}
                    />

                    <PublicRoute  
                        path="/register" 
                        component={RegisterScreen} 
                        isAuthenticated={isLoggedIn}
                    />


                    <PrivateRoute 
                        path="/" 
                        component={DashboardRoutes} 
                        isAuthenticated={isLoggedIn}
                    />
                </Switch>
            </div>
        </Router>
    )
}
