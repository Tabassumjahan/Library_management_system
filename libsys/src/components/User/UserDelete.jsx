import React from 'react';

const UserDelete = ({ user, onCancel, onDelete }) => {
  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete user with ID {user.userId}?</p>
      <div className="container mt-5 text-center bottom-border w-50">
      <button onClick={onDelete} class="btn btn-danger btn-sm">Delete</button>
      <button onClick={onCancel} class="btn btn-primary btn-sm">Cancel</button>
    </div>
    </div>
  );
};

export default UserDelete;