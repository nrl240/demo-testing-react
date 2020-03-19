/* eslint-disable react/prop-types */
import React from 'react';

const Navbar = (props) => {
  const { selectCritters, critterCategories } = props

  return (
    <div>
    { critterCategories.map((category, index) => (
        <button
          key={index}
          id={category}
          onClick={() => selectCritters(category)}
        >
            {category}
        </button>
    ))}
    </div>
  )
};

export default Navbar;
