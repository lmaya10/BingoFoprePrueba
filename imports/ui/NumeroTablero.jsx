
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./NumeroTablero.css";
import { Fs, Os, Ps, Rs, Es } from '../api/tablero.js';


const NumeroTablero = props => {

	const marcarNumero = evt => {
		console.log(props.id);
		console.log(props.valor);
		(props.valor < 16) ? 
			Fs.update({_id: props.id},{numero:props.valor, estado: 1}) :
			(props.valor < 31) ? 
				Os.update({_id: props.id},{numero:props.valor, estado: 1}) :
				(props.valor < 46) ? 
					Ps.update({_id: props.id},{numero:props.valor, estado: 1}) :
					(props.valor < 61) ? 
						Rs.update({_id: props.id},{numero:props.valor, estado: 1}) :
						Es.update({_id: props.id},{numero:props.valor, estado: 1}); 
	}
	
	return (
		(props.user != null && props.user.username == "admin") ? 
		(<button className ={(props.estado == 1) ? " btnPrendido numberTab" : " btnApagado numberTab"} 	
			 onClick = {marcarNumero}> {props.valor} </button>) :
		(<button className ={(props.estado == 1) ? " btnPrendido numberTab" : " btnApagado numberTab"} 	
			 > {props.valor} </button>)
		
	)
};

NumeroTablero.propTypes = {
	valor : PropTypes.number.isRequired,
	estado : PropTypes.number.isRequired,
	id : PropTypes.object.isRequired,
	user : PropTypes.object
};

export default NumeroTablero;
