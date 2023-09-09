import React, { useState, useEffect } from "react";
import "./UserList.css";
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
    // Fetch the list of users from your Spring Boot API
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
        // User deleted successfully
        setDeleteMessage("User deleted successfully.");

        // Update the user list by filtering out the deleted user
        setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
      } else {
        // Handle error cases
        throw new Error("User deletion failed.");
      }
    } catch (error) {
      // Handle errors and show an error message
      setDeleteMessage(`Error deleting user: ${error.message}`);
    } finally {
      setDeletingUser(null);
    }
  };

  const handleCancelDelete = () => {
    setDeletingUser(null);
  };

  const handleUpdateUser = (updatedUserData) => {
    // Handle the update logic here using updatedUserData
    // In this example, we'll update the user in the users array
    // Find the index of the user to update
    const userIndex = users.findIndex((user) => user.id === updatedUserData.id);

    if (userIndex !== -1) {
      // Create a new array with the updated user
      const updatedUsers = [...users];
      updatedUsers[userIndex] = updatedUserData;

      // Update the user list
      setUsers(updatedUsers);

      setUpdateMessage("User data updated successfully.");
    }

    // Close the editing form
    setEditingUser(null);
  };

  return (
    <div className="UserList mt-4">
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
            // Handle update logic here using updatedUserData
            handleCancelEdit();
          }}
        />
      )}

      {deletingUser && (
        <UserDelete
          user={deletingUser}
          onCancel={handleCancelDelete}
          onDelete={() => {
            // Handle delete logic here using deletingUser
            handleCancelDelete();
          }}
        />
      )}

      {updateMessage && <p>{updateMessage}</p>}

      {deleteMessage && <p>{deleteMessage}</p>}
    </div>
  );
};

export default UserList;
