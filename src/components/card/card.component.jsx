import React from 'react';
import './card.styles.css';

/*this functional component is enclosed with () which also works as a direct return statement of the function. if you want you can write the function inside curly braces and then write the return statement enclosed in brackets () but its only required if you have to do some stuffs before the return statement  

Eg
//normal function
export const Test=(props)=>{
    sum = a + b
    return(sum)
}
//direct return function
export const Test=props=>(a+b)

*/
export const Card = (props)=>(
    <div  className="card-container">
     
        <img className="monsterImage" alt="monster" src={`https://robohash.org/${Math.random(10)}?set=set2&size=180x250`}></img>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>  
  
)