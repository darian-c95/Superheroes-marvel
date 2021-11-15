import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { useLocation } from 'react-router';
import queryString  from 'query-string';
import Swal from 'sweetalert2'


import { HeroCard } from '../components/search/HeroCard'; 


export const Heroes = () => {
    
    const location = useLocation();
    const {q = 'batman'} = queryString.parse(location.search);  
    
    
    const [state, setState] = useState([])

    useEffect(() => {
        obtenerHeroes(q);
    }, [q])
    

    const obtenerHeroes = (q) => { 
        // try {
            axios({
                method:"GET",
                url:`https://www.superheroapi.com/api.php/3798679520259337/search/${q}`
            }).then(res => {
                let heroesData = res.data.results;
                const heroAlone = heroesData.map(({powerstats, appearance, work, name, biography, id, image: {url}}) => {
                    return {
                        id: id,
                        url: url,
                        combat: powerstats.combat,
                        durability: powerstats.durability,
                        intelligence: powerstats.intelligence,
                        power: powerstats.power,
                        speed: powerstats.speed,
                        strength: powerstats.strength,
                        eyeColor: appearance['eye-color'],
                        hairColor: appearance['hair-color'],
                        height: appearance.height[1],
                        weight: appearance.weight[1],
                        work: work.base,
                        name: name,
                        alias: biography.aliases,
                        alignment: biography.alignment
                    }
                })

                setState(heroAlone)

            }).catch(e => {
                console.log(e);
                Swal.fire('Error', 'There is no hero by that name', 'error');
            })
    } 

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center">
            {
                state.map(info => (
                <HeroCard  
                    key={info.id}
                    {...info} 
                /> 
                ))    
            } 
        </div>
    )
} 