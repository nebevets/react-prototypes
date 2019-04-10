import React, { Component } from 'react';

class Field extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
    }
    render(){
      const name = this.name;
      return (
        <div>
          <label htmlFor={name}>
            {name} 
          </label>
          <input name={name} type="text" />
        </div>
      );
    }
}

export default Field;
