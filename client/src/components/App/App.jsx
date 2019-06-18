import React, { Component } from 'react';
import axios from 'axios';
import DivaCard from '../DivaCard/DivaCard.jsx';
import NewCardForm from '../NewCardForm/NewCardForm.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import AppStyles from './AppStyles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'deck',
      currentCardIndex: 0,
      featuredCards: [],
      currentCard: {},
      artistName: '',
      picUrl: '',
      fact: '',
    };
    this.getMoreArtists = this.getMoreArtists.bind(this);
    this.viewNextArtist = this.viewNextArtist.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewArtist = this.addNewArtist.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.getMoreArtists();
  }

  getMoreArtists() {  
    console.log('INSIDE OF GET MORE ARTISTS!!!!!!!!!!!');

    let newId = 0;

    if (this.state.currentCard.id) {
      newId = this.state.currentCard.id;
    }

    axios
      .get('/api/cards', { params: { id: newId + 1 } })
      .then(({ data }) => {
        this.setState({
          featuredCards: data,
          currentCard: data[0],
          currentCardIndex: 0,
        });
      })
      .catch(err => console.log('Error getting featuredCards', err));
  }

  viewNextArtist() {
    const { currentCardIndex, featuredCards } = this.state;

    if (currentCardIndex === 9) {
      this.getMoreArtists();
      return;
    }
    this.setState({
      currentCardIndex: currentCardIndex + 1,
    }, this.setState({
      currentCard: featuredCards[currentCardIndex],
    }));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  addNewArtist(e) {
    e.preventDefault();
    const { artistName, picUrl, fact } = this.state;
    let newArtist;
    axios
      .post('/api/cards', { artistName, picUrl, fact })
      .then(({ data }) => {
        this.setState({
          currentView: 'deck',
          currentCard: data
        });
      })
      .catch(err => console.log('Error posting a new card', err));
  }

  deleteCard() {
    const { id } = this.state.currentCard;

    axios
      .delete('/api/cards', { params: { id } })
      .then(() => this.viewNextArtist())
      .catch(err => console.log('Error deleting from the database', err));
  }

  renderForm() {
    this.setState({ currentView: 'form' });
  }

  render() {
    const { currentCard, currentCardIndex, currentView } = this.state;

    return (
        <div className={ AppStyles.container }>
            <div className={ AppStyles.title }>
                <h1>DivaDeck</h1>
            </div>
            { currentView === 'deck'
              ? <DivaCard
                currentCard={ currentCard }
                index={ currentCardIndex }
              />
              : <NewCardForm
                handleChange={ this.handleInputChange }
                addNewArtist={ this.addNewArtist }
                />
            }
            <Navigation
              viewNextArtist={ this.viewNextArtist }
              renderForm={ this.renderForm }
              deleteCard={ this.deleteCard }
            />
        </div>
    );
  }
}

export default App;
