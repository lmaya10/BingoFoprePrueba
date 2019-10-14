import React, {useState, useEffect} from 'react';
import Encabezado from './Encabezado.jsx'
import Juego from './Juego.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Fs, Os, Ps, Rs, Es, revBingo } from '../api/tablero.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import "./principalCss.css";

const App = (props) => {

	const [estadoJuego,	 setEstadoJuego] = useState(0);

	useEffect(()=> {

		Meteor.call('Fs.remove');
		Meteor.call('Os.remove');
		Meteor.call('Ps.remove');
		Meteor.call('Rs.remove');
		Meteor.call('Es.remove');
		Meteor.call('Bingo.remove');

		for(let i = 0; i < 15; i++)
		{
			Meteor.call('Fs.insert',i);
			Meteor.call('Os.insert',i);
			Meteor.call('Ps.insert',i);
			Meteor.call('Rs.insert',i);
			Meteor.call('Es.insert',i);
		}

	},[estadoJuego])

	const reiniciarTablero = evt =>{
		
		Meteor.call('Fs.remove');
		Meteor.call('Os.remove');
		Meteor.call('Ps.remove');
		Meteor.call('Rs.remove');
		Meteor.call('Es.remove');
		Meteor.call('Bingo.remove');

		for(let i = 0; i < 15; i++)
		{
			Meteor.call('Fs.insert',i);
			Meteor.call('Os.insert',i);
			Meteor.call('Ps.insert',i);
			Meteor.call('Rs.insert',i);
			Meteor.call('Es.insert',i);
		}

	}

	const comenzarEvento = evt => {
		setEstadoJuego(1);
	};



	return (
		<div className = "container-fluid">
			<AccountsUIWrapper tabindex = "0"/>
			<Encabezado/>

			{ ((estadoJuego == 0) ? 		
			<div className = "texto">
				<div className = "row">	
					<h1 className = "col-md-8 offset-md-2"> Bienvenidos al Bingo Fopre Anual </h1>
				</div>
				<div id="instrucciones" className = "row">
					<div className = "col-md-8 offset-md-2">
					<p> Instrucciones del juego:  </p>
					<ol>
						<li>Para el anfitrion   </li>
							<ol>
								<li>Inicie sesion antes de comenzar </li>
								<li>Una vez inicie sesion oprima el boton iniciar juego </li>
								<li>Se abrira una página en la cual se mostrara el tablero </li>
								<li>A medida que salgan los numeros haga click sobre ellos y se pondran de color rojo </li>
								<li>Cuando alguien haya completado el bingo se le informará </li>
								<li>Si desea reiniciar el juego oprima el botón reiniciar juego </li>
							</ol>
						<li>Para un jugador	 </li>
							<ol>
								<li>Inicie sesion antes de comenzar</li>
								<li>Una vez inicie sesion oprima el boton iniciar juego </li>
								<li>Se abrira una página en la cual se mostrara el tablero </li>
								<li>A medida que salgan los numeros se pondran de color rojo </li>
								<li>En la parte inferior de la pantalla verá el cartón que le corresponde</li>
								<li>Haga click sobre los numeros para marcarlos </li>
								<li>Cuando haya completado el carton oprima el botón ¡BINGO! de igual manera cuando alguien haya completado el bingo se le informará </li>
							</ol>
						<li> Para un invitado </li>
							<ol>
								<li>Oprima el boton comenzar juego para visualizar el estado del juego actualmente.</li>
							</ol>
					</ol>
					</div>
				</div>
				<div className = "row">
					<button className = "col-md-6 offset-md-3"  onClick = {comenzarEvento}> Comenzar Evento </button>
				</div>
			</div> 
			:
			((props.ganador > 0) ? (
				<div className = "row">
					<div className = "col-md-6 offset-md-3" id="mensajeGanador"> El juego ha terminado, ya hay un ganador </div>
				</div>):
			<div> 
				<Juego numF = {props.numFs} numO = {props.numOs} numP = {props.numPs} numR = {props.numRs} numE = {props.numEs}></Juego>
				{ ( Meteor.user() != null && Meteor.user().username == "admin") ?
					<div className = "row">
						<button className = "col-md-6 offset-md-3" onClick = {reiniciarTablero}> Reiniciar Juego </button>
					</div> :
					<div/>
				}
			</div>))
			}
			

		</div>
	);
};

export default withTracker(() => {

	Meteor.subscribe('numF');
	Meteor.subscribe('numO');
	Meteor.subscribe('numP');
	Meteor.subscribe('numR');
	Meteor.subscribe('numE');
	Meteor.subscribe('bingo');
	
  return {
    numFs: Fs.find({}).fetch(),
    numOs: Os.find({}).fetch(),
   	numPs: Ps.find({}).fetch(),
    numRs: Rs.find({}).fetch(),
    numEs: Es.find({}).fetch(),  
    currentUser: Meteor.user(),
    ganador: revBingo.find({}).count({})
	};
})(App);