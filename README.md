# Application Description and Instructions (Updated)

## Application Description

An application utilizing Spotify's API that allows the user to discover their favorite musical artist.  The user can browse through singer cards, delete a card, or create their own that is added to the deck.

## Additional notes

The deployed version of this application contains a database that has been seeded with fifty documents from Spotify's API.

Actions taken to access Spotify's API:

1. Registering the application with Spotify's developer platform.
2. Following Spotify's Client Credentials authorization flow.
3. Submitting a POST request to Spotify's token endpoint to receive a token.
4. Submitting a GET request to Spotify's artists endpoint to receive an array of fifty artist records.

Users that wish to add a card should add a url for a 320 x 320 sized picture for best image quality.

List of suggested URL's:

1. BTS - http://pa1.narvii.com/6487/cf09be958daaa85dd1aa2a44aa63bf0fd2de5ee9_00.gif
2. Childish Gambino - https://media.pitchfork.com/photos/5929a4ce13d1975652138dc8/1:1/w_320/a61ee51a.jpg
3. Billie Holliday - http://b2b.hologramusa.com/wp-content/uploads/2015/07/BillieHoliday-320x320.jpg 
4. Gemini Rising - https://is3-ssl.mzstatic.com/image/thumb/Music117/v4/eb/49/fe/eb49fe21-1be4-567d-9cf3-8371c20c3a85/cover.jpg/320x0w.jpg
5. Carlos Santana - https://i.pinimg.com/originals/11/24/ab/1124abb9c6cc32d4b1c78b83e701a994.jpg
6. Jennifer Lopez - https://www.aceshowbiz.com/images/photo/jennifer_lopez.jpg
7. Britney Spears - https://i.pinimg.com/originals/28/dd/7e/28dd7e8d3d37a72c3a7461aaf9eb65f5.jpg
8. Nina Simone - https://musicofmymind14.files.wordpress.com/2013/02/simone.jpg?w=940
9. Christina Aguilera - http://3.bp.blogspot.com/_V8imPXASp68/SNLDXzg7ySI/AAAAAAAABJ0/kHwpph096lY/s320/ChristinaAguilera-IComeUndone2008.jpg 
10. Alessia Cara - https://media.pitchfork.com/photos/5929b0f1b1335d7bf169a1d0/1:1/w_320/bead750c.jpg




# Code Test: 'Factoid Cards'

Please read this whole README before starting.

## Overall Requirements
Create an application to feature one of your extracurricular interests. Select an interest that has items of alike members (Stamps, Books, Songs, etc). Please use this as a chance to showcase your personality by selecting a category of things you enjoy.

The application should have a frontend for a web browser and a backend in node.js, use whatever libraries you are most familiar with otherwise.

The point of this test is to understand how you approach a technical problem. The way you code is just as important as your solution.

We expect this test to take you about *6 - 10 hours*. Given that most people are busy, We want to hear back from you *within 72 hours of starting this test*.

#### As soon as you begin:
* [ ] Fork this repository into a public repository on your github/etc account

#### While working on this, please:
* [ ] Commit early and often. I'll likely be following along with your progress.

#### Upon completing this, please email to us:
* [ ] A link to your git repository such that we may view your code.
* [ ] A link to somewhere where we may interact with a demo of your finished product

## Front End Requirements

The User Interface should be made out of a MVVM or MVC style frontend technology, using an asynchronous transport technology to talk to your backend.

#### The user interface should present a card like entry containing
* [ ] A small picture of the item
* [ ] A description of the item
* [ ] A fun factoid for the item

#### Interactions
* [ ] The user should be able to dismiss the currently presented card, making it disappear and presenting the next card in the stack. (Think of swiping in Tinder)
* [ ] The user should be able to create their own factoid to be added to the fact stack.
* [ ] The user should be able to remove a factoid from the fact stack.

## Backend Requirements

The Backend should be node.js with whatever middlewares you'd like to use.

#### Interactions to support
* [ ] Please provide a RESTful backend for the CRUDL of factoids
* [ ] Factoids should be transported to the UI via JSON
* [ ] Factoids should be stored in some sort of SQL/NoSQL/Flat File on the backend

## BONUS

Consider adding some improvements to what you've made to really showcase your strengths.

### Suggestions for improvements
* [ ] Integrate this with an external Service or API (Pokemon API FTW)
* [ ] Make it work on Mobile device sizes. 
* [ ] Write a test or two for your code.
* [ ] Add a lint file and make sure your code is linted. 
* [ ] Add CD/CI to your project to auto-deploy it
* [ ] Edit this ReadMe with new suggestions for how to improve this code test

## Closing Thoughts

Every developer on our team has completed this code challenge or the [platform code challenge](https://github.com/ultamatt/linuxtest), so show us what you can do! We're excited to see what kind of contributions you could make to our team. 
