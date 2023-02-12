import React, {Component, useEffect} from "react";
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";


import '../containers/App.css';

 

    

const App = ()=> {
    
 
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //     }
    // }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({robots: users}))
        

    // }

        // const { robots, searchfield} = this.state
        // const filterRobots = robots.filter(robot => {
            // return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        // })
    return (
        <div className="App">
                <div className="tc">
                    <h1 className="">RoboFriends</h1>
                    <SearchBox />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList /> 
                        </ErrorBoundry>
                    </Scroll>
                </div>

        </div>
    )  
        

}   


export default App
