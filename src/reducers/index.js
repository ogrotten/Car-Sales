function clg(...x) {
	for (let exes of x) console.log(exes);
}

export const reducer = (state = initialState, action) => {
	clg(">>> Reducer: ", action);
	switch (action.type) {
		case "ADD_FEATURE":
			clg(">>> Reducer: ADD");
			clg(action.payload);
			// find from 33 addFs from action.payload.id
			const NF = state.additionalFeatures.find(e => e.id === action.payload.id) 

			return { ...state, 
				car: {
					...state.car,
					features: [...state.car.features, NF]
				},
				additionalPrice: action.payload.price += state.additionalPrice
			};
			
		case "REMV_FEATURE":
			clg(">>> Reducer: REMOVE");
			return { ...state };
		case "ANOTHER":
			clg(">>> Reducer: ANOTHER");
			return { ...state };
		default:
			return state;
	}
};

export const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image:
		'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	additionalFeatures: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]

};