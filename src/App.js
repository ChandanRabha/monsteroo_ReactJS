
import React, {Component} from 'react';
import './App.css';
//importing a class component named users
//import Users from './components/users/users';
//importing functional component cardlist
import {CardList} from './components/card-list/card-list.component';


class App extends Component {
  constructor(){
    super ();
    //the object state stores data of this particular component. Every component has its own state object
    this.state = {
      search:"",
      monsters:[]
    }
  }

  componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(alldata=>alldata.json())
    .then(mainData=>this.setState({monsters:mainData}))
  }
   
   Searched(e){
     this.setState({search:e.target.value},()=>console.log(this.state))
  }

  render(){
  return (
    <div className="App">
      {/* e is an event , e.target returns the html element triggering the event */}
      <input 
          type="search" 
          placeholder="Search Monster" 
          onChange={(e)=>
            {
              //setState function takes two parameters , one is the input function and the second is the callback function basically means the function to call after the execution of the input/first function
               this.Searched(e)
              
            }
        } 
      />
      <CardList monsters={this.state.monsters}>
      </CardList>
    </div>
  );
}
}
export default App;