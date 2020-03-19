/* eslint-disable react/prop-types */
import React from 'react';

const Navbar = (props) => {
  const critterCategories = props.critterCategories
  const selectCritters = props.selectCritters
  console.log('critterCategories ---->', critterCategories)

  return (
    <div>
      { critterCategories.map((category, index) => (
        <button
          id={category}
          onClick={() => selectCritters(category)}
          key={index}
        >
          {category}
        </button>
      ))
      }
    </div>
  )
};

export default Navbar;
