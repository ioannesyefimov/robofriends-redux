import React, {useEffect} from "react";
import Card from './Card'
import { useDispatch, useSelector } from "react-redux";

import {loadRobots, requestRobots} from '../components/robots/requestRobots'

const CardList = () => {

    const dispatch = useDispatch()
    const searchField = useSelector(state=> state.searchField.searchField)
    const robots = useSelector(state=> state.robots.robots) 
    const robotsStatus = useSelector(state=> state.robots.status)
    const error = useSelector(state=> state.robots.error)
    let filteredRobots = robots.filter(robot=> {return robot.name.toLowerCase().includes(searchField.toLowerCase())})

    useEffect(()=>{
        if(robotsStatus === 'idle'){
            dispatch(requestRobots())
        } 
       
   
    },[robotsStatus,dispatch, searchField])
    useEffect(()=>{
        console.log(searchField.toLowerCase())
    },[searchField])


    let content
    if(robotsStatus === 'loading'){
        content = <h1>Loading...</h1>
    } else if (robotsStatus === 'succeeded'){
          content = filteredRobots.map((user, i) => {
              return (
                  <Card
                      key={user.id}
                      id={robots[i].id} 
                      name={robots[i].name}
                      email={robots[i].email} 
                  />
                  )
          })

        // } else if(robots){
  

        
    } else if (robotsStatus === 'failed'){
        content = <div>{error}</div>
    }

    return (
        <div className="robots-container">
            {content}
        </div>
    );
}

export default CardList; 