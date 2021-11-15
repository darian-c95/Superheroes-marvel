import React from 'react'
import { Navbar } from '../components/ui/Navbar'

import { Redirect, Route, Switch } from 'react-router'
import { SearchScreen } from '../components/search/SearchScreen'
import { HomeScreen } from '../components/home screen/HomeScreen'
import { HeroesScreen } from '../components/hero alignment/HeroesScreen'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
                                                                                                                
            <div className="container mt-2">  
                <Switch>  
                    <Route exact path="/home" component={HomeScreen} /> 
                    <Route exact path="/hero/:heroeName" component={HeroesScreen} />
                    <Route exact path="/search" component={SearchScreen} />  


                    <Redirect to="/" />

                </Switch>


            </div>  
        </>
    )
}
