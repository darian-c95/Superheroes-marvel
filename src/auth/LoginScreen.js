import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator';
import Swal from 'sweetalert2';

import './styleLogin.css'
import { startLoginEmailPassword, startRegisterWithEmailPasswordName } from '../actions/auth'
import { Link } from 'react-router-dom' 
import { useForm } from '../hooks/useForm'
import { removeError, setError } from '../actions/ui';

export const LoginScreen = ({history}) => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui)

    
    const [formValues, handleInputChange] = useForm({
        email: 'challenge@alkemy.org',
        password: 'react123'
    });
    
    const {email, password} = formValues;
    
    const handleLogin = (e) => {
        e.preventDefault(); 
        dispatch(startLoginEmailPassword(email, password));

        if(isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password))
        } 
    } 


    const isFormValid = () => {
        
        if(!validator.isEmail(email)) {
            dispatch(setError('Email is not valid')); 
            Swal.fire('Error', 'Email is not valid', 'error');
            return false;
        } else if(password.length < 6) { 
            dispatch(setError('Password should be at least 6 characters and match each other')); 
            Swal.fire('Error', 'Password should be at least 6 characters and match each other', 'error');
            return false
        }

        dispatch(removeError());
        return true;
    }

    return (
        <div className="container-login">
            <div className="container">

                <form onSubmit={handleLogin} className="form">
                    <h3 className="auth__title">Login</h3>
    
                    <label>Email</label>
                    <input 
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="auth__input"
                        autoComplete="on"
                        value={email}
                        onChange={handleInputChange}
                    />

                    <label>Password</label>
                    <input 
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="auth__input"
                        autoComplete="on"
                        value={password}
                        onChange={handleInputChange}
                    /> 

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={ loading } 
                    >
                        Login
                    </button> 

                    <Link 
                        to="/register"
                        className="link"
                    >
                        Create new account
                    </Link>
                </form>  
            </div>

        </div>

    )
}
