import React from 'react';
import { connect } from 'react-redux';

import { createUser, deselectUser } from '../actions';
import UserForm from './UserForm';

const UserAdd = ({ createUser }) => {
	return (
		<div className="row">
			<h2>Add a new user</h2>
			<UserForm
				initValues={{ taskName: '', description: '' }}
				btnConfig="add"
				onSubmit={formValues => createUser(formValues)}
				onCancel={deselectUser}
			/>
		</div>
	);
};

export default connect(
	null,
	{ createUser, deselectUser }
)(UserAdd);
