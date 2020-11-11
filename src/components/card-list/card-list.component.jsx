
// car list component should only concern about rendering and not the design

import React from 'react';

import './card-list.styles.css';

import {Card} from '../card/card.component';

export const CardList=(props)=>{
    console.log(props.children)
  return(<div className="card-list">
       
        {/* {console.log(props.monsters)} */}
        {   console.log(props.monsters._id)}
        {
            
            props.monsters.map(monsters=>
                <Card key={monsters.id} monster={monsters}/>)
        }
    </div>)
}
 