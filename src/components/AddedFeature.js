import React from "react";
import { connect } from "react-redux";
function clg(...x) {
	for (let exes of x) console.log(exes);
}

const AddedFeature = props => {

	const handleButton = () => {
		
	}

	return (
		<li>
			{/* Add an onClick to run a function to remove a feature */}
			<button onClick={() => props.remvFeature(props.feature)} className="button">
				X
			</button>
			{props.feature.name}
		</li>
	);
};

// const mapStateToProps = state => ({feature: state.feature});
// const mapDispatchToProps = {};

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(AddedFeature);

export default AddedFeature;
