import React from "react";  
import "./PopUp.css";  
import PropTypes from "prop-types";

const PopUp = (props) => {  
	return (  
		<div className="popup">  
			<div className="popup\_inner">  
				<h1>{props.text}</h1>  
				<button onClick={props.closePopup}>Cerrar</button>  
			</div>  
		</div>  
	);  
}  

PopUp.propTypes = {
	text : PropTypes.string.isRequired,
	closePopup : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PopUp;