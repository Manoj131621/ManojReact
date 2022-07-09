import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vishwas'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Vishwas'
            })
        },2000)
    }
    render() {
        console.log('*********ParentComp********')
    return (
      <div>Parent component
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default Parentcomp