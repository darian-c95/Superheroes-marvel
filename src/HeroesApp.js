import React, { useReducer } from 'react'
import { Provider } from 'react-redux';

import { AppRouter } from './routes/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer';
import { store } from './store/store'

        
const init = () => {
    return JSON.parse(localStorage.getItem('heroes')) || [];
}

export const HeroesApp = () => {
 

    const [state, dispatch] = useReducer(authReducer, [], init);

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{state, dispatch}}>
                <AppRouter />
            </AuthContext.Provider> 
        </Provider>

    )
}
