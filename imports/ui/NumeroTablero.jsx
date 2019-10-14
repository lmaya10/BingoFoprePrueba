
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NumeroTablero.css";
import { Fs, Os, Ps, Rs, Es } from "../api/tablero.js";
import { Meteor } from "meteor/meteor";


const NumeroTablero = props => {

	const marcarNumero = evt => {
		(props.valor < 16) ? 
			Meteor.call("Fs.update",props.id,props.valor) :
			(props.valor < 31) ? 
				Meteor.call("Os.update",props.id,props.valor) :
				(props.valor < 46) ? 
					Meteor.call("Ps.update",props.id,props.valor) :
					(props.valor < 61) ? 
						Meteor.call("Rs.update",props.id,props.valor) :
						Meteor.call("Es.update",props.id,props.valor); 
	}
	
	return (
		(Meteor.user() != null && Meteor.user().username == "admin") ? 
		(<button className ={(props.estado == 1) ? " btnPrendido numberTab" : " btnApagado numberTab"} 	
			 onClick = {marcarNumero}> {props.valor} </button>) :
		(<button className ={(props.estado == 1) ? " btnPrendido numberTab" : " btnApagado numberTab"} 	
			 > {props.valor} </button>)
		
	)
};

NumeroTablero.propTypes = {
	valor : PropTypes.number.isRequired,
	estado : PropTypes.number.isRequired,
	id : PropTypes.object.isRequired
};

export default NumeroTablero;
