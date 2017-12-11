import React from "react";

const Game = (props) => (
	<img className="click-item" alt={props.name} src={props.image} onClick={() => props.setClick(props.id)} />
);

export default Game;
