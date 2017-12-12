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

  setClick = id => {
		let currentIndex = this.state.images.findIndex( function (image) {
			return (id == image.id);
		});
  	if (this.state.images[currentIndex].guessed === "no") {
  		let newImageSet = images.slice(0);
  		newImageSet[currentIndex].guessed = "yes";
  		this.setState({
  			score: this.state.score + 1,
        bestScore: this.state.score,
  			images: newImageSet,
  			gameNotice: "Correct! Click another image to keep going."
  		});
      this.setState({
        images: this.randomize()
      });
  	} else {
  		this.setState({
  			images: images,
  			bestScore: this.state.score,
        score: 0,
  			gameNotice: "Incorrect. Click another image to get started again."
  		});
      this.setState({
        images: this.randomize()
      });
  	}
  };

  randomize = () => {
    let randomImageSet = images.slice(0);
    for (let i = randomImageSet.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomImageSet[i], randomImageSet[j]] = [randomImageSet[j], randomImageSet[i]];
    }
    return randomImageSet;
  }

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
