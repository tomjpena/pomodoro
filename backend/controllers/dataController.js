const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Projects = require('../models/projectsModel')

// @desc Gets users project data
// @route GET /api/data
// @access Private
const getData = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
  const projects = await Projects.find({ user: req.userId })

  res.status(200).json(projects)
})

// @desc Gets users project data
// @route PUT /api/data
// @access Private
const updateProject = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userId)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
  const project = await Projects.findOneAndUpdate({ _id: req.body.id}, { pomodoros: req.body.pomodoros}, { new: true })

  res.status(200).json(project)
})

// @desc Adds a project
// @route POST /api/data
// @access Private
const addProject = asyncHandler(async (req, res) => {
  const user = await User.findById(req.userId)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const project = await Projects.create({
    user: user._id,
    title: req.body.title,
    description: req.body.description,
  })

  const projects = await Projects.find({ user: req.userId })

  res.status(201).json(projects)
})

// @desc Deletes a project
// @route POST /api/data
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
  updateProject,
  addProject,
  deleteProject,
}