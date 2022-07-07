import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Done Succeddfully')
    }
  return (
    <div>
        <button onClick={clickHandler}>clickme</button>
    </div>
  )
}

export default FunctionClick