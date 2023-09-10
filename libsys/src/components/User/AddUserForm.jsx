import React, { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });
    const [message, setMessage] = useState('');

    const generateUserId = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

    const generateAccountStatus = () => {
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
      setUser({ firstName: '', lastName: '', email: '' });
      setMessage('User added successfully.');
      onAddUser(newUser);
    })
    .catch((error) => {
      console.error('Error adding user:', error);
    });
};
  return (
    <div className="AddUser mt-3 center row g-3 container ms-4">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="text-center mt-3">Add User</h3>
        
        <form onSubmit={handleSubmit} className="add-user-form">
        <div className="AddUser mt-4 center row g-3 container ms-4"> 
        <div className="mb-3 col mt-3">
          <label className ="form-label">First Name : </label>
          <input
            type="text" 
            name="firstName"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3 col">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            required
            className="form-control"
          />
        </div>
        <div>
          <label className="form-label">E-Mail:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            className="form-control"
              />
            </div>
            <div>
          <label className="form-label"> Password :</label>
          <input
            type="password"
            name="password" 
            placeholder="********"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
            className="form-control"
              />
          </div>
          <div className="button-container mt-3 text-center">
            <button type="submit" className="btn btn-primary ">Add User</button>
            </div>
            </div>
        </form>
    {message && <p className="success-message">{message}</p>} 
      </div>
    </div>
  );
  };

export default AddUserForm;
