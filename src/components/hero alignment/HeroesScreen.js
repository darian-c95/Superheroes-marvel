import React, { useContext } from 'react'
import { useParams } from 'react-router';

import './heroesScreen.css';
import { AuthContext } from '../../auth/AuthContext'; 
export const HeroesScreen = ({history}) => { 

    const {state} = useContext(AuthContext);   

    const params = useParams();
    const heroName = params.heroeName; 

    const filterName = () => {
        return state.filter(hero => hero.name === heroName);
    }
 
    const [{name, url, work, alias, eyeColor, hairColor, height, weight}] = filterName().map(hero => {
        return {
            name: hero.name,
            url: hero.url,
            height: hero.height,
            weight: hero.weight,
            work: hero.work,
            alias: hero.alias,
            eyeColor: hero.eyeColor,
            hairColor: hero.hairColor,
        }
    }) 

    const handleReturn = () => {
        if(history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }
    

    return (
        <div className="row hero-screen">
            <div className="col-lg-6 text-center"> 
                <img 
                    src={url}
                    alt={name}
                    className="picture-style"
                /> 
            </div> 

            <div className="col-lg-4 hero-description">
                <h1>{name}</h1>
                <p>Alias: {alias}</p>
                <p>Work: {work}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Eye Color: {eyeColor}</p>
                <p>Hair Color: {hairColor}</p>

                <button 
                    className="btn btn-outline-info btn-lg"
                    onClick={handleReturn}
                >
                    Back
                </button> 
            </div>   
        </div>
    )
}
