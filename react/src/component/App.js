import React from 'react';
import { connect } from 'react-redux';

import UserAdd from './UserAdd';
import UserEdit from './UserEdit';
import UserList from './UserList';

const App = ({ selectedTask }) => {
	return (
		<div className="container">
			<div className="section">
				{selectedTask ? <UserEdit selectedTask={selectedTask} /> : <UserAdd />}
			</div>
			<UserList />
		</div>
	);
};

const mapStateToProps = ({ selectedTask }) => {
	return {
		selectedTask
	};
};

export default connect(mapStateToProps)(App);