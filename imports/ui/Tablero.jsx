import React from 'react';
import PropTypes from 'prop-types';
import Numero from './Numero.jsx';
import "./Tablero.css";


const Tablero = props => {

	return (
		<div className = "tablero"> 	
			<div className = "row">
				<div className = "col-md-2 offset-md-1 tf numberCircle"> F </div>
				<div className = "col-md-2 to numberCircle"> O </div>
				<div className = "col-md-2 tp numberCircle"> P </div>
				<div className = "col-md-2 tr numberCircle"> R </div>
				<div className = "col-md-2 te numberCircle"> E </div>		
			</div>
			<br/>
			<div className = "row">
				{props.numeros.map((n,i)  => (
					<Numero valor={n.numero} key={i}></Numero>
					))
				}

			</div>
		</div>
	)
};

Tablero.propTypes = {
	numeros : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Tablero;
