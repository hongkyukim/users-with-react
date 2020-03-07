import React from 'react';
import { connect } from 'react-redux';

import { editUser, deselectUser } from '../actions';
import UserForm from './UserForm';

const UserEdit = ({ selectedUser, editUser, deselectUser }) => {
	return (
		<div className="row">
			<h2>Edit an user</h2>
			<UserForm
				initValues={selectedUser}
				btnConfig="edit"
				onSubmit={async formValues => {
					const { id, completed } = selectedUser;
					await editUser({ ...formValues, id, completed });
					deselectUser();
				}}
				onCancel={deselectUser}
			/>
		</div>
	);
};

export default connect(
	null,
	{ editUser, deselectUser }
)(UserEdit);
