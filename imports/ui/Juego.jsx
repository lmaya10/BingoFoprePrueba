import React from 'react';
import Tablero from './Tablero.jsx';
import Carton from './Carton.jsx';

const Juego = () => {

	let numTab = [];

	for(let i = 0; i < 15; i++)
	{
		numTab.push({
			numero: i + 1
		}); 
		numTab.push({
			numero: i + 16
		}); 
		numTab.push({
			numero: i + 31
		}); 
		numTab.push({
			numero: i + 46
		}); 
		numTab.push({
			numero: i + 61
		}); 
	}

	console.log(numTab);

	return (
		<div>
			<div className ="container-fluid">
			<div className = "row">
				<div className = "col-md-6">
					<Tablero numeros={numTab}></Tablero>
				</div>
				<div className = "col-md-6">
					<Carton/>
				</div>
			</div>
			</div>
		</div>
		)

};

export default Juego;
