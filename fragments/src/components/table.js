import React from 'react'
import columns from './columns'

function table() {
  return (
    <table>
        <tbody>
            <tr>
               <columns/>
            </tr>
        </tbody>
    </table>
  )
}

export default table