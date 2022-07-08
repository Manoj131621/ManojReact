import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:'Vishwas'
        }
        console.log('LifecycleB Constructor')
      }
      static getDerivedStateFromProps(props,state){
          console.log('LifecycleB getDerivedstatefromProps')
          return null
      }
      componentDidMount(){
          console.log('LifecycleB ComponentDidMount')
      }
      shouldComponentUpdate(){
        console.log('LifecycleB shouldcomponentupdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getsnapshotbefore update')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentdidupdate')
    }
    render() {
      
          console.log('LifecycleB render')
        return <div>LifecycleB</div>
      
    }
  }
  
  export default LifecycleB