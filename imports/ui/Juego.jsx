import React, {useState, useEffect} from 'react';
import Tablero from './Tablero.jsx';
import Carton from './Carton.jsx';
import PropTypes from 'prop-types';
import "./Juego.css";
import { Meteor } from 'meteor/meteor';

const Juego = props => {

	const[a, setA] = useState([]);

	useEffect(()=> {

		let f = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
		let o = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
		let p = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
		let r = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
		let e = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

		let num = [];
	
		let n;
		for (n=1; n<=5; ++n)
		{
	  		let i = Math.floor((Math.random() * (15-n)) + 1);
	  		num.push(f[i]);
	  		f[i] = f[15-n];

	  		i = Math.floor((Math.random() * (15-n)) + 1);
	  		num.push(o[i]);
	  		o[i] = o[15-n];

	  		i = Math.floor((Math.random() * (15-n)) + 1);
	  		num.push(p[i]);
	  		p[i] = p[15-n];

	  		i = Math.floor((Math.random() * (15-n)) + 1);
	  		num.push(r[i]);
	  		r[i] = r[15-n];

	  		i = Math.floor((Math.random() * (15-n)) + 1);
	  		num.push(e[i]);
	  		e[i] = e[15-n];
		}

		setA(num);

	},[])
	
	return (

		<div>
			<div className ="container-fluid contenedor">
				<div className = "row tableroPrincipal">
					<Tablero nF={props.numF} nO={props.numO} nP={props.numP} nR={props.numR} nE={props.numE}></Tablero>
					
				</div>
				<div className ="row">
					{ (Meteor.user() != null && Meteor.user().username != "admin") ? 
						<Carton numeros = {a} nF={props.numF} nO={props.numO} nP={props.numP} nR={props.numR} nE={props.numE} /> :
						((Meteor.user() == null)?( <div> Debe iniciar sesion para poder jugar </div>):<div/>)
					}
				</div>			
			</div>
		</div>
		)

};

Juego.propTypes = {
	numF : PropTypes.arrayOf(PropTypes.object).isRequired,
	numO : PropTypes.arrayOf(PropTypes.object).isRequired,
	numP : PropTypes.arrayOf(PropTypes.object).isRequired,
	numR : PropTypes.arrayOf(PropTypes.object).isRequired,
	numE : PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Juego;
