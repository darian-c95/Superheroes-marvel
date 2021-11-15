import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import './styleHome.css';
import { AuthContext } from '../../auth/AuthContext'; 


export const HomeScreen = () => {
    
    const {state, dispatch} = useContext(AuthContext);  
    
    const [valores, setValores] = useState([]) 
    
     
    const durabilityArr = state.map(({durability}) => parseFloat(durability))
    const durabilityArrFilter = durabilityArr.filter(num => Number.isInteger(num) === true) 
        
    const durabilitySum = durabilityArrFilter.reduce((acumulador, n) => {
        return acumulador + n;
    }, 0); 


    const combatArr = state.map(({combat}) => parseFloat(combat)) 
    const combatArrFilter = combatArr.filter(num => Number.isInteger(num) === true) 
    
    const combatSum = combatArrFilter.reduce((acumulador, n) => {
        return acumulador + n;
    }, 0);
    
    
    const intelligenceArr = state.map(({intelligence}) => parseFloat(intelligence))
    const intelligeArrFilter = intelligenceArr.filter(num => Number.isInteger(num) === true) 

    const intelligenceSum = intelligeArrFilter.reduce((acumulador, n) => { 
        return acumulador + n; 
    }, 0);
    
    const powerArr = state.map(({power}) => parseFloat(power))
    const powerArrFilter = powerArr.filter(num => Number.isInteger(num) === true) 

    const powerSum = powerArrFilter.reduce((acumulador, n) => {
        return acumulador + n;
    }, 0);
    
    
    const speedArr = state.map(({speed}) => parseFloat(speed))
    const speedArrFilter = speedArr.filter(num => Number.isInteger(num) === true) 
    
    const speedSum = speedArrFilter.reduce((acumulador, n) => {
        return acumulador + n;
    }, 0);
    
    
    const strengthArr = state.map(({strength}) => parseFloat(strength))
    const strengthArrFilter = strengthArr.filter(num => Number.isInteger(num) === true) 
    
    const strengthSum = strengthArrFilter.reduce((acumulador, n) => {
        return acumulador + n;
    }, 0);
    
    
    const heightArr = state.map(({height}) => parseFloat(height))
    
    const heightSum = heightArr.reduce((acumulador, n) => {
        return acumulador + n;
    }, 0); 
    const averageHeight = Math.round(heightSum / heightArr.length || 0);
    
    
    const weightArr = state.map(({weight}) => parseFloat(weight))
    
    const weightSum = weightArr.reduce((acumulador, n) => {
        return acumulador + n;
    }, 0); 
    const averageWeight = Math.round(weightSum / weightArr.length || 0); 


    useEffect(() => {
        
        setValores([
            { name: 'Combat', value: combatSum },
            { name: 'Durability', value: durabilitySum },
            { name: 'Intelligence', value: intelligenceSum },
            { name: 'Power', value: powerSum },
            { name: 'Speed', value: speedSum },
            { name: 'Strength', value: strengthSum }, 
            { name: 'Average Height', value: averageHeight },
            { name: 'Average Weight', value: averageWeight }
        ].sort((firstItem, secondItem) =>  secondItem.value - firstItem.value));
        
    }, [state, combatSum, durabilitySum, intelligenceSum, powerSum, speedSum, strengthSum, averageHeight, averageWeight])
     
    
    const handleDelete = (heroId) => { 

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const action = {
                    type: 'delete',
                    payload: heroId
                }
                
                dispatch(action)

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          }) 

    }  


    return (
        <div className="animate__animated animate__fadeIn cont-home">
            <div className="text-center">
                <h2 className="text-center">Total</h2> 
                
                <div className="row"> 
                        {
                            valores.map((name) => ( 
                                <div className="progress" key={name.name}>
                                <p className="text-values col-lg-6">{name.name}</p>
                                    <div className="cont-flex col-lg-6">
                                        {/* <div className="progress-bar progress-bar-striped bg-success margin-barra" role="progressbar" style={{width: `${(name.value / 100) * 10}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="50">{name.value}</div> */}
                                        <div className="progress-bar bg-info margin-barra" role="progressbar" style={{width: `${(name.value / 100) * 10}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="50"></div>
                                        <p className="number-value">{name.value}</p>
                                    </div>
                                </div>
                                
                            ))
                        } 
                </div> 
            </div>

                        
            <h2 className="text-center">Your Team</h2>
            <div className=" col-8 row row-cols-1 row-cols-md-3 g-4 mb-5 cont-team"> 
                {
                    state.map(hero => (
                        <div  
                            className="col"   
                            key={hero.id}
                        >
                            <div className="card card-style">
                            
                            <img src={hero.url} className="card-img-top picture-style" alt={hero.name} />

                            <h5 className="text-center pt-2">{hero.name}</h5>  
                            <div className="cont-button">
                                <Link to={`./hero/${hero.name}`}>
                                    <button className="btn btn-primary">More</button>
                                </Link>

                                <button
                                    className="btn btn-danger btn-delete" //col-lg-12 col-md-12 col-sm-12
                                    onClick={() => handleDelete(hero.id)}
                                    >
                                    Delete
                                </button> 
                            </div>


                            </div>
                        </div>
                    ))
                    
                }  
            </div> 
        </div>
    )
}

  