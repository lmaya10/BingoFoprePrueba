import React, {useState, useEffect} from 'react';
import Encabezado from './Encabezado.jsx'
import Juego from './Juego.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Fs, Os, Ps, Rs, Es } from '../api/tablero.js';
import { withTracker } from 'meteor/react-meteor-data';

const App = (props) => {

	const [estadoJuego,	 setEstadoJuego] = useState(0);

	useEffect(()=> {

		Meteor.call('Fs.remove');
		Meteor.call('Os.remove');
		Meteor.call('Ps.remove');
		Meteor.call('Rs.remove');
		Meteor.call('Es.remove');

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
			{ (estadoJuego == 0) ? 		
			<div>
				<h1> Bienvenidos al Bingo Fopre Anual </h1>
				<div className = "row">
					<button className = "col-sm-6"  onClick = {comenzarEvento}> Comenzar Evento </button>
					<button className = "col-sm-6"> Inscribir Carton </button>
				</div>
			</div> 
			:
			<div> 
				<Juego user = {props.currentUser} numF = {props.numFs} numO = {props.numOs} numP = {props.numPs} numR = {props.numRs} numE = {props.numEs}></Juego>
				{ (props.currentUser != null && props.currentUser.username == "admin") ?
					<button onClick = {reiniciarTablero}> Reiniciar Juego </button> :
					<div/>
				}
			</div>
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

  return {
    numFs: Fs.find({}).fetch(),
    numOs: Os.find({}).fetch(),
   	numPs: Ps.find({}).fetch(),
    numRs: Rs.find({}).fetch(),
    numEs: Es.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);