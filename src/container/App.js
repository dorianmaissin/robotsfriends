import React, {Component} from 'react';
import { robots } from '../components/RobotList';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import 'tachyons';
import './App.css';
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
           return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='tc'>Robots Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                  <CardList robots={filterRobots} />  
                </Scroll>
            </div>
            )  
    }
}

export default App