import React, {FC, useEffect} from 'react';
import useAppSelector from "../hooks/useAppSelector";
import useActions from "../hooks/useActions";

const UsersList: FC = () => {
    const {users, isLoading, error} = useAppSelector(state => state.users);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (error) {
        return <div style={{color: "red"}}>{error}</div>;
    }

    if (isLoading) {
        return <div>Now loading...</div>;
    }

    if (!users.length) {
        return <div>No users</div>;
    }

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <p style={{fontWeight: "bold"}}>{user.id}. {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersList;