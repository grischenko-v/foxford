import React, {useEffect} from 'react';
import {Table, Divider} from 'antd';
import 'antd/dist/antd.css';
import '../styles/Table.css';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
	},
	{
		title: 'Surname',
		dataIndex: 'surname',
	},
	{
		title: 'Age',
		dataIndex: 'age',
	},
];

const UsersTable = ({selectAll, items, fetchUsers, users}) => {

	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			selectAll(selectedRows);
		},
		onSelectAll: (_, selectedRows) => {
			selectAll(selectedRows);
		},
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className="main">
			<Divider/>

			<Table
				rowSelection={{
					type: 'checkbox',
					...rowSelection,
				}}
				columns={columns}
				dataSource={users}
			/>
			<ul className="user-list">
				{items.map(item =>
					<li key={item.id}>{item.name}</li>
				)}
			</ul>
		</div>
	);
};

export default UsersTable;