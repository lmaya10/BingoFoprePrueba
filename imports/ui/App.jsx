import React, {useState, useEffect} from 'react';
import Encabezado from './Encabezado.jsx'
import Juego from './Juego.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Fs, Os, Ps, Rs, Es, revBingo } from '../api/tablero.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

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
		<div>
			<AccountsUIWrapper tabindex = "0"/>
			<Encabezado/>

			{ ((estadoJuego == 0) ? 		
			<div>
				<h1> Bienvenidos al Bingo Fopre Anual </h1>
				<div className = "row">
					<button className = "col-sm-6 offset-md-3"  onClick = {comenzarEvento}> Comenzar Evento </button>
				</div>
			</div> 
			:
			((props.ganador > 0) ? (<div> El juego ha terminado, ya hay un ganador </div>):
			<div> 
				<Juego numF = {props.numFs} numO = {props.numOs} numP = {props.numPs} numR = {props.numRs} numE = {props.numEs}></Juego>
				{ ( Meteor.user() != null && Meteor.user().username == "admin") ?
					<button onClick = {reiniciarTablero}> Reiniciar Juego </button> :
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