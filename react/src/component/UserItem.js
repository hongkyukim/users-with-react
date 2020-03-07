import React from 'react';
import { connect } from 'react-redux';

import { deleteUser, selectUser, toggleUser, deselectUser } from '../actions';

const UserItem = ({
	task,
	deleteUser,
	selectUser,
	toggleUser,
	deselectUser
}) => {
	return (
		<div
			className={`card hoverable ${task.completed ? 'teal lighten-3' : null}`}
			onClick={() => toggleUser(task)}
		>
			<div
				className={`card-content ${task.completed ? 'white-text' : null}`}
				style={task.completed ? { textDecoration: 'line-through' } : null}
			>
				<span className="card-title">{task.taskName}</span>
				<p>{task.description}</p>
			</div>
			<div className="card-action">
				<a href="#/">
					<i
						className="material-icons"
						onClick={e => {
							e.stopPropagation();
							selectUser(task);
						}}
					>
						edit
					</i>
				</a>
				<a href="#/">
					<i
						className="material-icons"
						onClick={async () => {
							await deleteUser(task.id);
							deselectUser();
						}}
					>
						delete
					</i>
				</a>
			</div>
		</div>
	);
};

export default connect(
	null,
	{ deleteUser, selectUser, toggleUser, deselectUser }
)(UserItem);