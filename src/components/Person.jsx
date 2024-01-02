import React from 'react'

const Person = ({person}) => {
  return (
    <li>My name is {person.name}. I am {person.age} years old. I know {person.skill}.</li>
  )
}

export default Person