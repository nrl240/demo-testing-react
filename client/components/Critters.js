import React from 'react';

const Critters = (props) => {
  console.log('props ---->', props)

  return (
    <div>
      <h1>{props.title}</h1>
      { props.critters.map((critter, index) => (
        <div key={index}>
          <h2>{critter.name}</h2>
          <img src={critter.image}/>
        </div>
      ))}
    </div>
  )
}

export default Critters;
