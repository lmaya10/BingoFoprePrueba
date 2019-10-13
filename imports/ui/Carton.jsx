import React from 'react';
import PropTypes from 'prop-types';
import NumeroCarton from './NumeroCarton.jsx';
import "./Carton.css";


const Carton = props => {

	return (
		(props.user != null && props.user.username != "admin") ? 
		(
		<div className = "tablero col-md-4 offset-md-4"> 	
		<h1> Carton Actual </h1>	
			<div className = "row">
				<div className = "col-md-2 offset-md-1 tf letter"> F </div>
				<div className = "col-md-2 to letter"> O </div>
				<div className = "col-md-2 tp letter"> P </div>
				<div className = "col-md-2 tr letter"> R </div>
				<div className = "col-md-2 te letter"> E </div>		
			</div>
			<br/>
			<div className = "row">
				{props.numeros.map((n,i)  => (
					<NumeroCarton valor={props.numeros[i]} key={i}></NumeroCarton>
					))
				}

			</div>
			<br/><br/>
			<div className = "row">
				<button id="btnBingo" className ="col-md-12" onClick ={console.log("Hay Bingo")}>¡BINGO!</button> 
			</div>
		</div>
		): ( <div> Debe iniciar sesion para poder jugar </div>)
		
	)
};


Carton.propTypes = {
	user : PropTypes.object,
	numeros : PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Carton;
