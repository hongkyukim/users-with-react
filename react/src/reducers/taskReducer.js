import { CREATE_USER, DELETE_USER, UPDATE_USER } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case CREATE_USER:
			return [...state, action.payload];
		case DELETE_USER:
			return state.filter(el => el.id !== action.payload);
		case UPDATE_USER:
			return state.map(el =>
				el.id === action.payload.id ? action.payload : el
			);
		default:
			return state;
	}
};
