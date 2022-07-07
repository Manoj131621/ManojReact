import React, { Component } from 'react'

export class ClassClick extends Component {
  clickHandler(){
    console.log("class component clicked")
  }
  
    render() {
    return (
      <div>
        <button onClick={this.clickHandler}>class Click</button>
      </div>
    )
  }
}

export default ClassClick