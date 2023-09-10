import React, { useState, useEffect } from 'react';
import './UpdateUserForm.css'
const UpdateUserForm = ({ userData, fetchAllUserData, onCancel, onUpdate, updateUserList }) => {
  const [updatedUser, setUpdatedUser] = useState({

    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });


  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  // Use useEffect to update the form fields when userData changes
  useEffect(() => {
    if (userData) {
      // Update the form fields with userData if it exists
      setUpdatedUser({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        email: userData.email || '',
        password: userData.password || '',
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
    const response = await fetch(`http://localhost:8083/api/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

      if (response.status >= 200 && response.status < 300) {
        fetchAllUserData();
            // Success handling
      const updatedUserData = await response.json();
      updateUserList(updatedUserData);
      setIsUpdateSuccess(true);
      onUpdate();
    } else {
      console.error('Failed to update user data.');
    }
  } catch (error) {
    console.error('Error updating user data:', error);
  }
};

  return (
    <div className="container d-flex justify-content-center align-items-center h-100 col">
      <div className="" style={{ width: "50%" }}>
      <h3 className=" text-center mt-3 border-bottom w-70 ">Update User</h3>
      {isUpdateSuccess && (
        <div className="success-message">User updated successfully</div>
  )}
      <form onSubmit={handleSubmit}>
        <div className=" center row g-3 container ms-4 mt-5">
        <div className=" mb-3 col" >
          <label for="firstName" class="form-label">First Name:</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={updatedUser.firstName}
            onChange={handleChange}
            
          />
        </div>
        <div className=" mb-3 col">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={updatedUser.lastName}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label className="form-label">E-Mail:</label>
          <input
            type="text"
              name="email"
              className="form-control"
            value={updatedUser.email}
            onChange={handleChange}
            
          />
          </div>
          <div >
          <label className="form-label">Password:</label>
          <input
            type="text"
              name="Password"
              className="form-control"
            value={updatedUser.password}
            onChange={handleChange}
            
          />
          </div>
          </div>

      <div className="button-container mt-3 text-center">
      <button type="submit" className="update-button" class="btn btn-primary btn-sm">Update User</button>
      <button type="button" onClick={onCancel} className="cancel-button" class="btn btn-danger btn-sm ms-2">Cancel</button>
          </div>
          
        </form>
        </div>
    </div>
  );
};

export default UpdateUserForm;
