import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as SearchIcon } from '../icons/source_icons_search.svg'
import '../componentstyling/search.css'


const Search = props => {


    return ( 
        <form
            onSubmit={props.handleSubmit}
        >
        <div className="input-group m-3">
            <div className="form-outline">
                <input 
                    type="search" 
                    id="form1" 
                    className="form-control" 
                    placeholder={props.placcdeholder}
                    onChange={props.handleChange}
                />
                
            </div>
            <button 
                type="button"   
                className="btn btn-primary"
                onClick={props.handleSubmit}
            >
                <SearchIcon />
            </button>
        </div>
        </form>
        
       
     );
}
 
export default Search;