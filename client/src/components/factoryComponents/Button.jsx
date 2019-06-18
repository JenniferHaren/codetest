import React from 'react';
import ButtonStyles from './ButtonStyles.css';

const Button = props => {
  return (
      <div className={ ButtonStyles.container }>
          <button className={ ButtonStyles.button }>{ props.type }</button>
      </div>
  );
};

export default Button;
