import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
import AddUserForm from "../components/User/AddUserForm";
import "./UserManagementPage.css";
import UpdateUserForm from "../components/User/UpdateUserForm";
import Navbar from "../components/Navbar";
const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8083/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (updatedUser) => {
    fetch(`http://localhost:8083/api/users/{userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (response.status === 200) {
          const updatedUsers = users.map((user) =>
            user.userId === updatedUser.userId ? updatedUser : user
          );
          setUsers(updatedUsers);
          setEditingUser(null); 
        } else {
          console.error("Error updating user:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const deleteUser = (userId) => {
    fetch(`http://localhost:8083/api/users/{userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          setUsers(users.filter((user) => user.userId !== userId));
        } else {
          console.error("Error deleting user:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <Navbar />
      
      <h2 className="text-center mt-3">User Management</h2>
       <div className="col text-center container w-80 "> 
          <img
            src="https://img.freepik.com/free-photo/close-up-colorful-books-pile_23-2149082152.jpg?w=1380&t=st=1694347661~exp=1694348261~hmac=bd37b3859bd3ebd19446555b52c155f3527d8890306070d35ebad8140e4ccbda" class="img-fluid2" ></img>
      </div>
      <AddUserForm addUser={addUser} />
      {editingUser && (
        <UpdateUserForm
          userData={editingUser}
          onCancel={() => setEditingUser(null)}
          onUpdate={handleUpdateUser}
        />
      )}
      <div className=" mt-4 ">
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
      </div>
    </div>
  );
} ;

export default UserManagementPage;
