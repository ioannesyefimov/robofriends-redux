import {createSlice } from '@reduxjs/toolkit'

const searchFieldSlice = createSlice({
    name: 'searchField',
    initialState: {
        searchField: ''
    },
    reducers: {
        setSearchField(state, action={}) {
            return {...state, searchField: action.payload}
        }
    }
})

export const {setSearchField} = searchFieldSlice.actions
export default searchFieldSlice.reducer