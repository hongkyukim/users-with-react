import React, { useState } from 'react';
import { connect } from 'react-redux';

import UserItem from './UserItem';

const UserList = ({ tasks }) => {
	const [filter, setFilter] = useState('all');
	const [search, setSearch] = useState('');

	const FILTER_TABS = ['all', 'active', 'completed'];

	//search feature
	const searchTasks = tasks.filter(
		task =>
			task.taskName.toLowerCase().includes(search.toLowerCase().trim()) ||
			task.description.toLowerCase().includes(search.toLowerCase().trim())
	);

	// filtering feature
	function filterTasks() {
		switch (filter) {
			case 'active':
				return searchTasks.filter(task => task.completed === false);
			case 'completed':
				return searchTasks.filter(task => task.completed === true);
			default:
				return searchTasks;
		}
	}

	function renderList(taskList) {
		return taskList.map(task => {
			return <UserItem key={task.id} task={task} />;
		});
	}

	function renderTabs() {
		return FILTER_TABS.map(tab => {
			return (
				<div
					key={tab}
					className={filter === tab ? 'btn' : 'btn-flat'}
					onClick={() => setFilter(tab)}
				>
					{tab}
				</div>
			);
		});
	}

	return (
		<div>
			<h3>User List</h3>
			{tasks.length === 0 ? (
				<div className="row">
					<div className="grey-text">You currently have no users</div>
				</div>
			) : (
				<div>
					<div className="row">
						<div className="input-field col s5">
							<i className="material-icons prefix">search</i>
							<input
								placeholder="Search"
								type="text"
								value={search}
								onChange={e => setSearch(e.target.value)}
							/>
						</div>
						<div className="right">{renderTabs()}</div>
					</div>
					{renderList(filterTasks())}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = ({ tasks }) => {
	return {
		tasks
	};
};

export default connect(mapStateToProps)(UserList);