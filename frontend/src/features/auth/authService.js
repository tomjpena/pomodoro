import axios from 'axios'
axios.defaults.withCredentials = true

const API_URL = 'https://pomodoro-api-82f7.onrender.com/api/users'

// Register User
const register = async (userData) => {
  // Post request for registering user
  const response = await axios.post(API_URL, userData)

  //If user data returns, put data into local storage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login User
const login = async (userData) => {
  try {
    // Post request for logging user in
    const response = await axios.post(`${API_URL}/login`, userData);
    // If user data returns, put data into local storage
    console.log("logged in");
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data; // Return the response data
  } catch (error) {
    console.log("log in error" + error);
    throw error; // Throw the error to be caught by the createAsyncThunk
  }
}

// Logout User
const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login
}

export default authService