import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return <h1>Welcome {this.props.name} a.k.a {this.props.Heroname}</h1>
  }
}   

export default Welcome