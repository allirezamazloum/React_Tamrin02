import React, { Component } from 'react'
import poster1 from "../images/movies/1.jpg";
import poster2 from "../images/movies/2.jpg";
import poster3 from "../images/movies/3.jpg";
import poster4 from "../images/movies/4.jpg";
import poster5 from "../images/movies/5.jpg";
import poster6 from "../images/movies/6.jpg";
import poster7 from "../images/movies/7.jpg";
import poster8 from "../images/movies/8.jpg";
import poster9 from "../images/movies/9.jpg";
import "../styles/MoviPost.css";

 class MoviPost extends Component {
    constructor(props){
        super(props);
        this.state={
            posterArr:[poster1,poster2,poster3,poster4,poster5,poster6,poster7,poster8,poster9],
        };
    }
  render() {
    const {id,title,year,director,genre}=this.props;
    return (
      <div className="mainContainer">
        <div className='containerMovie'>
          <img className='imgMovi' src={this.state.posterArr[id-1]} alt="poster"/>
          <h3>{title}</h3>
          <h4>{director} - {year}</h4>
          <h4>{genre}</h4>
        </div>

      </div>

    )
  }
}
export default MoviPost;