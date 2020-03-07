import { combineReducers } from 'redux';

import taskReducer from './taskReducer';
import selectTaskReducer from './selectTaskReducer';

export default combineReducers({
	tasks: taskReducer,
	selectedTask: selectTaskReducer
});
