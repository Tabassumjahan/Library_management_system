import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import AddUserForm from '../components/User/AddUserForm';
import './UserManagementPage.css';
import UpdateUserForm from '../components/User/UpdateUserForm';
const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Fetch the list of users from your Spring Boot API
    fetch('http://localhost:8083/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (updatedUser) => {
    // Make an API request to update the user data
    fetch(`http://localhost:8083/api/users/{userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (response.status === 200) {
          // User updated successfully, update the user list
          const updatedUsers = users.map((user) =>
            user.userId === updatedUser.userId ? updatedUser : user
          );
          setUsers(updatedUsers);
          setEditingUser(null); // Clear editing mode
        } else {
          // Handle error cases
          console.error('Error updating user:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  const deleteUser = (userId) => {
    // Make an API request to delete the user by userId
    fetch(`http://localhost:8083/api/users/{userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          // User deleted successfully, update the user list
          setUsers(users.filter((user) => user.userId !== userId));
        } else {
          // Handle error cases
          console.error('Error deleting user:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div>
      <h2>User Management</h2>
      <AddUserForm addUser={addUser} />
      {editingUser && (
        <UpdateUserForm
          userData={editingUser}
          onCancel={() => setEditingUser(null)}
          onUpdate={handleUpdateUser}
        />
      )}
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default UserManagementPage;
