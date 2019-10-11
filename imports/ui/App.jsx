import React, {useState} from 'react';
import Encabezado from './Encabezado.jsx'
import Juego from './Juego.jsx';

const App = () => {

	const [estadoJuego,	 setEstadoJuego] = useState(0);

	const comenzarEvento = evt => {
		setEstadoJuego(1);
	}
	return (
		<div>
			<Encabezado/>
			{ (estadoJuego == 0) ? 		<div>
			<h1> Bienvenidos al Bingo Fopre Anual </h1>
			<button onClick = {comenzarEvento}> Comenzar Evento </button>
		</div> 
		: <Juego/>}
		</div>
		)

};

export default App;
