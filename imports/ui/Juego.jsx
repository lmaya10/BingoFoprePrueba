import React, {useState} from 'react';
import Tablero from './Tablero.jsx';
import Carton from './Carton.jsx';
import PropTypes from 'prop-types';
import "./Juego.css";

const Juego = props => {

	return (
		<div>
			<div className ="container-fluid contenedor">
				<div className = "row tableroPrincipal">
					<Tablero user= {props.user} nF={props.numF} nO={props.numO} nP={props.numP} nR={props.numR} nE={props.numE}></Tablero>
					
				</div>
				<div className ="row">
					<Carton user = {props.user}/>
				</div>			
			</div>
		</div>
		)

};

Juego.propTypes = {
	numF : PropTypes.arrayOf(PropTypes.object).isRequired,
	numO : PropTypes.arrayOf(PropTypes.object).isRequired,
	numP : PropTypes.arrayOf(PropTypes.object).isRequired,
	numR : PropTypes.arrayOf(PropTypes.object).isRequired,
	numE : PropTypes.arrayOf(PropTypes.object).isRequired,
	user : PropTypes.object

};

export default Juego;
