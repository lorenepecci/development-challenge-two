import React from 'react'

export default function Card (props ) {
  const { name, birthdate, email, address } = props.item;
  return (
    <div>
      <h1>{name}</h1>
      <p>{ birthdate }</p>
      <p>{ email }</p>
      <p>{address}</p>
    </div>
  )
}
