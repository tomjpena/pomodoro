import axios from 'axios'

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
  // Post request for logging user in
  const response = await axios.post(`${API_URL}/login`, userData)
    .then(() => {
      //If user data returns, put data into local storage
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        
        const setCookieHeader = response.headers['set-cookie']
        const jwtCookie = setCookieHeader.split(';')[0]
          document.cookie = jwtCookie
      }
    }
    )
  

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