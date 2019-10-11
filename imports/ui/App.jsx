import React from 'react';
import Tablero from './Tablero.jsx'
import Encabezado from './Encabezado.jsx'

const App = () => {

	let num = [];

	for(let i = 0; i < 80; i++)
	{
		num.push({
			numero: i + 1
		}); 
	}

	console.log(num);

	return (
		<div>
			<Encabezado/>
			<div className ="container-fluid">
			<div className = "row">
				<div className = "col-md-6">
					<Tablero numeros={num}></Tablero>
				</div>
			</div>
			</div>
		</div>
		)

};

export default App;
