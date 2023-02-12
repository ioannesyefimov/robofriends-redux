import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiCall } from '../api/api'

const robotsSlice = createSlice({
    name: "robots",
    initialState: {
        robots: [],
        status: 'idle',
        error: null
    },
    reducers:{
       loadRobots (state, action){
        return {...state, robots: [action.payload]}
       }
    },
    extraReducers(builder) {
        builder
            .addCase(requestRobots.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(requestRobots.fulfilled, (state, action) => {
              return  {...state, status: 'succeeded', robots: action.payload}
                // console.log(action.payload, state.robots)
            })
            .addCase(requestRobots.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})
export const {loadRobots} = robotsSlice.actions
export default robotsSlice.reducer
// export const requestRobots = () => (dispatch, getState) => {
//     const stateBefore = getState()
//     dispatch({type: 'REQUEST_ROBOTS_PENDING'})
//     apiCall('https://jsonplaceholder.typicode.com/users')
//         .then(data => dispatch({type: "REQUEST_ROBOTS_SUCCESS", payload: data}))
//         .catch(err=> dispatch({type: "REQUEST_ROBOTS_FAILED", payload:err}))
// }

export const requestRobots = createAsyncThunk('robots/fetchRobots', async ()=>{
    const response = await apiCall('https://jsonplaceholder.typicode.com/users')
    return response
})