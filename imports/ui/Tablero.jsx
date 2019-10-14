import React from 'react';
import PropTypes from 'prop-types';
import NumeroTablero from './NumeroTablero.jsx';
import "./Tablero.css";
import { Meteor } from 'meteor/meteor';


const Tablero = props => {

	return (
		<div className = "tablero col-md-12"> 
			<h1> Tablero Actual </h1>	
			<div className = "row">
				<div className = "col-md-12">		
					<div className = "tf letterCircle"> F </div>
					{props.nF.map((n,i) => (
						<NumeroTablero valor={n.numero} estado={n.estado} id={n._id} key={i}></NumeroTablero>
						))}
					
				</div>
			</div>
			<div className = "row">
				<div className = "col-md-12">
					<div className = "to letterCircle"> O </div>
					{props.nO.map((n,i) => (
						<NumeroTablero valor={n.numero} estado={n.estado} id={n._id} key={i}></NumeroTablero>
					))}
				</div>
			</div>
			<div className = "row">
				<div className = "col-md-12">
					<div className = "tp letterCircle"> P </div>
					{props.nP.map((n,i) => (
						<NumeroTablero user= {props.user} valor={n.numero} estado={n.estado} id={n._id} key={i}></NumeroTablero>
					))}
				</div>
			</div>
			<div className = "row">
				<div className = "col-md-12">
					<div className = "tr letterCircle"> R </div>
					{props.nR.map((n,i) => (
						<NumeroTablero valor={n.numero} estado={n.estado} id={n._id} key={i}></NumeroTablero>
					))}
				</div>
			</div>
			<div className = "row">
				<div className = "col-md-12">
					<div className = "te letterCircle"> E </div>
					{props.nE.map((n,i) => (
						<NumeroTablero valor={n.numero} estado={n.estado} id={n._id} key={i}></NumeroTablero>
					))}
				</div>
			</div>
			<br/>
		</div>
	)
};

Tablero.propTypes = {
	nF : PropTypes.arrayOf(PropTypes.object).isRequired,
	nO : PropTypes.arrayOf(PropTypes.object).isRequired,
	nP : PropTypes.arrayOf(PropTypes.object).isRequired,
	nR : PropTypes.arrayOf(PropTypes.object).isRequired,
	nE : PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tablero;
