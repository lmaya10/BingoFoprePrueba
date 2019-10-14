
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NumeroCarton.css";
import { Fs, Os, Ps, Rs, Es } from "../api/tablero.js";


const NumeroCarton = props => {

	const[estado, setEstado] = useState(0);

	const marcarNumero = evt => {
		 setEstado(1);
	}
	
	return (
		<button className ={((props.valor%5==1)?"col-md-2 offset-md-1":"col-md-2") +
			((estado == 1) ? " btnPrendido numberCar" : " btnApagado numberCar")} 	
			 onClick = {marcarNumero}> {props.valor} </button>		
		
	)
};

NumeroCarton.propTypes = {
	valor : PropTypes.number.isRequired
};

export default NumeroCarton;
