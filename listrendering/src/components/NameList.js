import React from 'react'
import Person from './Person'

function NameList() {
    // const names=['Manoj','Bruce','Diana']
    const persons = [
        {
            id: 1,
            name: 'Manoj',
            age: 24,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Bruce',
            age: 28,
            skill: 'Js'
        }
    ]
    const personList = persons.map(person => <Person key={person.name} person={person}/> )
    return <div>{personList}</div>
    //   return (
    //     <div>
    //         {
    //             names.map(name=><h2>{name}</h2> )
    //         }
    //     </div>
    //   )
}

export default NameList