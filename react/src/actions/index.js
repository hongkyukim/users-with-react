import {
	CREATE_USER,
	DELETE_USER,
	SELECT_USER,
	DESELECT_USER,
	UPDATE_USER
} from './types';

let nextTodoId = 0;

export const createUser = formValues => {
	return {
		type: CREATE_USER,
		payload: { ...formValues, id: nextTodoId++, completed: false }
	};
};

export const deleteUser = taskId => {
	return {
		type: DELETE_USER,
		payload: taskId
	};
};

export const selectUser = task => {
	return {
		type: SELECT_USER,
		payload: task
	};
};

export const deselectUser = () => {
	return {
		type: DESELECT_USER
	};
};

export const editUser = updatedTask => {
	return {
		type: UPDATE_USER,
		payload: updatedTask
	};
};

export const toggleUser = task => {
	return {
		type: UPDATE_USER,
		payload: { ...task, completed: !task.completed }
	};
};
