import axios from 'axios'

const API_URL = '/api/users'

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
  // Post request for logging user in
  const response = await axios.post(`${API_URL}/login`, userData)

  //If user data returns, put data into local storage
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout User
const logout = () => localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login
}

export default authService