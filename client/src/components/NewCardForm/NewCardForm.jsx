import React from 'react';
import Input from '../factoryComponents/Input.jsx';
import Button from '../factoryComponents/Button.jsx';
import NewCardFormStyles from './NewCardFormStyles.css';
import ButtonStyles from '../factoryComponents/ButtonStyles.css';

const NewCardForm = (props) => {
  const { handleChange } = props;

  return (
      <div className={ NewCardFormStyles.container }>
          <div>
              <h2>Enter A New Diva</h2>
          </div>
          <form className={ NewCardFormStyles.form }>
              <div className={ NewCardFormStyles.inputContainer }>
                  <Input placeholder="Artist Name" className={ NewCardFormStyles.input } id="artistName" handleChange={ handleChange } />
              </div>
              <div className={ NewCardFormStyles.inputContainer }>
                  <Input placeholder="Picture URL" className={ NewCardFormStyles.input } id="picUrl" handleChange={ handleChange } />
              </div>
              <div className={ NewCardFormStyles.inputContainer }>
                  <Input placeholder="Fun Fact" className={ NewCardFormStyles.input } id="fact" handleChange={ handleChange } />
              </div>
              <div>
                  <Button className={ ButtonStyles.button } type="Submit" />
              </div>
          </form>
      </div>
  );
};

export default NewCardForm;
