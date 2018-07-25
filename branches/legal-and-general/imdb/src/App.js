/**
 * Basic listing of IMDB Top 12 films as of 2018 built ontop of the React Start appliaction outline https://reactjs.org/docs/add-react-to-a-new-app.html
 * @author John Jeeves <johnnyvibrant@gmail.com>
 * @date 04/03/2018
 * @version v1
 * 
 */


import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';


/**
 * @brief Pullin in a JSON feed of the Top 12 films from IMDB as of 2018
 * @details [long description]
 * 
 */
class App extends Component {


  /**
   * @brief Setup the state object when started
   * 
   * @param  Eeact props
   */
  constructor(props) {

    super(props);
    this.state = {
      //this is a static JSON that was originally from http://www.myapifilms.com/
      topTenFilmsDataUri: './data/top-ten-films.json',
      //How many films to actually retur form the entire list
      resultLimit: 12,
      //Use this to populate the film array and pass around object
      topTenFilmsData: [],
      //Static title to output on the page
      galleryTitle: 'Top Ten Films IMDB 2018'
    }

  }





  /**
   * @brief Before rendering the layout, fetch the JSON from an external url, when more development time and testing this could fetch from http://www.myapifilms.com/ or a local server side script that could cache the results
   */
  componentDidMount() {

     fetch(this.state.topTenFilmsDataUri, {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((j) => {
      //limit the amount of films to actually list
      const filmData = _.slice(j.data.movies, 0, this.state.resultLimit);
      this.setState ({
        topTenFilmsData: filmData
        });

    
    })

  }



  /**
   * @brief Create each film listing element as a link to the IMDB, showing a title, short synposis, poster and rating 
   * 
   * @param  [array] Each film array item
   */
  createFilmListItem(film) {
      
      return (

          <li key={film.idIMDB}>
            <a href={film.urlIMDB}>
            <img src={film.urlPoster} alt={film.title}/>
              <h4>{film.title}</h4>
              <h5>Rating: <strong>{film.rating}</strong></h5>
              <h5>Release Date: <strong>{film.year}</strong></h5>
              <p>{film.plot}</p>
              </a>
          </li>

        )
  }

  /**
   * @brief Rerturn the page layout to the React renderer
   */
  render() {
    return (
      <main className="main">
        <h1>{this.state.galleryTitle}</h1>
        <nav><ul>{_.map(this.state.topTenFilmsData, this.createFilmListItem)}</ul></nav>
      </main>
      )
  }



}

export default App;
