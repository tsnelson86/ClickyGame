import React from "react";

const Header = (props) =>
  <div className="headerBlock text-center">
	  <ul>
	      <li className="brand"><a href="/">Puppy Clicky Game</a></li>
	      <li className="">{props.gameNotice}</li>
	      <li>Score: {props.score} | Top Score: {props.bestScore}</li>
	  </ul>
  </div>

export default Header;
