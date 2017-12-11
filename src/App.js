import React, { Component } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Game from "./components/Game";
import Footer from "./components/Footer";
import images from "./components/images.json";


class App extends Component {

	state = {
    images,
    gameNotice: "Click an Image to Begin!",
    bestScore: 0,
    score: 0
  };

  componentDidMount() {
    console.log(this.state.images[0].image);
  }

/*
http://du.bootcampcontent.com/denver-coding-bootcamp/07-10-2017-DENVER-Class-Repository-FSF/tree/master/01-Class-Content/19-react/02-Homework

https://clicky-game.netlify.com/

The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.
Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
Once the user's score is reset after an incorrect guess, the game should restart.

*/

  setClick = id => {
    const images = this.state.images.filter(images => images.id !== id);
    this.setState({ images });
  };

  setScore = score => {
  	this.setState({ score: this.state.score + 1 });
  };

  setHighScore = score => {
  	this.setState({ count: this.state.score + 1 });
  };

  isRight = score => {

  };

  render() {
	  return(
	    <div>
	      <Header 
          gameNotice={this.state.gameNotice}
          score={this.state.score}
          bestScore={this.state.bestScore}
	      />
	      <Hero />
	      <div className="container gameBlock text-center">
		    	{this.state.images.map(images => (
	          <Game
	            setClick={this.setClick}
	            isRight={this.isRight}
	            id={images.id}
	            key={images.id}
	            name={images.name}
	            image={images.image}
	          />
	        ))}
        </div>
	      <Footer />
	    </div>
	  )
	}
}

export default App;
