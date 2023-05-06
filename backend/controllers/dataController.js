const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Projects = require('../models/projectsModel')
const { auth } = require('../middleware/authMiddleware')

// @desc Gets users project data
// @route GET /api/users/data
// @access Private
const getData = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const projects = Projects.find({ user: user._id })

  res.status(200).json(projects)
})

// @desc Adds a project
// @route POST /api/users/data
// @access Private
const addProject = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const project = await Projects.create({
    user: user._id,
    title: req.title,
    description: req.description,
  })

  res.status(201).json(project)
})

// @desc Deletes a project
// @route POST /api/users/data
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  await Projects.deleteOne({ _id: req.body.projectId }) 

  res.status(200)
})

module.exports = {
  getData,
  addProject,
  deleteProject,
}