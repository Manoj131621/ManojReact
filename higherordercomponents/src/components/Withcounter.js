import React from 'react'

const Updatedcomponent = (Originalcomponent) => {
    class Newcomponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          incrementCount = () => {
              this.setState(prevState=>{
                      return{count:prevState.count+1}
              })
          }
        render(){
            return( <Originalcomponent 
            count={this.state.count} 
            incrementCount={this.incrementCount}
            {...this.props} />)
        }
    }
    return Newcomponent
}
export default Updatedcomponent