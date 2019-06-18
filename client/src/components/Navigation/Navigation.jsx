import React from 'react';
import NavigationStyles from './NavigationStyles.css';
import Button from '../factoryComponents/Button.jsx';

const Navigation = props => {
  return (
      <div className={ NavigationStyles.container }>
          <Button type="Delete" />
          <Button type="Add Your Own Diva" />
          <Button type="Next" />
      </div>
  );
};

export default Navigation;
