import React from "react";
import { useDispatch, useSelector } from "react-redux";


import { loadRobots } from "./robots/requestRobots.js";
import {setSearchField} from './searchField/searchField.js'


const SearchBox = () => {
    const searchField = useSelector(state => state.searchField)
    const dispatch = useDispatch()

    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--moon-gray  bg-lightest-blue shadow-2 f3 "
             type="search" 
             placeholder="search robots" 
             onChange={(e)=> {
                dispatch(setSearchField(e.target.value))
                }} />
        </div>
    )
}

export default SearchBox