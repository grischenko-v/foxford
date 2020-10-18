import React from 'react';
import UsersTable from '../containers/Table';
import 'antd/dist/antd.css';
import {createServer} from "miragejs"

let server = createServer();
server.get("/api/users", {
	users: [
		{
			id: '1',
			key: '1',
			name: 'John',
			surname: 'Brown',
			age: 32,
		},
		{
			id: '2',
			key: '2',
			name: 'Bob',
			surname: 'White',
			age: 22,
		},
		{
			id: '3',
			key: '3',
			name: 'Igor',
			surname: 'Right',
			age: 32,
		},
	]
});

const App = () => {

	return <UsersTable/>;
};

export default App;