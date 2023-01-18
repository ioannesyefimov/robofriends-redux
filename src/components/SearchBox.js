import React from "react";

const SearchBox = ({searchChange}) => {


    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--moon-gray  bg-lightest-blue shadow-2 f3 "
             type="search" 
             placeholder="search robots" 
             onChange={searchChange} />

        </div>
    )
}

export default SearchBox