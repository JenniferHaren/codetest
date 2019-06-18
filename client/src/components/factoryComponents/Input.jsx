import React from 'react';

const Input = (props) => {
  const { id, handleChange, className, placeholder } = props;

  return (
      <div>
          <input placeholder={ placeholder } className={ className } type="text" id={ id } onChange={ handleChange } />
      </div>
  );
};

export default Input;
