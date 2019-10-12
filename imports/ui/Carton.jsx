import React from 'react';
import PropTypes from 'prop-types';
import NumeroCarton from './NumeroCarton.jsx';
import "./Carton.css";


const Carton = props => {

	let f = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	let o = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
	let p = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
	let r = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
	let e = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
	
	let n;
	let a=[];
	for (n=1; n<=5; ++n)
	{
  		let i = Math.floor((Math.random() * (15-n)) + 1);
  		a.push(f[i]);
  		f[i] = f[15-n];

  		i = Math.floor((Math.random() * (15-n)) + 1);
  		a.push(o[i]);
  		o[i] = o[15-n];

  		i = Math.floor((Math.random() * (15-n)) + 1);
  		a.push(p[i]);
  		p[i] = p[15-n];

  		i = Math.floor((Math.random() * (15-n)) + 1);
  		a.push(r[i]);
  		r[i] = r[15-n];

  		i = Math.floor((Math.random() * (15-n)) + 1);
  		a.push(e[i]);
  		e[i] = e[15-n];
	}



	return (
		(props.user != null && props.user.username != "admin") ? 
		(
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
			<div className = "row">
				{a.map((n,i)  => (
					<NumeroCarton valor={a[i]} key={i}></NumeroCarton>
					))
				}

			</div>
			<br/><br/>
			<div className = "row">
				<button id="btnBingo" className ="col-md-12" onClick ={console.log("Hay Bingo")}>¡BINGO!</button> 
			</div>
		</div>
		): ( <div> Debe iniciar sesion para poder jugar </div>)
		
	)
};


Carton.propTypes = {
	user : PropTypes.object
};

export default Carton;
