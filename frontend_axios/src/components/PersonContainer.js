import React from 'react'
import Person from './Person'

export default function PersonContainer(props){
  console.log(props);
  const people = props.people.map( person => <Person
          key={person.id}
          name={person.name}
          dob={person.DOB}
          image_url={person.image_url}
          bio={person.bio}

          />)
  return(
    <h1>
      {people}
    </h1>
  )
}
