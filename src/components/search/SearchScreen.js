import React from 'react' 
import queryString  from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm' 

import './SearchScreenStyle.css';
import { Heroes } from '../../data/heroes'


export const SearchScreen = ({history}) => {

    
    const location = useLocation();
    const {q = 'batman'} = queryString.parse(location.search);  
    
    const [{searchText}, handleInputChange] = useForm({
        searchText: q
    }) 
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }  
    
    return (
        <div className="animate__animated animate__fadeIn">  
            <div className="row adasdss">

                <div className="col-12 mt-5"> 

                    <form className="form-style" onSubmit={handleSearch}>

                        <div className="input-container">
                            <input
                                type="text"
                                name="searchText" 
                                autoComplete="off"
                                value={searchText}
                                placeholder="Find your hero"
                                className="form-control"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary m-0 mt-2"
                                onClick={handleSearch}
                            >
                                Search 
                            </button>
                        </div>
                    </form>

            </div>
                <hr className="hr-style"/>
                <Heroes hero={q} />  
            </div> 
        </div>
    )
}
