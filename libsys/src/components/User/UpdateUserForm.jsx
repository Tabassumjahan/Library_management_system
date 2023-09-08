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
      // Handle API error here
      console.error('Failed to update user data.');
    }
  } catch (error) {
    // Handle network or other errors here
    console.error('Error updating user data:', error);
  }
};

  return (
    <div>
      <h2>Update User</h2>
      {isUpdateSuccess && (
        <div className="success-message">User updated successfully</div>
  )}
      <form onSubmit={handleSubmit}>
        <div>
          <label className="custom-label">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={updatedUser.firstName}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label className="custom-label">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={updatedUser.lastName}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label className="custom-label">E-Mail:</label>
          <input
            type="text"
            name="email"
            value={updatedUser.email}
            onChange={handleChange}
            
          />
              </div>
              <div>
          <label className="custom-label">Password:</label>
          <input
            type="text"
            name="Password"
            value={updatedUser.password}
            onChange={handleChange}
            
          />
              </div>
              <br></br>
        {/* Add more input fields for additional user properties */}
      <button type="submit" className="update-button">Update User</button>
      <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
