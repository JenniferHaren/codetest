import React from 'react';
import DivaCardStyles from './DivaCardStyles.css';

const DivaCard = (props) => {
  const { currentView } = props;
  const { card, name, img, fact } = DivaCardStyles;

  return (
      <div className={ card }>
          <div className={ name }>{currentView.artistName}</div>
          <img className={ img } src={ currentView.picUrl } alt="artist" />
          <div className={ fact }>{currentView.fact}</div>
      </div>
  );
};

export default DivaCard;
