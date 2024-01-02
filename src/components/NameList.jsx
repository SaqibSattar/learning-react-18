import React from 'react'
import Person from './Person';

const NameList = () => {
    const persons = [{
        id: 1,
        name: 'User1',
        age: 20,
        skill: 'React'
    },
    {
        id: 2,
        name: 'User2',
        age: 25,
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'User3',
        age: 30,
        skill: 'Node'
    },
    {
        id: 4,
        name: 'User4',
        age: 40,
        skill: 'Javascript'
    }];

    const personsList = persons.map((person) => <Person key={person.id} person={person} />)
  return (
    <div>
    {personsList}
    </div>
  )
}

export default NameList