// api.js
export const deleteUser = async (userId) => {
  try {
    const response = await fetch('http://localhost:8083/api/users/${userId}', {
      method: 'DELETE',
    });

    if (response.status === 204) {
      // User deleted successfully
      return;
    } else {
      // Handle error cases
      throw new Error('User deletion failed.');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

