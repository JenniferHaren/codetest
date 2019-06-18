import React from 'react';
import NavigationStyles from './NavigationStyles.css';
import Button from '../factoryComponents/Button.jsx';

const Navigation = (props) => {
  const { viewNextArtist, renderForm, deleteCard } = props;

  return (
      <div className={ NavigationStyles.container }>
          <Button type="Delete" onClick={ deleteCard } />
          <Button type="Add Your Own Diva" onClick={ renderForm } />
          <Button type="Next" onClick={ viewNextArtist } />
      </div>
  );
};

export default Navigation;
