const Card = require('../database/models');

let lastId = 49;

module.exports = {

  // controllers for user interactions

  // gets next 10 cards/documents from the database
  getNextCards: (req, res) => {
    const { id } = req.query;
    const lowerBound = parseInt(id);
    const upperBound = lowerBound + 9;

    let firstGet;

    Card.find({ id: { $gte: lowerBound, $lte: upperBound } })

    // if a card has been deleted from the database - make sure getNextCards still returns 10 cards
      .then((cards) => {
        if (cards.length < 10) {
          firstGet = cards;
          const missingCards = 10 - cards.length;
          const lastIdFound = cards[cards.length - 1].id + 1;
          Card.find({ id: { $gte: lastIdFound, $lt: lastIdFound + missingCards } })
            .then(newCards => res.status(200).send(firstGet.concat(newCards)));
        } else if (cards.length === 10) {
          res.status(200).send(cards);
        } else {
          res.status(404).send('Error getting 10 new cards');
        }
      })
      .catch(err => console.log('Error getting cards', err));
  },
  // posts a new card/document to the database
  postNewCard: (req, res) => {
    const { artistName, picUrl, fact } = req.body;
    lastId += 1;

    Card.create({
      id: lastId, artistName, picUrl, fact,
    })
      .then(card => res.status(200).send(card))
      .catch(err => console.log('Error creating new card', err));
  },
  // deletes a card/document from the database
  deleteCard: (req, res) => {
    const { id } = req.query;

    Card.deleteOne({ id })
      .then(() => res.status(202).send('Success deleting artist'))
      .catch(err => console.log('Error deleting card', err));
  },
};
