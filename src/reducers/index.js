function clg(...x) {
	for (let exes of x) console.log(exes);
}

export const reducer = (state, action) => {
	clg(">>> Reducer: ", action);
	switch (action.type) {
		case "ADD":
			clg(">>> Reducer: ADD");
			return { ...state };
		case "REMOVE":
			clg(">>> Reducer: REMOVE");
			return { ...state };
		case "ANOTHER":
			clg(">>> Reducer: ANOTHER");
			return { ...state };
		default:
			return state;
	}
};

export const initialState = { total: 0 }