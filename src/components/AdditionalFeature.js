import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions"

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const AdditionalFeature = props => {
	// clg(props.feature)
	// const handleButton = e => {
	// 	// clg(e.target.value)
	// 	props.addFeature();
	// };

	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button onClick={() => props.addFeature(props.feature) } className="button" value={"add"}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

const mapStateToProps =	state => state;
const mapDispatchToProps = {addFeature: addFeature};

export default connect(
	mapStateToProps, 
	mapDispatchToProps, 
)(AdditionalFeature);
