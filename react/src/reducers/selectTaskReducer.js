import { SELECT_USER, DESELECT_USER } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_USER:
			return action.payload;
		case DESELECT_USER:
			return null;
		default:
			return state;
	}
};
