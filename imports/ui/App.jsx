import React, {useState} from 'react';
import Encabezado from './Encabezado.jsx'
import Juego from './Juego.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Fs, Os, Ps, Rs, Es } from '../api/tablero.js';
import { withTracker } from 'meteor/react-meteor-data';

const App = (props) => {

	const [estadoJuego,	 setEstadoJuego] = useState(0);

	const reiniciarTablero = evt =>{

		let lista = Fs.find({});
		lista.forEach(function(doc){
  			Fs.remove(doc._id);
		});

		lista = Os.find({});
		lista.forEach(function(doc){
  			Os.remove(doc._id);
		});

		lista = Ps.find({});
		lista.forEach(function(doc){
			Ps.remove(doc._id);
		});
		
		lista = Rs.find({});
		lista.forEach(function(doc){
			Rs.remove(doc._id);
		});
		
		lista = Es.find({});
		lista.forEach(function(doc){
			Es.remove(doc._id);
		});

		for(let i = 0; i < 15; i++)
		{
			Fs.insert({
				numero: i + 1,
				estado: 0
			}); 
			Os.insert({
				numero: i + 16,
				estado: 0
			}); 
			Ps.insert({
				numero: i + 31,
				estado: 0
			}); 
			Rs.insert({
				numero: i + 46,
				estado: 0
			}); 
			Es.insert({
				numero: i + 61,
				estado: 0
			}); 
		}
	}

	const comenzarEvento = evt => {
		setEstadoJuego(1);
		reiniciarTablero();
	};



	return (
		<div>
			{console.log(props.currentUser)}
			<AccountsUIWrapper/>
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
  return {
    numFs: Fs.find({}).fetch(),
    numOs: Os.find({}).fetch(),
   	numPs: Ps.find({}).fetch(),
    numRs: Rs.find({}).fetch(),
    numEs: Es.find({}).fetch(),
    currentUser: Meteor.user(),
    
  };
})(App);