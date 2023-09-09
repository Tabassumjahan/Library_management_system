import axios from "axios";

export const userLogin = async (payload) => {
  try {
    const res = await axios.post("http://localhost:8083/api/login", payload);
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

export const userRegister = async (payload) => {
  try {
    const res = await axios.post("http://localhost:8083/api/register", payload);
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};
