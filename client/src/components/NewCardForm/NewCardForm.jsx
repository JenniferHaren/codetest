import React from 'react';
import Input from '../factoryComponents/Input.jsx';
import NewCardFormStyles from './NewCardFormStyles.css';

const NewCardForm = (props) => {
  const { handleChange } = props;

  return (
      <div className={NewCardFormStyles.container}>
          <div>
              <h2>Enter A New Diva</h2>
          </div>
          <form>
              <label>
              Artist Name:
                  <Input id="artistName" handleChange={ handleChange } />
              </label>
              <label>
                Picture URL:
                  <Input id="picUrl" handleChange={ handleChange } />
              </label>
              <label>
                Fun Fact:
                  <Input id="fact" handleChange={ handleChange } />
              </label>
          </form>
      </div>
  );
};

export default NewCardForm;
