export const ADD_FEATURE = "ADD_FEATURE";
export const REMV_FEATURE = "REMV_FEATURE";

export const addFeature = (X) => ({
	type: ADD_FEATURE,
	payload: X
})

export const remvFeature = (X) => ({
	type: REMV_FEATURE,
	payload: X
})