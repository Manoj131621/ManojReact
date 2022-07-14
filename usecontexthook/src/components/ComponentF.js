import React from 'react'
import {Usercontext,Channelcontext} from '../App'

function ComponentF() {
  return (
    <div>
        <Usercontext.Consumer>
            {
                user => {
                    return(
                        <Channelcontext.Consumer>
                            {
                                channel =>{
                                    return(
                                        <div>
                                            User context value {user},Channel context value {channel} 
                                        </div>
                                    )
                                }
                            }
                        </Channelcontext.Consumer>
                    )
                }
            }
        </Usercontext.Consumer>
            <Usercontext.Consumer>
                {
                    user=>{
                        return <div>User context value {user}</div>
                    }
                }
            </Usercontext.Consumer>
        </div>
  )
}

export default ComponentF