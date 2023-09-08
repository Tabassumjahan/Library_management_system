// LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css'
function LoginPage({ setUserRole, setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('user');


  const handleLogin = () => {
    // Implement your login logic here
    // You can make an API request to authenticate the user
    // and get their role. Set userRole and isLoggedIn accordingly.
    // For simplicity, let's assume the userRole is either 'user' or 'admin'.

    // For demo purposes, we'll check a hard-coded username and password.
    if (username === 'admin' && password === 'adminpass') {
      setSelectedRole('Admin');
      setUserRole(selectedRole);
      setIsLoggedIn(true); // Call onLogin with the selected role
    } else if (username === 'user' && password === 'userpass') {
      setSelectedRole('User');
      setUserRole(selectedRole);
      setIsLoggedIn(true);// Call onLogin with the selected role
    } else {
      // Handle login error, display a message or redirect to an error page.
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
      <h2>Login</h2>
      <div className="login-input-container">
        <input
        type="text"
        placeholder="Username"
        value={username}
          onChange={(e) => setUsername(e.target.value)}
          
          />
        </div>
        <div className="login-input-container">
      <input
        type="password"
        placeholder="Password"
        value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        </div>
        <div className="login-input-container">
      <label>
        Select Role:
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        </label>
        </div>

        <div className="login-input-container">


          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
