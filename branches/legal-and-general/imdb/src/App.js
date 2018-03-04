

import React, { Component } from 'react';
import _ from 'lodash';
//import topTenFilmsData from './data/top-ten-films.json';
import './App.css';



class App extends Component {


  /**
   * @brief [brief description]
   * @details [long description]
   * 
   * @param  [description]
   */
  constructor(props) {

    super(props);
    this.state = {
      topTenFilmsDataUri: './data/top-ten-films.json',
      resultLimit: 12,
      topTenFilmsData: [],
      galleryTitle: 'Top Ten Films IMDB 2018'
    }

  }



  /**
   * @brief [brief description]
   * @details [long description]
   * 
   * @param  [description]
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
   * @brief [brief description]
   * @details [long description]
   */
  componentDidMount() {
     fetch(this.state.topTenFilmsDataUri, {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((j) => {

      const filmData = _.slice(j.data.movies, 0, this.state.resultLimit);
      this.setState ({
        topTenFilmsData: filmData
        });

    
    })

  }

  /**
   * @brief [brief description]
   * @details [long description]
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
