import React from 'react';
import NavigationStyles from './NavigationStyles.css';
import Button from '../factoryComponents/Button.jsx';

const Navigation = (props) => {
  const { viewNextArtist } = props;

  console.log('THIS IS VIEW NEXT ARTIST----------', viewNextArtist);

  return (
      <div className={ NavigationStyles.container }>
          <Button type="Delete" viewNextArtist={ viewNextArtist } />
          <Button type="Add Your Own Diva" viewNextArtist={ viewNextArtist } />
          <Button type="Next" viewNextArtist={ viewNextArtist } />
      </div>
  );
};

export default Navigation;
