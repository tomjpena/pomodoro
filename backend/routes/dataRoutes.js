const express = require('express')

// Create router variable to direct routes
const router = express.Router({mergeParams: true})

const {auth} = require('../middleware/authMiddleware')

const { getData, addProject, deleteProject, updateProject } = require('../controllers/dataController')

router.route('/').post(auth, addProject).delete(auth, deleteProject)

router.route('/:userId').get(auth, getData)

router.route('/project').put(auth, updateProject)

module.exports = router