import React, { useState, useEffect } from "react";

import UpdateUserForm from "./User/UpdateUserForm";
import UserDelete from "./User/UserDelete";

const UserList = ({ editUser }) => {
  const user = JSON.parse(localStorage.getItem("User"));
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [updateMessage, setUpdateMessage] = useState(null);
  const [userId, setUserId] = useState(null);

  const fetchAllUserData = () => {
    fetch("http://localhost:8083/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  useEffect(() => {
    fetchAllUserData();

    fetch("http://localhost:8083/api/getUserId")
      .then((response) => response.json())
      .then((data) => setUserId(data.userId))
      .catch((error) => console.error("Error fetching userId:", error));
  }, []);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setUpdateMessage(null);
  };

  const handleDeleteUser = async (user) => {
    try {
      setDeletingUser(user);
      console.log(user);

      const response = await fetch(`http://localhost:8083/api/${user.id}`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        setDeleteMessage("User deleted successfully.");
        setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
      } else {
        throw new Error("User deletion failed.");
      }
    } catch (error) {
      setDeleteMessage(`Error deleting user: ${error.message}`);
    } finally {
      setDeletingUser(null);
    }
  };

  const handleCancelDelete = () => {
    setDeletingUser(null);
  };

  const handleUpdateUser = (updatedUserData) => {
    const userIndex = users.findIndex((user) => user.id === updatedUserData.id);

    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = updatedUserData;
      setUsers(updatedUsers);

      setUpdateMessage("User data updated successfully.");
    }
    setEditingUser(null);
  };

  return (
    <div className="UserList mt-5">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-center border-bottom w-50">User List</h2>
      </div>

      <table className="table table-striped container">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">E-Mail</th>
            <th scope="col">Account Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map(
              (user) =>
                user.email != "admin@123" && (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.accountStatus}</td>
                    <td className="d-flex justify-content-start align-items-center gap-1">
                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => handleEditUser(user)}
                      >
                        Edit
                      </button>
                      <br></br>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteUser(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
            )}
        </tbody>
      </table>

      {editingUser && (
        <UpdateUserForm
          userData={editingUser}
          fetchAllUserData={fetchAllUserData}
          onCancel={handleCancelEdit}
          onUpdate={(updatedUserData) => {
            handleCancelEdit();
          }}
        />
      )}

      {deletingUser && (
        <UserDelete
          user={deletingUser}
          onCancel={handleCancelDelete}
          onDelete={() => {
            handleCancelDelete();
          }}
        />
      )}

      {updateMessage && <p className=" text-center">{updateMessage}</p>}

      {deleteMessage && <p className=" text-center">{deleteMessage}</p>}
    </div>
  );
};

export default UserList;
