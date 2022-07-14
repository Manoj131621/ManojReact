import React, { useContext } from 'react'
import { Channelcontext, Usercontext } from '../App'
import ComponentF from './ComponentF'

function ComponentE() {
    const user =useContext(Usercontext)
    const channel=useContext(Channelcontext)
  return (
    <div>
        {user} - {channel}
        {/* <ComponentF/> */}
    </div>
  )
}

export default ComponentE