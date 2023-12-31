import React, { useEffect } from 'react';
import { useTypedSelectror } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
	const { users, loading, error } = useTypedSelectror((state) => state.user);
	const { fetchUsers } = useActions();
	useEffect(() => {
		fetchUsers();
	}, []);
	if (loading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>Something wrong...</h1>;
	}
	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
};

export default UserList;
