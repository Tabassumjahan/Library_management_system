import axios from "axios";

export const userLogin = (payload) => {
  try {
    const res = axios.post("", payload);
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

export const userRegister = (payload) => {
  try {
    const res = axios.post("", payload);
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
