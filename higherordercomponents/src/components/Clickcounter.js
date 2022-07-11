import React, { Component } from 'react'
import Updatedcomponent from './Withcounter'

export class Clickcounter extends Component {
    
  render() {
    const {count,incrementCount} = this.props
    return (
    <button onClick={incrementCount}>
      {this.props.name} Clicked {count} times
      </button>
    )
      
    
  }
}

export default Updatedcomponent(Clickcounter)