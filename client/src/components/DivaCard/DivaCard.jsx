import React from 'react';
import DivaCardStyles from './DivaCardStyles.css';

const DivaCard = (props) => {
  const { currentCard, currentCardIndex } = props;
  const { card, name, img, fact } = DivaCardStyles;

  return (
      <div className={ card }>
          <div className={ name }>{currentCard.artistName}</div>
          <img className={ img } src={ currentCard.picUrl } alt="artist" />
          <div className={ fact }>{currentCard.fact}</div>
      </div>
  );
};

export default DivaCard;
