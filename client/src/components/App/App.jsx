import React, { Component } from 'react';
import axios from 'axios';
import DivaCard from '../DivaCard/DivaCard.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import AppStyles from './AppStyles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      featuredCards: [],
      currentCard: {},
      newCardName: '',
      newPicUrl: '',
      newFact: '',
    };
    this.getMoreArtists = this.getMoreArtists.bind(this);
  }

  componentDidMount() {
    this.getMoreArtists();
  }

  getMoreArtists() {
    axios
      .get('/api/cards', { params: { id: 1 } })
      .then(({ data }) => {
        this.setState({
          featuredCards: data,
          currentView: data[0],
        });
      })
      .catch(err => console.log('Error getting featuredCards', err));
  }

  render() {
    const { currentView } = this.state;

    return (
        <div className={ AppStyles.container }>
            <div className={ AppStyles.title }>
                <h1>DivaDeck</h1>
            </div>
            <DivaCard currentView={ currentView } />
            <Navigation />
        </div>
    );
  }
}

export default App;
