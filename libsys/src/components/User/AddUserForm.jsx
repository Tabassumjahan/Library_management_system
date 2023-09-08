import React, { useState } from 'react';
import './AddUserForm.css';

const AddUserForm = ({ onAddUser }) => {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
    const [message, setMessage] = useState('');

    const generateUserId = () => {
    // You can generate a random userId here or use any other logic you prefer
    // For simplicity, we're generating a random number between 1000 and 9999
    return Math.floor(1000 + Math.random() * 9000);
  };

    const generateAccountStatus = () => {
    // You can set the initial account status as needed
    return 'Active';
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = generateUserId();
    const accountStatus = generateAccountStatus();
    const newUser = { ...user, userId, accountStatus };
    
    fetch('http://localhost:8083/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error adding user');
      }
      return response.json();
    })
    .then((data) => {
      // Clear the form fields
      setUser({ firstName: '', lastName: '', email: '' });
      setMessage('User added successfully.');

      // Trigger the parent component's function to update the user list
      onAddUser(newUser);
    })
    .catch((error) => {
      console.error('Error adding user:', error);
    });
};

  
  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="add-user-form">
        <div>
          <label className="custom-label">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            required
            className="input-field"
          />
        </div>
        <div>
          <label className="custom-label">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            required
            className="input-field"
          />
        </div>
        <div>
          <label className="custom-label">E-Mail:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            className="input-field"
          />
              </div>
              <br></br>
        <button type="submit" className="add-user-button">Add User</button>
        </form>
    {message && <p className="success-message">{message}</p>} {/* Display the message if it's set */}
    </div>
  );
  };

export default AddUserForm;
