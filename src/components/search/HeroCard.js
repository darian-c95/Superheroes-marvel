import React, { useContext, useEffect } from 'react'; 
import Swal from 'sweetalert2';

import './styleHeroCard.css'; 
import { AuthContext } from '../../auth/AuthContext';  


export const HeroCard = ({
    name, 
    hairColor, 
    eyeColor,
    alias, 
    id, 
    url, 
    work, 
    alignment,
    height, 
    weight,
    combat,
    durability, 
    intelligence,
    power,
    speed,
    strength
    }) => {
     

    const {state, dispatch} = useContext(AuthContext);   
    
        
    const handleAdd = (heroId, alignment) => {   

        const mapHero = () => {
            return state.map(hero => hero.id) 
        }  
 
        const filter = (alignment) => {
            return state.filter(hero => hero.alignment === alignment); 
        } 
 

        if (mapHero().some(x => x === heroId) === false) {

            if ((alignment === 'good' && filter('good').length <= 2) || (alignment === 'bad' && filter('bad').length <= 2)) {  
                    
                const newHero = { 
                    id: heroId,
                    name: name,
                    url: url,
                    alignment: alignment,
                    combat: combat,
                    durability: durability,
                    intelligence: intelligence,
                    power: power,
                    speed: speed,
                    strength: strength, 
                    work: work,
                    alias: alias,
                    eyeColor: eyeColor,
                    hairColor: hairColor,
                    height: height,
                    weight: weight
                } 
                
                const action = {
                    type: 'add',
                    payload: newHero
                }
                
                dispatch(action) 

                Swal.fire('Success', 'New hero added', 'success');
    
            } else if(alignment === 'neutral') {

                Swal.fire('Error', 'Neutral heroes can not be added', 'error');
                
            } else {
                Swal.fire('Error', 'Reach your maximum allowed', 'error');
            }

        } else {
            Swal.fire('Error', 'Can not be added to the same hero', 'error');
        }

    } 

    
    useEffect(() => {
        
        localStorage.setItem('heroes', JSON.stringify(state))
        
    }, [state])
    
    
    return (
        
        
            <div className="col-md-4">
                
                <div className="card const-style">
                <img 
                    src={url}
                    alt={name}  
                    className="card-img-top"
                /> 
                <h1 className="title-style">{name}</h1>
                <div className="container-add-alignment">
                    <p>Alignment: {alignment}</p> 
                    <button 
                        className="btn btn-primary col-lg-6 col-md-6"
                        onClick={() => handleAdd(id, alignment)} 
                    >
                        Add
                    </button> 
                </div>
            </div>
            </div>  


    )
}
 

/*

<div className="row">
    <div className="col-md-12 text-center">
        <h1>{name}</h1> 
        <p>Alignment: {alignment}</p>  
        <img 
            src={url}
            alt={name} 
            className={`${alignment === 'good' && 'isGood'}` || `${alignment === 'bad' && 'isBad'}`}
            
        />
        <button 
            className="btn btn-primary col-lg-8 col-md-6 mb-4 mt-4"
            onClick={() => handleAdd(id, alignment)} 
        >
            Add
        </button>
            <hr /> 
    </div>  
</div>

*/


/*

<div className="row row-cols-1 row-cols-md-3 g-4"> 
            <div className="col">
                
                <div className="card">
                <img 
                    src={url}
                    alt={name}  
                    className="card-img-top"
                /> 
                <h1>{name}</h1>
                    <button 
                        className="btn btn-primary"
                        onClick={() => handleAdd(id, alignment)} 
                    >
                        Add
                    </button> 
            </div>
            </div> 
        </div> 

*/
