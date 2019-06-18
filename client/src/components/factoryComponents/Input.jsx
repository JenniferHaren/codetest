import React from 'react';

const Input = (props) => {
  const { id, handleChange } = props;

  return (
      <div>
          <input type="text" id={ id } onChange={ handleChange } />
      </div>
  );
};

export default Input;
