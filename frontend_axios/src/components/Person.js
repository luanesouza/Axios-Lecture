import React from 'react'

export default function Person(props){
  const { name, bio, dob, image_url } = props
  return(
    <section className='person-info'>
      <img src={image_url} alt={`${name}`}/>
      <section className='name-dob'>
        <h1>{name}</h1>
        <p>{dob}</p>
        <p>{bio}</p>
      </section>
    </section>
  )
}
