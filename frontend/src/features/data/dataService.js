import axios from 'axios'

const API_URL = 'https://pomodoro-api-82f7.onrender.com/api/data'

// Add a new project
const addProject = async (projectData) => {
  // Post request for registering user
  const response = await axios.post(API_URL, projectData)

  return response.data
}

// Get project data
const getData = async () => {
  const response = await axios.get(`${API_URL}/${userData}`)

  return response.data
}

// Get project data
const updateProject = async (projectData) => {
  const response = await axios.put(`${API_URL}/project`, projectData)

  return response.data
}

// Delete project data
const deleteProject = async (projectData) => {
  const response = await axios.delete(API_URL, userData)

  return response.data
}
const dataService = {
  addProject,
  getData,
  deleteProject,
  updateProject
}

export default dataService