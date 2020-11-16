import React from 'react';
import './search-box.styles.css'
export const Search=() =>{
   
    return(<input
          className="search" 
          type="search" 
          placeholder="Search Monster" 
          onChange={ (e)=>
            {
              //setState function takes two parameters , one is the input function and the second is the callback function basically means the function to call after the execution of the input/first function
                this.setState({search:e.target.value})
              
              
            }
        } 
      />)

}