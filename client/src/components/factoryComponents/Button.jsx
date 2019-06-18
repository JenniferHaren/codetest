import React from 'react';
import ButtonStyles from './ButtonStyles.css';

const Button = props => {
  const { onClick, type } = props;

  return (
      <div className={ ButtonStyles.container }>
          <button className={ ButtonStyles.button } onClick={ onClick }>{ type }</button>
      </div>
  );
};

export default Button;
