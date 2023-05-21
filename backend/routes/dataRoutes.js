const express = require('express')

// Create router variable to direct routes
const router = express.Router({mergeParams: true})

const {auth} = require('../middleware/authMiddleware')

const { getData, addProject, deleteProject, updateProject } = require('../controllers/dataController')

router.route('/').post(auth, addProject).get(auth, getData).delete(auth, deleteProject)

router.route('/project').put(auth, updateProject)

module.exports = router