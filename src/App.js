
import React, {Component} from 'react';
import './App.css';
//importing functional component cardlist
import {CardList} from './components/card-list/card-list.component';
import {Search} from './components/search-box/search-box.component';


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
   
 

  render(){
    const {monsters,search} =this.state;
    const filteredMonsters=monsters.filter(monster=>
      monster.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredMonsters)

  return (
    <div className="App">
      <h1>Monsters Roblox
      </h1>
      {/* e is an event , e.target returns the html element triggering the event */}
      <Search  placeholder="Search Monster" handleChange={e=> this.setState({search:e.target.value})} />
      <CardList monsters={filteredMonsters} />

    </div>
  );
}
}
export default App;
