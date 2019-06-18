import React from 'react';
import ButtonStyles from './ButtonStyles.css';

const Button = props => {
  const { viewNextArtist, type } = props;

  return (
      <div className={ ButtonStyles.container }>
          <button className={ ButtonStyles.button } onClick={ viewNextArtist }>{ type }</button>
      </div>
  );
};

export default Button;
