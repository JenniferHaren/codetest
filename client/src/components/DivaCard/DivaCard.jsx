import React from 'react';
import DivaCardStyles from './DivaCardStyles.css';

const DivaCard = (props) => {
  const { card, name, img, fact } = DivaCardStyles;

  return (
      <div className={ card }>
          <div className={ name }>Whitney Houston</div>
          <img className={ img } src="https://i.scdn.co/image/47a663cdb51106bf7f77810d9b4794319aebe969" alt="artist" />
          <div className={ fact }>Whitney Houston is a pop artist with 4166157 followers and a popularity rating of 79.</div>
      </div>
  );
};

export default DivaCard;
