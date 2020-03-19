import React from 'react';

const Critters = (props) => {
  const { critters, title } = props

  return (
    <div>
      <h1>{title}</h1>
      { critters.map((critter, index) => (
        <div key={index}>
          <h2>{critter.name}</h2>
          <img src={critters.image}/>
        </div>
      ))}
    </div>
  )
}

export default Critters;
