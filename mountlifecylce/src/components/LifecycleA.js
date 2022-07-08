import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vishwas'
      }
      console.log('LifecycleA Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedstatefromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA ComponentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldcomponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getsnapshotbefore update')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentdidupdate')
    }
    changeState=() =>{
        this.setState({
            name:'Accent'
        })
        }
    

  render() {
    
        console.log('LifecycleA render')
      return(
        <div> 
      <div>LifecycleA</div>
      <button onClick={this.changeState}>changeState</button>
      <LifecycleB/> 
      </div> 
          )
    
  }
}

export default LifecycleA