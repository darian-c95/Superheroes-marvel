import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator';
import Swal from 'sweetalert2';


import './styleLogin.css'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { startRegisterWithEmailPasswordName } from '../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch(); 

    const [formValue, handleInputChange] = useForm({
        name: 'React',
        email: 'challenge@alkemy.org',
        password: 'react123',
        password2: 'react123'
    })

    const {name, email, password, password2} = formValue;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if(isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        } 
    }

 
    const isFormValid = () => {
        
        if (name.trim().length === 0) { 
            dispatch(setError('Name is required')); 
            Swal.fire('Error', 'Name is required', 'error');
            return false
        } else if(!validator.isEmail(email)) {
            dispatch(setError('Email is not valid')); 
            Swal.fire('Error', 'Email is not valid', 'error');
            return false;
        } else if(password !== password2 || password.length < 6) { 
            dispatch(setError('Password should be at least 6 characters and match each other')); 
            Swal.fire('Error', 'Password should be at least 6 characters and match each other', 'error');
            return false
        }

        dispatch(removeError());
        return true;
    }

    
    return (
        <div className="container-login">

            <form className="form" onClick={handleRegister}> 

                <h3 className="auth__title">Register</h3>

                <label>Name</label>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <label>Email</label>
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <label>Password</label>         
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <label>Password Confirm</label>
                <input 
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>


                <Link
                    to="/login"
                    className="link"
                >
                    Already registered?
                </Link>
            </form>
        </div>
    )
}


