import React from 'react';

const UserDelete = ({ user, onCancel, onDelete }) => {
  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete user with ID {user.userId}?</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UserDelete;