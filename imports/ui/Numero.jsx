
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Numero.css";


const Numero = props => {

	const [estado, setEstado] = useState(0);

	const marcarNumero = evt => {
		setEstado(1);
	}
	
	return (
		<button className ={((props.valor%5==1) ? "col-md-2 offset-md-1" : "col-md-2") +  
		(estado == 1 ? " btnPrendido numberCircle" : " btnApagado numberCircle")} 
			 onClick = {marcarNumero}> {props.valor} </button>		
		
	)
};

Numero.propTypes = {
	valor : PropTypes.number.isRequired
};

export default Numero;
