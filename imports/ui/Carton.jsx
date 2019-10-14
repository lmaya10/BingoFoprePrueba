import React, {useState} from 'react';
import PropTypes from 'prop-types';
import NumeroCarton from './NumeroCarton.jsx';
import PopUp from './PopUp.jsx';
import "./Carton.css";


const Carton = props => {

	const [mensaje, setMensaje] = useState(" ");
	const [mostrarMensaje, setMostrarMensaje] = useState(false);

	const verificarBingo = evt => {
		let i = 0;
		let correctas = 0;
		let nocorrectas = 0;
		for(i; i < 25; i += 5)
		{
			for(let j = 0; j < 15; j++)
			{
				((props.nF[j].numero == props.numeros[i]) && props.nF[j].estado == 1) ? (correctas ++) : (nocorrectas ++);
			}
		}

		for(i=1; i < 25; i += 5)
		{
			for(let j = 0; j < 15; j++)
			{
				((props.nO[j].numero == props.numeros[i]) && props.nO[j].estado == 1) ? (correctas ++) : (nocorrectas ++);
			}
		}

		for(i=2; i < 25; i += 5)
		{
			for(let j = 0; j < 15; j++)
			{
				((props.nP[j].numero == props.numeros[i]) && props.nP[j].estado == 1) ? (correctas ++) : (nocorrectas ++);
			}
		}

		for(i=3; i < 25; i += 5)
		{
			for(let j = 0; j < 15; j++)
			{
				((props.nR[j].numero == props.numeros[i]) && props.nR[j].estado == 1) ? (correctas ++) : (nocorrectas ++);
			}
		}


		for(i=4; i < 25; i += 5)
		{
			for(let j = 0; j < 15; j++)
			{
				((props.nE[j].numero == props.numeros[i]) && props.nE[j].estado == 1) ? (correctas ++) : (nocorrectas ++);
			}
		}


		(correctas == 25) ? ((Meteor.call('Bingo.insert', Meteor.user().username)), setMensaje("Felicidades ha ganado")) : 
		setMensaje("No ha ganado aun le faltan " + (nocorrectas-350) + " números");

		setMostrarMensaje(true);
	} 

	const togglePopup = () => {  
		setMostrarMensaje(!mostrarMensaje);  
 	}  

	return (
		
		<div className = "col-md-12">
			<div className = "row">
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
					<div className = "row numeros">
						{props.numeros.map((n,i)  => (
							<NumeroCarton valor={props.numeros[i]} key={i}></NumeroCarton>
							))
						}

					</div>
					<br/><br/>
				</div>
				<div className = "col-md-4">
					<button id="btnBingo" className ="col-md-12" onClick ={verificarBingo}>¡BINGO!</button> 
				</div>
				{ (mostrarMensaje) ? 
						<PopUp  
		          			text= {mensaje}  
		          			closePopup={togglePopup}  
						/>:
						null
				}
			</div>
		</div>
	)
};


Carton.propTypes = {
	numeros : PropTypes.arrayOf(PropTypes.number).isRequired,
	nF : PropTypes.arrayOf(PropTypes.object).isRequired,
	nO : PropTypes.arrayOf(PropTypes.object).isRequired,
	nP : PropTypes.arrayOf(PropTypes.object).isRequired,
	nR : PropTypes.arrayOf(PropTypes.object).isRequired,
	nE : PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Carton;
