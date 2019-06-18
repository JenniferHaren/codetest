import React, { Component } from 'react';
import axios from 'axios';
import DivaCard from '../DivaCard/DivaCard.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import AppStyles from './AppStyles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCardIndex: 0,
      featuredCards: [],
      currentCard: {},
      newCardName: '',
      newPicUrl: '',
      newFact: '',
    };
    this.getMoreArtists = this.getMoreArtists.bind(this);
    this.viewNextArtist = this.viewNextArtist.bind(this);
  }

  componentDidMount() {
    this.getMoreArtists();
  }

  getMoreArtists() {
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
    if (this.state.currentCardIndex === 9) {
      this.getMoreArtists();
      return;
    } else {
      this.setState({
        currentCardIndex: this.state.currentCardIndex + 1,
      }, this.setState({
        currentCard: this.state.featuredCards[this.state.currentCardIndex],
      }));
    }
  }

  render() {
    const { currentCard, currentCardIndex, viewNextArtist } = this.state;

    return (
        <div className={ AppStyles.container }>
            <div className={ AppStyles.title }>
                <h1>DivaDeck</h1>
            </div>
            <DivaCard
              currentCard={ currentCard }
              index={ currentCardIndex }
            />
            <Navigation
              viewNextArtist={ this.viewNextArtist }
            />
        </div>
    );
  }
}

export default App;
